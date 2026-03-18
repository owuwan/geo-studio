import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GEO Studio | AI 검색 최적화 홈페이지 전문 제작",
  description:
    "ChatGPT, 클로드, 제미나이 등 AI가 맛집을 추천할 때 내 가게가 나오도록 만드는 GEO 홈페이지 전문 제작사입니다. 음식점 전용 AI 검색 최적화 패키지 60만원.",
  keywords:
    "GEO, GEO 홈페이지, AI 검색 최적화, 음식점 홈페이지, AI 추천 최적화, Generative Engine Optimization, GEO 제작, AI SEO",
  openGraph: {
    title: "GEO Studio | AI 검색 최적화 홈페이지 전문 제작",
    description:
      "AI가 맛집을 추천할 때 내 가게가 나오도록 만드는 GEO 홈페이지 전문 제작사",
    url: "https://geo-studio.kr",
    siteName: "GEO Studio",
    locale: "ko_KR",
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GEO Studio",
  description:
    "ChatGPT, 클로드, 제미나이 등 생성형 AI 검색에 최적화된 GEO 홈페이지 전문 제작사. 음식점, 소상공인 대상 AI 추천 최적화 서비스 제공.",
  url: "https://geo-studio.kr",
  telephone: "010-0000-0000",
  areaServed: "대한민국",
  serviceType: [
    "GEO 홈페이지 제작",
    "AI 검색 최적화",
    "Generative Engine Optimization",
    "음식점 홈페이지 제작",
    "Schema 구조화 데이터 세팅",
  ],
  knowsAbout: [
    "GEO",
    "Generative Engine Optimization",
    "AI 검색 최적화",
    "Schema Markup",
    "로컬 SEO",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "GEO 홈페이지 패키지",
    itemListElement: [
      {
        "@type": "Offer",
        name: "음식점 전용 GEO 홈페이지 패키지",
        price: "600000",
        priceCurrency: "KRW",
        description:
          "반응형 홈페이지 제작, AI 최적화 글 월 10개 업로드, 구글 비즈니스 등록, Schema 세팅, 6개월 관리 포함",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}