import Image from "next/image";
import { host as h } from "@/data/content";
import { H2, Rich, Section } from "./ui";

export function Host() {
  return (
    <Section id="host">
      <H2>{h.heading}</H2>
      <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-white p-6 shadow-lg sm:rounded-[2rem] sm:p-10">
        <Image
          src="/kody.png"
          alt={h.name}
          width={700}
          height={700}
          className="mx-auto h-24 w-24 rounded-full sm:h-32 sm:w-32 border-2 border-ink bg-white object-cover"
        />
        <h3 className="mt-5 text-xl font-extrabold sm:mt-6 sm:text-2xl">{h.name}</h3>
        <p className="mt-3 text-[0.95rem] sm:mt-4 sm:text-base">
          <Rich text={h.body} />
        </p>
      </div>
    </Section>
  );
}
