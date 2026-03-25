// @ts-nocheck
import Header from "../components/Header"

const techStack = [
  {
    title: "Schema Markup (구조화 데이터)",
    desc: "AI와 검색엔진이 업체 정보를 정확하게 읽을 수 있도록 JSON-LD 형식의 구조화 데이터를 모든 페이지에 삽입합니다.",
    code: `{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "청라 이탈리안 레스토랑",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "인천시 서구 청라동 OOO",
    "addressLocality": "인천"
  },
  "telephone": "032-000-0000",
  "openingHours": "Mo-Su 11:00-22:00",
  "servesCuisine": "이탈리안",
  "priceRange": "$$"
}`,
    badge: "AI 필수 인식 코드",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "sitemap.xml 자동 생성",
    desc: "모든 페이지가 구글과 AI 크롤러에 즉시 인덱싱되도록 사이트맵을 자동 생성하고 구글 서치콘솔에 제출합니다.",
    code: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.kr</loc>
    <lastmod>2025-03-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.kr/menu</loc>
    <lastmod>2025-03-20</lastmod>
    <priority>0.9</priority>
  </url>
</urlset>`,
    badge: "구글 인덱싱 가속",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    title: "robots.txt — AI 크롤러 허용",
    desc: "ChatGPT, 클로드, 제미나이 등 주요 AI 크롤러가 홈페이지를 자유롭게 읽을 수 있도록 설정합니다.",
    code: `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://example.kr/sitemap.xml`,
    badge: "AI 크롤러 전용 설정",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    title: "메타데이터 최적화",
    desc: "각 페이지마다 지역명, 업종, 서비스명이 포함된 최적화된 제목과 설명을 작성해 AI와 검색엔진이 페이지 내용을 즉시 파악하도록 합니다.",
    code: `export const metadata = {
  title: "청라 이탈리안 레스토랑 | 인천 서구 파스타 맛집",
  description:
    "인천 서구 청라에서 정통 이탈리안 파스타와 피자를 제공하는 레스토랑입니다. 데이트, 가족 외식, 비즈니스 미팅에 적합한 공간입니다.",
  keywords: "청라 이탈리안, 인천 서구 파스타, 청라 데이트 맛집",
  openGraph: {
    title: "청라 이탈리안 레스토랑",
    description: "인천 서구 청라 파스타 전문점",
    locale: "ko_KR",
  },
}`,
    badge: "검색 노출 최적화",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    title: "엔티티 고정 (NAP 일관성)",
    desc: "홈페이지, 구글 비즈니스, 네이버 플레이스 등 모든 플랫폼에서 업체명, 주소, 전화번호를 완전히 동일하게 세팅해 AI가 하나의 확정된 업체로 인식하도록 합니다.",
    code: `// 모든 플랫폼에서 동일하게 유지
업체명: 청라 이탈리안 레스토랑  (띄어쓰기까지 동일)
주소:   인천광역시 서구 청라동 OOO로 00
전화:   032-000-0000
카테고리: 이탈리안 레스토랑

// AI 판단 기준
홈페이지 정보 = 구글 비즈니스 정보
              = 네이버 플레이스 정보
→ 동일 엔티티 확정 = 추천 신뢰도 상승`,
    badge: "엔티티 신뢰 확보",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "토픽 클러스터 내부 링크 구조",
    desc: "작업사례 → 서비스 페이지 → 지역 페이지가 서로 연결되는 토픽 클러스터 구조를 설계해 AI가 사이트 전체를 하나의 전문 지식 묶음으로 인식하도록 합니다.",
    code: `// 내부 링크 설계 예시
/menu/pasta          → /area/cheongna (지역 연결)
/menu/pasta          → /guide/what-is-geo (전문성 연결)
/cases/case-01       → /menu/pasta (서비스 연결)
/area/cheongna       → /cases/ (사례 연결)

// AI 인식 결과
"청라" ↔ "이탈리안" ↔ "파스타"
→ 지역-업종-서비스 관계망 형성
→ 지역 질문 시 추천 확률 상승`,
    badge: "AI 지식 연결망",
    badgeColor: "bg-indigo-100 text-indigo-700",
  },
]

const process = [
  { step: "01", title: "계약 및 정보 수집", desc: "업체명, 주소, 전화번호, 메뉴/서비스 정보, 사진을 수집합니다. 카카오톡으로 간단히 전달해주시면 됩니다." },
  { step: "02", title: "GEO 구조 설계", desc: "업종과 지역에 맞는 페이지 구조, URL 설계, 내부 링크 구조를 설계합니다." },
  { step: "03", title: "홈페이지 제작", desc: "Next.js 기반 반응형 홈페이지를 제작합니다. Schema Markup, 메타데이터, sitemap, robots.txt를 모두 적용합니다." },
  { step: "04", title: "구글 세팅", desc: "구글 비즈니스 프로필 등록, 구글 서치콘솔 등록, 사이트맵 제출을 진행합니다." },
  { step: "05", title: "콘텐츠 자동 업로드", desc: "AI 기반 GEO 최적화 콘텐츠를 월 8~12개 자동 생성하고 업로드합니다." },
  { step: "06", title: "AI 노출 모니터링", desc: "ChatGPT, 클로드, 제미나이에서 실제 추천 여부를 주기적으로 확인하고 결과를 공유합니다." },
]

export default function Tech() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Header />

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-12">
          <p className="text-blue-600 text-sm font-semibold mb-3">기술 구현 방식</p>
          <h1 className="text-4xl font-bold mb-4">
            GEO Studio가 실제로 적용하는 기술
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            단순히 홈페이지를 만드는 것이 아닙니다.
            AI가 업체를 신뢰하고 추천하도록 만드는
            6가지 핵심 기술을 모든 홈페이지에 적용합니다.
          </p>
        </div>

        <section className="mb-16 space-y-8">
          {techStack.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">

              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-blue-700 font-bold text-lg">{String(i+1).padStart(2,"0")}</span>
                  <h2 className="font-bold text-xl">{item.title}</h2>
                  <span className={"text-xs font-bold px-3 py-1 rounded-full " + item.badgeColor}>{item.badge}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="bg-gray-900 p-5">
                <p className="text-gray-500 text-xs mb-3">실제 적용 코드</p>
                <pre className="text-green-400 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap">{item.code}</pre>
              </div>

            </div>
          ))}
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">제작 프로세스</h2>
          <div className="space-y-4">
            {process.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 border border-gray-100 rounded-xl">
                <span className="text-blue-700 font-bold text-xl shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-blue-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">기술이 궁금하신가요?</h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            실제로 어떻게 적용되는지 전화 상담으로 직접 확인해보세요.
          </p>
          <a href="/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl inline-block">
            무료 상담 신청하기
          </a>
        </section>

      </div>
    </main>
  )
}
