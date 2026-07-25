import Link from "next/link";
import { getTodayFeed, getStances } from "@agora/domain/claims";
import { todayUtc } from "@agora/domain/db";
import { toPublicView } from "@agora/contracts/public/claim";
import type { ClaimPublicView } from "@agora/contracts/public/claim";
import type { Stance } from "@agora/contracts/internal/claim";
import { getViewerActor } from "../lib/viewer";
import { DOMAIN_LABEL, STANCE_LABEL } from "../components/labels";

export const dynamic = "force-dynamic";

function ParticipationLine({ view, stance }: { view: ClaimPublicView; stance?: Stance }) {
  if (stance) {
    return (
      <p className="card-meta">
        <span className={`stance-chip stance-chip--${stance}`}>You: {STANCE_LABEL[stance]}</span>
        <span className="card-cta">See the split &rarr;</span>
      </p>
    );
  }
  return (
    <p className="card-meta">
      <span>
        {view.participationTotal === 0
          ? "Be among the first to position"
          : `${view.participationTotal} ${view.participationTotal === 1 ? "person has" : "people have"} taken a position`}
      </span>
      <span className="card-cta">Where do you stand? &rarr;</span>
    </p>
  );
}

export default async function TodayPage() {
  const [rows, actor] = await Promise.all([getTodayFeed(), getViewerActor()]);
  const today = todayUtc();
  const views = rows.map((r) => toPublicView(r, today));
  const stances = actor ? await getStances(actor, views.map((v) => v.id)) : new Map<string, Stance>();

  const flagship = views.find((v) => v.status.isFlagshipToday) ?? views[0];
  const rest = views.filter((v) => v !== flagship);

  if (!flagship) {
    return <div className="shell empty-state">No claims are live yet. The agora opens soon.</div>;
  }

  return (
    <div className="shell-wide">
      <section aria-label="Today’s claim">
        <p className="section-kicker">Today&rsquo;s claim</p>
        <Link href={`/c/${flagship.slug}`} className="hero-card">
          <p className="card-chips">
            <span className="domain-chip">{DOMAIN_LABEL[flagship.domain]}</span>
            {flagship.tier === "conflict" && <span className="tier-chip">Contested framing</span>}
          </p>
          <h1 className="hero-sentence">{flagship.sentence}</h1>
          <ParticipationLine view={flagship} stance={stances.get(flagship.id)} />
        </Link>
      </section>

      {rest.length > 0 && (
        <section aria-label="Also live">
          <p className="section-kicker">Also live</p>
          <div className="feed-grid">
            {rest.map((v) => (
              <Link key={v.id} href={`/c/${v.slug}`} className="feed-card">
                <p className="card-chips">
                  <span className="domain-chip">{DOMAIN_LABEL[v.domain]}</span>
                </p>
                <h2 className="feed-sentence">{v.sentence}</h2>
                <ParticipationLine view={v} stance={stances.get(v.id)} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
