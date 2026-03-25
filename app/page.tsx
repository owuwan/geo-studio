"use client"
import { useState } from "react"
import Header from "./components/Header"

const searchShareData = [
  { year: "2021", naver: 88, google: 10, ai: 2 },
  { year: "2022", naver: 82, google: 13, ai: 5 },
  { year: "2023", naver: 74, google: 15, ai: 11 },
  { year: "2024", naver: 63, google: 17, ai: 20 },
  { year: "2025", naver: 52, google: 18, ai: 30 },
  { year: "2026", naver: 42, google: 18, ai: 40 },
]

function StackedBar() {
  return (
    <div className="w-full">
      <div className="space-y-2">
        {searchShareData.map((row, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-blue-200 text-xs w-10 shrink-0 text-right">{row.year}</span>
            <div className="flex-1 flex rounded-lg overflow-hidden h-7">
              <div className="bg-green-400 flex items-center justify-center text-xs font-bold text-white" style={{ width: row.naver + "%" }}>
                {row.naver > 15 ? row.naver + "%" : ""}
              </div>
              <div className="bg-blue-300 flex items-center justify-center text-xs font-bold text-white" style={{ width: row.google + "%" }}>
                {row.google > 10 ? row.google + "%" : ""}
              </div>
              <div className="bg-orange-400 flex items-center justify-center text-xs font-bold text-white" style={{ width: row.ai + "%" }}>
                {row.ai > 5 ? row.ai + "%" : ""}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-400 rounded-sm"></div><span className="text-blue-200 text-xs">네이버</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-300 rounded-sm"></div><span className="text-blue-200 text-xs">구글</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-orange-400 rounded-sm"></div><span className="text-blue-200 text-xs">AI 검색</span></div>
      </div>
    </div>
  )
}

const techItems = [
  {
    num: "01",
    title: "Schema Markup (구조화 데이터)",
    desc: "AI와 검색엔진이 업체 정보를 정확하게 읽도록 JSON-LD 구조화 데이터를 모든 페이지에 삽입합니다.",
    code: `{
  "@type": "Restaurant",
  "name": "청라 이탈리안 레스토랑",
  "address": { "addressLocality": "인천 서구 청라" },
  "servesCuisine": "이탈리안",
  "openingHours": "Mo-Su 11:00-22:00"
}`,
    badge: "AI 필수 인식 코드",
  },
  {
    num: "02",
    title: "AI 크롤러 전용 robots.txt",
    desc: "ChatGPT, 클로드, 제미나이 등 주요 AI 크롤러가 홈페이지를 자유롭게 읽을 수 있도록 설정합니다.",
    code: `User-agent: GPTBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Google-Extended
Allow: /`,
    badge: "AI 크롤러 허용",
  },
  {
    num: "03",
    title: "sitemap.xml 자동 생성",
    desc: "모든 페이지가 구글과 AI 크롤러에 즉시 인덱싱되도록 사이트맵을 자동 생성하고 서치콘솔에 제출합니다.",
    code: `<url>
  <loc>https://example.kr</loc>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>`,
    badge: "구글 인덱싱 가속",
  },
]

const geoThree = [
  {
    percent: "20%",
    title: "구조 설계",
    desc: "GEO 최적화 홈페이지 제작 + Schema Markup + sitemap + robots.txt + 구글 비즈니스 등록",
    color: "bg-blue-700",
    ours: true,
  },
  {
    percent: "40%",
    title: "콘텐츠 누적",
    desc: "AI 최적화 글 월 8~12개 자동 업로드 (6개월 = 50~70개). 지역+업종+메뉴 키워드로 AI가 참조하기 좋은 구조화된 글",
    color: "bg-orange-400",
    ours: true,
  },
  {
    percent: "40%",
    title: "외부 신호",
    desc: "구글 비즈니스 프로필 등록 대행 + NAP 일관성 세팅. 여러 플랫폼에서 동일한 정보가 확인되도록 설정",
    color: "bg-green-500",
    ours: true,
  },
]

const cases = [
  { rank: "1st", period: "세팅 후 3주", category: "청라 이탈리안 레스토랑", tags: ["청라", "이탈리안", "데이트"], reason: "플레이스 리뷰 200개 보유 + GEO 세팅으로 3주 만에 ChatGPT 추천 진입" },
  { rank: "2nd", period: "세팅 후 5주", category: "인천 서구 일식당", tags: ["인천 서구", "일식", "가족 외식"], reason: "플레이스 리뷰 120개 + 초기 콘텐츠 20개로 5주 만에 제미나이, ChatGPT 추천 진입" },
  { rank: "3rd", period: "세팅 후 8주", category: "부평 한식 브런치 카페", tags: ["부평", "브런치", "혼밥"], reason: "인스타 활동 + 상황별 콘텐츠 전략으로 8주 만에 클로드, 네이버 AI 추천 진입" },
]

const faqs = [
  { q: "홈페이지를 보고 손님이 직접 방문하지 않지 않나요?", a: "이 홈페이지는 손님이 보러 오는 홈페이지가 아닙니다. AI가 맛집을 추천할 때 참조하는 데이터베이스 역할을 합니다. ChatGPT에 청라 데이트 코스 짜줘라고 물으면 AI가 이 홈페이지 데이터를 바탕으로 식당을 추천합니다." },
  { q: "AI 검색 최적화 글이 일반 블로그 글과 다른가요?", a: "네, 완전히 다릅니다. 일반 홍보 글은 사람이 읽도록 쓰지만 GEO 최적화 글은 AI가 읽고 참조하기 좋은 구조로 작성됩니다. 지역명, 업종, 메뉴, 방문 상황 등 AI가 추천 근거로 삼는 데이터를 구조화해서 담습니다." },
  { q: "60만원이 왜 이렇게 저렴한가요?", a: "저희는 AI 자동화 시스템으로 콘텐츠를 생성하기 때문에 인건비를 대폭 절감했습니다. 일반 에이전시의 동일한 구성은 300~500만원 수준입니다. 초기 시장 선점을 위해 소상공인 대상 특가로 운영하고 있습니다." },
  { q: "6개월 후 해지하면 홈페이지는 어떻게 되나요?", a: "홈페이지는 처음부터 사장님 명의로 완전 이전됩니다. 해지 후에도 홈페이지는 그대로 유지되고 그동안 쌓인 콘텐츠도 남습니다. 콘텐츠 자동 업로드만 중단됩니다. 위약금이나 추가 비용은 없습니다." },
  { q: "효과가 언제부터 나타나나요?", a: "구글 인덱싱 후 보통 1~3개월부터 AI 검색에 노출되기 시작합니다. 네이버 플레이스 리뷰가 많을수록 빠르게 나타납니다. 실제 납품 사례 중 가장 빠른 경우는 3주 만에 ChatGPT 추천 진입에 성공했습니다." },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Header />

      {/* 히어로 */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-700 px-6 py-16 text-center text-white">
        <p className="text-orange-300 text-sm font-semibold mb-6">
          AI 검색 시장 점유율 — 지금 이 순간도 커지고 있습니다
        </p>
        <div className="max-w-xl mx-auto bg-blue-800 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-white text-sm font-semibold">국내 AI 검색 점유율 변화</p>
            <span className="text-orange-300 text-xs">2021 → 2026 예측</span>
          </div>
          <StackedBar />
          <p className="text-blue-300 text-xs mt-4">출처: Statcounter + 업계 추정치 종합</p>
        </div>
        <div className="bg-orange-400 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-6">
          AI 검색이 검색 시장의 40%를 차지하는 시대가 옵니다
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          ChatGPT가 우리 가게를
          <br />
          <span className="text-orange-300">직접 추천</span>하게 만드세요
        </h1>
        <p className="text-blue-100 text-lg mb-4 max-w-xl mx-auto">
          손님들이 AI에게 OO동 맛집 추천해줘 라고 물어볼 때
          내 음식점이 나오게 만드는 GEO 홈페이지 전문 제작사입니다.
        </p>
        <p className="text-blue-200 text-sm mb-8">
          주변 경쟁 음식점 100곳 중 1~2곳만 하고 있는 지금이 선점 타이밍입니다.
        </p>
        <a href="#contact" className="bg-orange-400 text-white text-lg px-8 py-4 rounded-xl inline-block font-bold hover:bg-orange-500">
          지금 바로 상담 신청하기
        </a>
      </section>

      {/* 문제 제기 */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">혹시 이런 상황 아닌가요?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">😰</div>
            <p className="text-gray-700 text-sm">네이버 플레이스는 하는데 AI 검색에는 우리 가게가 안 나온다</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">😤</div>
            <p className="text-gray-700 text-sm">광고비는 계속 나가는데 신규 손님이 늘지 않는다</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">😮</div>
            <p className="text-gray-700 text-sm">요즘 손님들이 AI한테 맛집 물어본다는데 어떻게 대응해야 할지 모른다</p>
          </div>
        </div>
      </section>

      {/* GEO란 */}
      <section className="bg-blue-700 text-white px-6 py-16" id="geo">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 text-sm font-semibold mb-3 text-center">GEO(Generative Engine Optimization)란?</p>
          <h2 className="text-3xl font-bold mb-6 text-center">AI가 추천하는 업체가 되는 기술</h2>
          <p className="text-blue-100 text-lg mb-10 text-center leading-relaxed">
            기존 SEO가 구글·네이버 검색 순위를 높이는 전략이라면,
            GEO는 ChatGPT, 클로드, 제미나이 같은 AI가 질문에 답할 때
            특정 업체를 추천 후보로 인식하게 만드는 최적화 전략입니다.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-blue-600 rounded-xl p-6">
              <div className="font-bold text-lg mb-3">기존 SEO</div>
              <div className="text-blue-100 text-sm space-y-2">
                <p>목표: 검색 결과 1페이지 노출</p>
                <p>방식: 키워드 + 백링크</p>
                <p>결과: 변동 많고 광고비 지속 발생</p>
              </div>
            </div>
            <div className="bg-white text-blue-900 rounded-xl p-6">
              <div className="font-bold text-lg mb-3 text-blue-700">GEO (지금 필요한 것)</div>
              <div className="text-gray-700 text-sm space-y-2">
                <p>목표: AI 추천 후보에 포함</p>
                <p>방식: 엔티티 + 구조화 데이터 + 콘텐츠</p>
                <p>결과: 한번 자리 잡으면 반복 추천</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-800 rounded-xl p-5">
            <p className="text-orange-300 text-sm font-bold mb-2">AI 추천이 작동하는 원리</p>
            <p className="text-blue-100 text-sm leading-relaxed">
              AI는 지역 질문을 받으면 신뢰 가능한 업체 후보 리스트를 먼저 만들고 그 안에서만 추천합니다.
              한번 후보에 들어가면 반복 등장하고, 들어가지 못하면 거의 추천되지 않습니다.
              같은 지역 20개 업체 중 AI가 2~3곳만 반복 추천하는 이유가 바로 이것입니다.
              지금이 선점 타이밍입니다.
            </p>
          </div>
        </div>
      </section>

      {/* GEO 3요소 */}
      <section className="px-6 py-16 max-w-3xl mx-auto" id="service">
        <p className="text-blue-600 text-sm font-semibold mb-3 text-center">GEO 성공 공식</p>
        <h2 className="text-2xl font-bold text-center mb-4">GEO는 3가지가 모두 필요합니다</h2>
        <p className="text-gray-500 text-center mb-10 text-sm">
          대부분의 업체는 구조(20%)만 해줍니다.
          GEO Studio는 3가지를 모두 제공합니다.
        </p>
        <div className="space-y-4 mb-10">
          {geoThree.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <div className={"flex items-center gap-4 px-6 py-4 text-white " + item.color}>
                <span className="text-3xl font-bold opacity-80">{item.percent}</span>
                <div>
                  <p className="font-bold">{item.title}</p>
                </div>
                <span className="ml-auto bg-white text-gray-700 text-xs font-bold px-3 py-1 rounded-full">GEO Studio 제공</span>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 패키지 */}
        <div className="border-2 border-blue-700 rounded-2xl p-8">
          <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-6">
            <p className="text-blue-700 text-xs font-bold mb-1">AI 자동화로 비용을 대폭 낮춘 특가 패키지</p>
            <p className="text-gray-500 text-xs">일반 에이전시 동일 구성 300~500만원 → AI 자동화 시스템으로 절감</p>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-400 text-sm line-through">정가 200만원</span>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">70% 절감</span>
              </div>
              <div className="text-4xl font-bold text-blue-700">60만원</div>
              <div className="text-gray-400 text-xs mt-1">음식점 전용 · 한정 운영</div>
            </div>
            <div className="bg-orange-400 text-white text-sm px-4 py-2 rounded-lg font-bold text-center">
              <div>선점</div>
              <div>타이밍</div>
            </div>
          </div>
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold shrink-0">✓</span><span className="text-gray-700 text-sm">반응형 홈페이지 제작 (모바일 완벽 대응)</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold shrink-0">✓</span><span className="text-gray-700 text-sm">홈페이지 명의 완전 이전 — 사장님 소유, 추후 추가 비용 없음</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold shrink-0">✓</span><span className="text-gray-700 text-sm">도메인 1년 무료 제공</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold shrink-0">✓</span><span className="text-gray-700 text-sm">AI 검색 최적화 글 월 8~12개 자동 업로드 (6개월 · 총 50~70개)</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold shrink-0">✓</span><span className="text-gray-700 text-sm">구글 비즈니스 프로필 등록 대행</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold shrink-0">✓</span><span className="text-gray-700 text-sm">Schema 구조화 데이터 세팅 — AI가 가게를 정확히 인식</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold shrink-0">✓</span><span className="text-gray-700 text-sm">NAP 일관성 세팅 — 모든 플랫폼 정보 통일</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold shrink-0">✓</span><span className="text-gray-700 text-sm">6개월 후 유지비 월 5만원 (원하실 때 해지 가능 · 위약금 없음)</span></div>
          </div>
          <a href="#contact" className="block bg-blue-700 text-white text-center py-4 rounded-xl text-lg font-semibold hover:bg-blue-800">
            지금 상담 신청하기
          </a>
        </div>
      </section>

      {/* 기술 스펙 */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-600 text-sm font-semibold mb-3 text-center">실제 적용 기술</p>
          <h2 className="text-2xl font-bold text-center mb-4">GEO Studio가 실제로 적용하는 기술</h2>
          <p className="text-gray-500 text-center text-sm mb-10">
            단순히 홈페이지를 만드는 것이 아닙니다. AI가 업체를 신뢰하고 추천하도록 만드는 기술을 적용합니다.
          </p>
          <div className="space-y-6">
            {techItems.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-white">
                <div className="px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-700 font-bold">{item.num}</span>
                    <h3 className="font-bold">{item.title}</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full shrink-0">{item.badge}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="bg-gray-900 px-5 py-4">
                  <p className="text-gray-500 text-xs mb-2">실제 적용 코드</p>
                  <pre className="text-green-400 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap">{item.code}</pre>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/tech" className="text-blue-700 text-sm font-semibold hover:underline">전체 기술 스펙 보기 →</a>
          </div>
        </div>
      </section>

      {/* 납품 사례 */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <p className="text-blue-600 text-sm font-semibold mb-3 text-center">납품 사례</p>
        <h2 className="text-2xl font-bold text-center mb-10">AI 검색 노출 Best 3</h2>
        <div className="space-y-6">
          {cases.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <div className="bg-blue-700 px-6 py-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-white text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{item.rank}</span>
                    <span className="text-white font-bold">{item.category}</span>
                  </div>
                  <span className="bg-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">{item.period}</span>
                </div>
                <div className="flex gap-2">
                  {item.tags.map((tag, ti) => (
                    <span key={ti} className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-600 text-sm leading-relaxed">{item.reason}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="/cases" className="text-blue-700 text-sm font-semibold hover:underline">전국 납품 사례 86건 보기 →</a>
        </div>
      </section>

      {/* AI 검증 */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">믿기 어려우세요?</h2>
          <p className="text-gray-600 mb-8">아래 내용을 ChatGPT나 클로드에 직접 복붙해서 AI가 판단하게 해보세요.</p>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-left text-sm text-gray-700 leading-relaxed mb-4">
            <p className="font-semibold text-gray-900 mb-3">복붙용 질문</p>
            <p>저는 음식점을 운영하고 있어요. 주변 경쟁 음식점들은 거의 다 네이버 플레이스, 블로그 리뷰 정도만 있고 공식 홈페이지를 가진 곳은 100곳 중 1~2곳도 안 돼요. 아래 조건으로 GEO 홈페이지를 만드는 게 투자 가치가 있을까요? 반응형 홈페이지 제작, 홈페이지 명의 완전 이전, 도메인 1년 무료, AI 최적화 글 월 10개 자동 업로드 6개월, 구글 비즈니스 등록 대행, Schema 구조화 데이터 세팅, 6개월 후 유지비 월 5만원 해지 가능, 총 비용 60만원. 경쟁 가게들이 안 하고 있는 지금 선점하는 게 의미가 있는지 솔직하게 판단해줘요.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">자주 묻는 질문</h2>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50"
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">{item.q}</span>
                <span className="text-blue-700 font-bold shrink-0">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="/faq" className="text-blue-700 text-sm font-semibold hover:underline">FAQ 전체 보기 →</a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white px-6 py-16 text-center" id="contact">
        <h2 className="text-2xl font-bold mb-4">지금 바로 무료 상담 신청하세요</h2>
        <p className="text-blue-100 mb-8 leading-relaxed">
          경쟁 가게들이 시작하기 전에 선점하는 것이 핵심입니다.
          <br />
          전화 한 통으로 우리 가게 맞춤 GEO 전략을 안내해드립니다.
        </p>
        <a href="tel:010-2364-4656" className="bg-white text-blue-700 font-bold text-xl px-10 py-5 rounded-xl inline-block hover:bg-blue-50">
          전화 010-2364-4656
        </a>
        <p className="text-blue-200 text-sm mt-4">평일 오전 9시 ~ 오후 6시 운영</p>
      </section>

      <footer className="px-6 py-8 border-t">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="font-bold text-gray-700 mb-1">GEO Studio</p>
            <p className="text-gray-400 text-sm">AI 검색 최적화 홈페이지 전문 제작 | geo-studio.kr</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4">
            <a href="/geo-guide" className="text-gray-400 text-sm hover:text-blue-700">GEO란?</a>
            <a href="/tech" className="text-gray-400 text-sm hover:text-blue-700">기술 스펙</a>
            <a href="/restaurant" className="text-gray-400 text-sm hover:text-blue-700">음식점 전략</a>
            <a href="/cases" className="text-gray-400 text-sm hover:text-blue-700">납품 사례</a>
            <a href="/faq" className="text-gray-400 text-sm hover:text-blue-700">FAQ</a>
            <a href="#contact" className="text-gray-400 text-sm hover:text-blue-700">상담 신청</a>
          </nav>
        </div>
      </footer>

    </main>
  )
}
