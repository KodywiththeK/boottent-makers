"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  { id: "intro", label: "소개" },
  { id: "about", label: "메이커즈" },
  { id: "target", label: "추천대상" },
  { id: "overview", label: "모집개요" },
  { id: "values", label: "가치" },
  { id: "process", label: "진행방식" },
  { id: "host", label: "운영진" },
  { id: "curriculum", label: "커리큘럼" },
  { id: "faq", label: "FAQ" },
  { id: "apply", label: "신청" },
];

export function SectionNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    const update = () => {
      // 상단 메뉴 아래 기준선을 지난 마지막 섹션을 현재 섹션으로 본다
      const line = 80;
      let current = "";
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    // 활성 항목이 가로 스크롤 영역 안에 보이도록 맞춘다
    const btn = document.querySelector<HTMLElement>(
      `[data-nav-id="${active}"]`,
    );
    const wrap = btn?.parentElement;
    if (!btn || !wrap) return;
    wrap.scrollTo({
      left: btn.offsetLeft - wrap.clientWidth / 2 + btn.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  return (
    <nav
      aria-label="섹션 바로가기"
      className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-1.5 overflow-x-auto px-4 [scrollbar-width:none] sm:justify-center sm:gap-2 [&::-webkit-scrollbar]:hidden">
        {ITEMS.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            data-nav-id={i.id}
            aria-current={active === i.id ? "true" : undefined}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
              active === i.id
                ? "bg-pine text-paper"
                : "text-muted hover:bg-sand hover:text-ink"
            }`}
          >
            {i.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
