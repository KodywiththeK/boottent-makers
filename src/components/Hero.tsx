import { HeroCarousel } from "./HeroCarousel";
import { ApplyButton, Rich } from "./ui";
import { TITLE } from "@/data/content";

export function Hero() {
  const [lead, sub] = TITLE.split(": ");
  return (
    <header className="bg-paper px-5 pb-6 pt-12 text-center sm:px-8 sm:pb-10 sm:pt-20">
      <div className="mx-auto w-full max-w-5xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-ember px-4 py-1.5 text-sm font-bold text-white">
          ⛺️ 2기 모집 중!
        </span>
        <h1 className="mt-6 text-[2rem] font-extrabold leading-tight tracking-tight sm:mt-8 sm:text-5xl lg:text-6xl">
          {lead}
        </h1>
        <p className="mt-2 text-lg font-bold text-pine sm:mt-3 sm:text-2xl lg:text-3xl">{sub}</p>
        <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink/80 sm:mt-6 sm:text-base lg:text-lg">
          <Rich text="**함께 시작하고, 나만의 가치를 발견하며, 성장하는 베이스캠프**입니다. ⛺️" />
        </p>
        <ApplyButton className="mt-7 sm:mt-9">신청하러 가기 →</ApplyButton>

        <HeroCarousel />
      </div>
    </header>
  );
}
