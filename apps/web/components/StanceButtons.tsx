import type { Stance } from "@agora/contracts/internal/claim";
import { takePosition } from "../app/actions/position";
import { STANCE_LABEL } from "./labels";

const ALL: Stance[] = ["agree", "disagree", "complicated"];

// Plain form POST to the server action — positions work with JavaScript disabled.
export function StanceButtons({
  slug,
  surface,
  exclude,
}: {
  slug: string;
  surface: string;
  exclude?: Stance;
}) {
  const options = ALL.filter((s) => s !== exclude);
  return (
    <form action={takePosition} className={`stance-row${options.length === 2 ? " stance-row--two" : ""}`}>
      <input type="hidden" name="slug" value={slug} />
      <input type="hidden" name="surface" value={surface} />
      {options.map((s) => (
        <button key={s} type="submit" name="stance" value={s} className={`stance-btn stance-btn--${s}`}>
          {STANCE_LABEL[s]}
        </button>
      ))}
    </form>
  );
}
