import { makers as m, together as t } from "@/data/content";
import { Bullets, Callout, H2, P, Prose, Quote, Rich, Section } from "./ui";

export function Makers() {
  return (
    <>
      <Section tone="sand">
        <H2>{m.heading}</H2>
        <Prose>
          {m.intro.map((x) => (
            <P key={x}>
              <Rich text={x} />
            </P>
          ))}
          <Bullets
            items={m.bullets}
            variant="cards"
            className="mt-5 sm:mt-6 sm:grid-cols-2"
          />
          <P>
            <Rich text={m.afterBullets} />
          </P>
        </Prose>

        <Callout>
          <p className="text-2xl sm:text-3xl">{m.aside.emoji}</p>
          <p className="mt-3 text-lg leading-snug sm:text-xl">
            <Rich text={m.aside.title} />
          </p>
          <Bullets items={m.aside.bullets} />
        </Callout>

        <Prose>
          {m.after.map((x) => (
            <P key={x}>
              <Rich text={x} />
            </P>
          ))}
        </Prose>
      </Section>

      <Section>
        <H2>{t.heading}</H2>
        <Prose>
          {t.paragraphs.map((x) => (
            <P key={x}>
              <Rich text={x} />
            </P>
          ))}
        </Prose>
        <Quote>
          <Rich text={t.quote} />
        </Quote>
        <Prose>
          {t.after.map((x) => (
            <P key={x}>
              <Rich text={x} />
            </P>
          ))}
        </Prose>
      </Section>
    </>
  );
}
