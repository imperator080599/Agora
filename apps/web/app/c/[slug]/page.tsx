import { notFound } from "next/navigation";
import { getClaimBySlug, getRevealedExtras } from "@agora/domain/claims";
import { todayUtc } from "@agora/domain/db";
import { toPublicView } from "@agora/contracts/public/claim";
import type { ClaimPublicView } from "@agora/contracts/public/claim";
import { toRevealedView } from "@agora/contracts/internal/claim";
import { getViewerActor } from "../../../lib/viewer";
import { StanceButtons } from "../../../components/StanceButtons";
import { SplitPanel } from "../../../components/SplitPanel";
import { DOMAIN_LABEL, ERROR_MESSAGE, STANCE_LABEL } from "../../../components/labels";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ e?: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const row = await getClaimBySlug(slug);
  return { title: row ? row.sentence : "Claim" };
}

function ClaimHeader({ view }: { view: ClaimPublicView }) {
  return (
    <header className="claim-header">
      <p className="card-chips">
        <span className="domain-chip">{DOMAIN_LABEL[view.domain]}</span>
        {view.status.isFlagshipToday && <span className="flagship-chip">Today&rsquo;s claim</span>}
        {view.tier === "conflict" && <span className="tier-chip">Contested framing</span>}
        {view.status.phase === "archived" && <span className="tier-chip">Archived</span>}
      </p>
      <h1 className="claim-sentence">{view.sentence}</h1>
      {view.withdrawn && (
        <p className="withdrawn-note" role="alert">
          This claim was withdrawn: {view.withdrawn.reason}
        </p>
      )}
    </header>
  );
}

function ContextSection({ view }: { view: ClaimPublicView }) {
  if (view.context.bullets.length === 0) return null;
  return (
    <section className="context" aria-label="Context">
      <p className="section-kicker">What&rsquo;s established</p>
      <ul className="context-list">
        {view.context.bullets.map((b, i) => (
          <li key={i} className="context-item">
            <p>{b.text}</p>
            <p className="context-sources">
              {b.sources.map((s, j) => (
                <a key={j} href={s.url} rel="noopener noreferrer" target="_blank" title={s.title}>
                  {s.publisher}
                </a>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function ClaimPage({ params, searchParams }: Props) {
  const [{ slug }, { e }] = await Promise.all([params, searchParams]);
  const row = await getClaimBySlug(slug);
  if (!row) notFound();

  const actor = await getViewerActor();
  const extras = actor ? await getRevealedExtras(actor, row.id) : null;
  const today = todayUtc();
  const error = e ? ERROR_MESSAGE[e] : undefined;

  // ---- Pre-position: ClaimPublicView only. No split data exists in this render path. ----
  if (!extras) {
    const view = toPublicView(row, today);
    return (
      <article className="shell claim-page">
        <ClaimHeader view={view} />
        <ContextSection view={view} />

        {(view.teasers.for || view.teasers.against) && (
          <section className="teasers" aria-label="A taste of the debate">
            <p className="section-kicker">A taste of the debate</p>
            {view.teasers.for && <blockquote className="teaser teaser--for">{view.teasers.for.text}</blockquote>}
            {view.teasers.against && (
              <blockquote className="teaser teaser--against">{view.teasers.against.text}</blockquote>
            )}
          </section>
        )}

        <section className="position-card" aria-label="Take a position">
          <h2 className="position-title">Where do you stand?</h2>
          <p className="position-hint">
            {view.participationTotal > 0
              ? `${view.participationTotal} people have already positioned. `
              : ""}
            The split reveals only after you commit.
          </p>
          {error && <p className="form-error" role="alert">{error}</p>}
          <StanceButtons slug={view.slug} surface="claim_page" />
        </section>
      </article>
    );
  }

  // ---- Post-position: the viewer holds a position; serve the revealed view. ----
  const view = toRevealedView(row, extras, today);
  return (
    <article className="shell claim-page">
      <ClaimHeader view={view} />

      <p className="your-position">
        <span className={`stance-chip stance-chip--${view.yourPosition.stance}`}>
          You: {STANCE_LABEL[view.yourPosition.stance]}
        </span>
        {view.yourPosition.changedCount > 0 && (
          <span className="your-position-note">
            changed {view.yourPosition.changedCount} {view.yourPosition.changedCount === 1 ? "time" : "times"}
          </span>
        )}
      </p>

      <SplitPanel split={view.split} yourStance={view.yourPosition.stance} />

      <ContextSection view={view} />

      {(view.debate.for.length > 0 || view.debate.against.length > 0) && (
        <section aria-label="The debate">
          <p className="section-kicker">The debate</p>
          <div className="debate-grid">
            <div className="debate-col">
              <h3 className="debate-col-title debate-col-title--for">For</h3>
              {view.debate.for.map((a) => (
                <blockquote key={a.id} className="argument">
                  <p>{a.text}</p>
                  <footer className="argument-attr">{a.attribution}</footer>
                </blockquote>
              ))}
            </div>
            <div className="debate-col">
              <h3 className="debate-col-title debate-col-title--against">Against</h3>
              {view.debate.against.map((a) => (
                <blockquote key={a.id} className="argument">
                  <p>{a.text}</p>
                  <footer className="argument-attr">{a.attribution}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="position-card position-card--change" aria-label="Change your position">
        <h2 className="position-title">Changed your mind?</h2>
        {error && <p className="form-error" role="alert">{error}</p>}
        {view.yourPosition.canChangeNow ? (
          <StanceButtons slug={view.slug} surface="claim_page_change" exclude={view.yourPosition.stance} />
        ) : (
          <p className="position-hint">You changed your position in the last 24 hours. It rests until tomorrow.</p>
        )}
      </section>
    </article>
  );
}
