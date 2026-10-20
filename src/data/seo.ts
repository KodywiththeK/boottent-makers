import { FORM_URL, TITLE, faq } from "./content";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://boottent-makers.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "부트텐트 메이커즈";
export const BOOTTENT_URL = "https://boottent.com";

export const DESCRIPTION =
  "아이디어는 있는데 시작이 어려운 분들을 위한 6주 오프라인 실행 모임. 작게 시작하고, 나만의 가치와 해결하고 싶은 문제를 찾아 실제 유저와 연결되는 경험까지. 부트텐트 메이커즈 2기 모집 중 (전액 무료, 최대 10명).";

export const KEYWORDS = [
  "부트텐트",
  "부트텐트 메이커즈",
  "메이커즈",
  "메이커 모임",
  "사이드프로젝트",
  "사이드프로젝트 모임",
  "아이디어 실행",
  "서비스 만들기",
  "1인 창업",
  "부업",
  "유저 만들기",
  "오프라인 모임",
  "스타터즈",
];

const plain = (t: string) => t.replace(/\*+|`/g, "").replace(/\n/g, " ");

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BOOTTENT_URL}#org`,
      name: "부트텐트",
      url: BOOTTENT_URL,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "ko-KR",
      publisher: { "@id": `${BOOTTENT_URL}#org` },
    },
    {
      "@type": "Course",
      "@id": `${SITE_URL}#course`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "ko-KR",
      url: SITE_URL,
      image: `${SITE_URL}/starters.jpeg`,
      provider: { "@id": `${BOOTTENT_URL}#org` },
      educationalLevel: "Beginner",
      teaches:
        "아이디어 실행, 나만의 가치 발견, 문제 정의, 잠재 유저 발굴, 지속 가능한 실행 계획",
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Onsite",
        courseWorkload: "P6W",
        location: { "@type": "Place", name: "부트텐트" },
        instructor: { "@type": "Person", name: "코디(김동성)" },
      },
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "KRW",
        url: FORM_URL,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: plain(
            [it.a, ...(it.aside ? it.aside.items : []), it.after ?? ""]
              .filter(Boolean)
              .join(" "),
          ),
        },
      })),
    },
  ],
};
