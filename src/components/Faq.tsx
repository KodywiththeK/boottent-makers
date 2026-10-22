import { faq as f } from "@/data/content";
import { Callout, Chevron, H2, Rich, Section } from "./ui";

export function Faq() {
  return (
    <Section id="faq">
      <H2>{f.heading}</H2>
      <div className="mx-auto max-w-3xl space-y-3">
        {f.items.map((it) => (
          <details
            key={it.q}
            className="rounded-2xl border border-line bg-white shadow-sm sm:rounded-3xl"
          >
            <summary className="relative px-11 py-4 text-[0.95rem] font-bold leading-snug sm:px-14 sm:py-5 sm:text-lg">
              {it.q}
              <span className="absolute right-4 top-1/2 sm:right-5 -translate-y-1/2 text-muted">
                <Chevron />
              </span>
            </summary>
            <div className="border-t border-line px-5 pb-6 pt-4 text-[0.95rem] sm:px-10 sm:pb-7 sm:pt-5 sm:text-base">
              <p>
                <Rich text={it.a} />
              </p>
              {it.aside && (
                <Callout className="bg-sand/60 shadow-none">
                  <p>
                    <Rich text={it.aside.title} />
                  </p>
                  <ol className="mt-3 space-y-1">
                    {it.aside.items.map((x, i) => (
                      <li key={x}>
                        {i + 1}. {x}
                      </li>
                    ))}
                  </ol>
                </Callout>
              )}
              {it.after && (
                <p className="mt-4">
                  <Rich text={it.after} />
                </p>
              )}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
