"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    src: "/header1.jpg",
    alt: "아이디어로 고객과 수익을 만들어가는 과정을 노트에 기록하는 부트텐트 메이커즈 마스코트 일러스트",
    w: 1200,
    h: 800,
    fit: "object-cover object-[30%_40%]",
  },
  {
    src: "/header2.jpeg",
    alt: "부트텐트 오프라인 공간에서 함께 모여 이야기하는 메이커즈 크루들",
    w: 1200,
    h: 900,
    fit: "object-cover object-[50%_65%]",
  },
];
const INTERVAL = 4500;

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);

  const go = useCallback(
    (n: number) => setI((n + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((p) => (p + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative mx-auto mt-9 w-full overflow-hidden rounded-2xl shadow-xl sm:mt-12 sm:rounded-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => {
        startX.current = e.touches[0].clientX;
        setPaused(true);
      }}
      onTouchEnd={(e) => {
        if (startX.current !== null) {
          const dx = e.changedTouches[0].clientX - startX.current;
          if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
        }
        startX.current = null;
        setPaused(false);
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="부트텐트 메이커즈 소개 이미지"
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {SLIDES.map((s, idx) => (
          <div
            key={s.src}
            className="h-64 w-full shrink-0 sm:h-[22rem] md:h-[28rem] lg:h-[32rem]"
            aria-hidden={idx !== i}
          >
            <Image
              src={s.src}
              alt={s.alt}
              width={s.w}
              height={s.h}
              priority={idx === 0}
              className={`h-full w-full ${s.fit}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-3 flex sm:bottom-4 justify-center gap-2">
        {SLIDES.map((s, idx) => (
          <button
            key={s.src}
            type="button"
            aria-label={`${idx + 1}번째 이미지`}
            aria-current={idx === i}
            onClick={() => go(idx)}
            className={`h-2.5 rounded-full transition-all ${
              idx === i ? "w-7 bg-ember" : "w-2.5 bg-ink/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
