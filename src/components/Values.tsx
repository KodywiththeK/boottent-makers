import { values as v } from "@/data/content";
import { Bullets, H2, P, Rich, Section } from "./ui";

export function Values() {
  return (
    <Section id="values">
      <H2>{v.heading}</H2>
      <p className="-mt-4 mb-9 text-[0.95rem] text-muted sm:-mt-6 sm:mb-12 sm:text-base">{v.intro}</p>
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
        {v.items.map((it, i) => (
          <article
            key={it.title}
            className="flex flex-col items-center rounded-2xl border border-line bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine text-base sm:h-12 sm:w-12 sm:text-lg font-extrabold text-paper">
              {i + 1}
            </span>
            <p className="mt-4 text-sm font-extrabold tracking-widest text-ember">
              {it.no}
            </p>
            <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">{it.title}</h3>
            <P>
              <Rich text={it.lead} />
            </P>
            <blockquote className="my-5 w-full rounded-xl bg-sand px-4 py-3.5 text-[13px] sm:my-6 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-sm leading-relaxed text-ink/80">
              {it.quote}
            </blockquote>
            <Bullets items={it.bullets} className="mt-0 text-[0.9rem] sm:text-[0.95rem]" />
          </article>
        ))}
      </div>
    </Section>
  );
}
