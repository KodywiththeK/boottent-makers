import { Fragment, type ReactNode } from "react";
import { FORM_URL } from "@/data/content";

const TOKEN = /(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|`[^`]+`)/g;

/** **굵게**, ***굵게+기울임***, `코드` 와 줄바꿈(\n)을 렌더링 */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, li, lines) => (
        <Fragment key={li}>
          {line.split(TOKEN).map((part, i) => {
            if (part.startsWith("***"))
              return (
                <strong key={i} className="font-bold italic">
                  {part.slice(3, -3)}
                </strong>
              );
            if (part.startsWith("**"))
              return (
                <strong key={i} className="font-bold">
                  {part.slice(2, -2)}
                </strong>
              );
            if (part.startsWith("`"))
              return (
                <code
                  key={i}
                  className="rounded-md bg-ember-soft px-1.5 py-0.5 text-[0.85em] font-semibold text-ember"
                >
                  {part.slice(1, -1)}
                </code>
              );
            return <Fragment key={i}>{part}</Fragment>;
          })}
          {li < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}

export function Section({
  id,
  tone = "paper",
  children,
}: {
  id?: string;
  tone?: "paper" | "sand" | "pine";
  children: ReactNode;
}) {
  const bg =
    tone === "pine"
      ? "bg-pine-deep text-paper"
      : tone === "sand"
        ? "bg-sand"
        : "bg-paper";
  return (
    <section id={id} className={`${bg} scroll-mt-14 px-5 py-14 text-center sm:px-8 sm:py-20 lg:py-24`}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}

/** 긴 글은 읽기 좋은 폭으로 가운데에 모아준다 */
export function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-2xl text-[0.95rem] leading-[1.75] sm:text-base lg:text-[1.05rem] ${className}`}>
      {children}
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <div className="mb-9 sm:mb-12 lg:mb-14">
      <h2 className="text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
        {children}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-10 sm:mt-5 sm:w-12 rounded-full bg-ember" />
    </div>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 first:mt-0">{children}</p>;
}

export function Quote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mx-auto my-8 max-w-2xl rounded-2xl bg-ember-soft/70 px-5 py-5 text-base leading-relaxed text-ink sm:my-10 sm:rounded-3xl sm:px-8 sm:py-7 sm:text-lg lg:text-xl">
      {children}
    </blockquote>
  );
}

export function Callout({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <aside
      className={`mx-auto my-6 w-full max-w-2xl rounded-2xl border border-line bg-white px-5 py-6 text-ink shadow-sm sm:my-8 sm:rounded-3xl sm:px-8 sm:py-7 ${className}`}
    >
      {children}
    </aside>
  );
}

type BulletVariant = "dots" | "cards" | "cardsDark";

export function Bullets({
  items,
  variant = "dots",
  className = "",
}: {
  items: string[];
  variant?: BulletVariant;
  className?: string;
}) {
  if (variant === "dots") {
    return (
      <ul className={`mt-4 space-y-2.5 ${className}`}>
        {items.map((t) => (
          <li key={t}>
            <span className="mr-2 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-ember align-middle" />
            <Rich text={t} />
          </li>
        ))}
      </ul>
    );
  }
  const card =
    variant === "cardsDark"
      ? "border-white/15 bg-white/10 text-paper"
      : "border-line bg-white text-ink shadow-sm";
  return (
    <ul className={`grid gap-2.5 sm:gap-3 ${className}`}>
      {items.map((t) => (
        <li
          key={t}
          className={`flex items-center justify-center rounded-xl border px-4 py-3 text-[0.95rem] sm:rounded-2xl sm:px-5 sm:py-4 sm:text-base ${card}`}
        >
          <span>
            <Rich text={t} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ApplyButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-ember px-6 py-3.5 text-[0.95rem] font-bold sm:px-8 sm:py-4 sm:text-base text-white shadow-lg shadow-ember/30 transition hover:-translate-y-0.5 hover:bg-[#d96a22] active:translate-y-0 ${className}`}
    >
      {children}
    </a>
  );
}

export function Chevron() {
  return (
    <svg
      className="chev h-5 w-5 shrink-0 transition-transform"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 8l5 5 5-5" />
    </svg>
  );
}
