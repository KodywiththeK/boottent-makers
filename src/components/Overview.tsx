import { FORM_LABEL, FORM_URL, STARTERS_URL, overview as o } from "@/data/content";
import { ApplyButton, H2, Rich, Section } from "./ui";

export function Overview() {
  return (
    <Section id="overview" tone="sand">
      <H2>{o.heading}</H2>
      <div className="rounded-3xl border border-line bg-white p-5 shadow-lg sm:rounded-[2rem] sm:p-10 lg:p-12">
        <h3 className="text-xl font-extrabold sm:text-2xl lg:text-3xl">{o.title}</h3>
        <dl className="mt-7 grid gap-2.5 sm:mt-9 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
          {o.rows.map((r) => (
            <div
              key={r.k}
              className="flex flex-col items-center justify-center rounded-xl bg-sand/60 px-4 py-4 sm:rounded-2xl sm:px-5 sm:py-6"
            >
              <dt className="text-sm font-bold tracking-wide text-pine">
                {r.k}
              </dt>
              <dd className="mt-1.5 text-base leading-snug sm:mt-2 sm:text-lg">
                <Rich text={r.v} />
              </dd>
            </div>
          ))}
        </dl>

        <details className="mx-auto mt-5 max-w-xl rounded-xl border border-line px-4 py-3 text-[0.95rem] sm:mt-6 sm:rounded-2xl sm:px-5 sm:py-3.5 sm:text-base">
          <summary className="font-semibold">{o.starters}</summary>
          <p className="mt-2">
            <a
              href={STARTERS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pine underline underline-offset-4"
            >
              👉 {o.startersLink}
            </a>
          </p>
        </details>

        <div className="mt-8 border-t border-line pt-7 sm:mt-10 sm:pt-9">
          <p className="text-base font-bold sm:text-lg">{o.applyLead}</p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-pine underline underline-offset-4"
          >
            {FORM_LABEL}
          </a>
          <div className="mt-6">
            <ApplyButton>신청폼 바로가기 →</ApplyButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
