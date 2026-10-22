import { target } from "@/data/content";
import { H2, Section } from "./ui";

export function Target() {
  return (
    <Section id="target">
      <H2>{target.heading}</H2>
      <ol className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {target.items.map((t, i) => (
          <li
            key={t}
            className="flex flex-col items-center rounded-2xl border border-line bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember text-base sm:h-11 sm:w-11 sm:text-lg font-extrabold text-white">
              {i + 1}
            </span>
            <p className="mt-4 text-base font-semibold leading-snug sm:mt-5 sm:text-lg">{t}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
