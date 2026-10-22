import { FORM_LABEL, FORM_URL, apply } from "@/data/content";
import { ApplyButton, Section } from "./ui";

export function Footer() {
  return (
    <>
      <Section id="apply" tone="pine">
        <h2 className="text-2xl font-extrabold leading-snug sm:text-3xl lg:text-4xl">
          {apply.heading}
        </h2>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm text-paper/80 sm:mt-5 sm:text-base underline underline-offset-4"
        >
          {FORM_LABEL}
        </a>
        <div className="mt-7 sm:mt-9">
          <ApplyButton>신청폼 바로가기 →</ApplyButton>
        </div>
      </Section>
      <footer className="bg-pine-deep px-5 pb-24 pt-2 sm:pb-28 text-center text-sm text-paper/50">
        © 부트텐트 메이커즈 ⛺️
      </footer>

      {/* 항상 노출되는 플로팅 신청 버튼 (화면 너비 가득) */}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center px-4 sm:bottom-6 sm:px-8">
        <ApplyButton className="pointer-events-auto w-full max-w-5xl py-3.5 text-base sm:py-4 sm:text-lg shadow-2xl shadow-ember/40 ring-4 ring-paper/80">
          2기 신청하기 →
        </ApplyButton>
      </div>
    </>
  );
}
