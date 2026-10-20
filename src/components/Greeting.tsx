import Image from "next/image";
import { greeting as g } from "@/data/content";
import { H2, P, Prose, Quote, Rich, Section } from "./ui";

export function Greeting() {
  return (
    <Section>
      <H2>{g.heading}</H2>
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 sm:flex-row sm:gap-8 sm:text-left">
        <Image
          src="/kody.png"
          alt="코디(김동성)"
          width={700}
          height={700}
          className="h-24 w-24 shrink-0 rounded-full border-2 border-ink bg-white object-cover sm:h-36 sm:w-36"
        />
        <div className="text-[0.95rem] leading-[1.75] sm:text-base lg:text-[1.05rem]">
          {g.paragraphs.slice(0, 2).map((t) => (
            <P key={t}>
              <Rich text={t} />
            </P>
          ))}
        </div>
      </div>
      <Prose className="mt-4">
        {g.paragraphs.slice(2).map((t) => (
          <P key={t}>
            <Rich text={t} />
          </P>
        ))}
      </Prose>

      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-2.5 sm:mt-14 sm:gap-6">
        {g.projects.map((p) => (
          <figure key={p.src}>
            <Image
              src={p.src}
              alt={p.caption}
              width={p.w}
              height={p.h}
              className="w-full rounded-xl border border-line bg-white object-cover shadow-lg sm:rounded-2xl"
            />
            <figcaption className="mt-2 text-[11px] leading-snug text-muted sm:mt-3 sm:text-sm">
              {p.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <figure className="mx-auto mt-6 max-w-3xl sm:mt-8">
        <Image
          src={g.starters.src}
          alt={g.starters.caption}
          width={g.starters.w}
          height={g.starters.h}
          className="w-full rounded-xl border border-line object-cover shadow-lg sm:rounded-2xl"
        />
        <figcaption className="mt-2 text-[11px] leading-snug text-muted sm:mt-3 sm:text-sm">
          {g.starters.caption}
        </figcaption>
      </figure>

      <Quote>
        <Rich text={g.quote} />
      </Quote>
      <Prose>
        {g.after.map((t) => (
          <P key={t}>
            <Rich text={t} />
          </P>
        ))}
      </Prose>
    </Section>
  );
}
