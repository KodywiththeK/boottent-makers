import { about as a } from "@/data/content";
import { Bullets, Callout, H2, P, Prose, Rich, Section } from "./ui";

export function About() {
  return (
    <Section id="about" tone="pine">
      <H2>{a.heading}</H2>
      <p className="mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl lg:text-2xl">
        <Rich text={a.lead} />
      </p>
      <Bullets
        items={a.bullets}
        variant="cardsDark"
        className="mx-auto mt-8 max-w-3xl sm:mt-10 sm:grid-cols-2"
      />
      <Prose className="mt-8 text-paper/90 sm:mt-10">
        <P>
          <Rich text={a.goal} />
        </P>
        {a.note.map((x) => (
          <P key={x}>
            <Rich text={x} />
          </P>
        ))}
      </Prose>

      <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2">
        {a.asides.map((x) => (
          <Callout key={x.q} className="my-0 max-w-none">
            <p className="text-lg leading-snug sm:text-xl">
              <Rich text={x.q} />
            </p>
            {x.a.map((para) => (
              <P key={para}>
                <Rich text={para} />
              </P>
            ))}
          </Callout>
        ))}
      </div>
    </Section>
  );
}
