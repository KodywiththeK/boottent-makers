import Image from "next/image";
import { greeting, process as p } from "@/data/content";
import { H2, Rich, Section } from "./ui";

export function Process() {
  const s = greeting.starters;
  return (
    <Section tone="sand">
      <H2>{p.heading}</H2>
      <Image
        src={s.src}
        alt="스타터즈 오프라인 모임 현장"
        width={s.w}
        height={s.h}
        className="mx-auto mb-5 w-full rounded-2xl border sm:mb-8 sm:rounded-3xl border border-line object-cover shadow-lg"
      />
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {p.items.map((it) => (
          <div
            key={it.title}
            className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8"
          >
            <p className="text-3xl sm:text-4xl">{it.emoji}</p>
            <h3 className="mt-2 text-lg font-extrabold sm:mt-3 sm:text-xl lg:text-2xl">
              {it.title}
            </h3>
            <p className="mt-2 text-[0.95rem] sm:mt-3 sm:text-base">
              <Rich text={it.body} />
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
