import { curriculum as c } from "@/data/content";
import { Bullets, Chevron, H2, Section } from "./ui";

export function Curriculum() {
  return (
    <Section tone="sand">
      <H2>{c.heading}</H2>
      <div className="mx-auto max-w-3xl space-y-3">
        {c.weeks.map((w, i) => (
          <details
            key={w.title}
            open={i === 1}
            className="rounded-2xl border border-line bg-white shadow-sm sm:rounded-3xl"
          >
            <summary className="relative px-11 py-4 text-[0.95rem] font-bold leading-snug sm:px-14 sm:py-5 sm:text-lg">
              {w.title}
              <span className="absolute right-4 top-1/2 sm:right-5 -translate-y-1/2 text-muted">
                <Chevron />
              </span>
            </summary>
            <div className="border-t border-line px-5 pb-6 pt-4 text-[0.95rem] sm:px-10 sm:pb-7 sm:pt-5 sm:text-base">
              <p className="text-muted">{w.lead}</p>
              {w.bullets && <Bullets items={w.bullets} />}
              {w.task && (
                <p className="mt-5 rounded-xl bg-ember-soft px-4 py-3.5 text-[0.95rem] font-semibold sm:mt-6 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base">
                  <span className="mr-2 text-ember">[과제]</span>
                  {w.task}
                </p>
              )}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
