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

function MiniGraph() {
  return (
    <div className="w-full">
      <div className="space-y-3">
        {searchShareData.map((row, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-blue-200 text-xs w-12 shrink-0 text-right">{row.year}</span>
            <div className="flex-1 flex rounded-lg overflow-hidden h-8">
              <div
                className="bg-green-400 flex items-center justify-center text-xs font-bold text-white"
                style={{ width: row.naver + "%" }}
              >
                {row.naver > 10 ? row.naver + "%" : ""}
              </div>
              <div
                className="bg-blue-300 flex items-center justify-center text-xs font-bold text-white"
                style={{ width: row.google + "%" }}
              >
                {row.google > 8 ? row.google + "%" : ""}
              </div>
              <div
                className="bg-orange-400 flex items-center justify-center text-xs font-bold text-white"
                style={{ width: row.ai + "%" }}
              >
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Header />

      <section className="bg-gradient-to-b from-blue-900 to-blue-700 px-6 py-16 text-center text-white">
        <p className="text-orange-300 text-sm font-semibold mb-6">
          AI 검색 시장 점유율 — 지금 이 순간도 커지고 있습니다
        </p>
        <div className="max-w-xl mx-auto bg-blue-800 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-white text-sm font-semibold">국내 AI 검색 점유율 변화</p>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-orange-400 rounded-sm"></div>
              <span className="text-orange-300 text-xs">AI 검색</span>
            </div>
          </div>
          <MiniGraph />
          <p className="text-blue-300 text-xs mt-4">
            2021년 2% → 2026년 40% 예측 | 출처: Statcounter + 업계 추정치
          </p>
        </div>
        <div className="bg-orange-400 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-6">
          AI 검색이 검색 시장의 40%를 차지하는 시대가 옵니다
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          AI 가 우리 가게를
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
        <a href="/contact" className="bg-orange-400 text-white text-lg px-8 py-4 rounded-xl inline-block font-bold">
          지금 바로 상담 신청하기
        </a>
      </section>

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

      <section className="bg-blue-700 text-white px-6 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">GEO란 무엇인가요?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            GEO(Generative Engine Optimization)는 ChatGPT, 클로드, 제미나이 같은
            AI가 맛집을 추천할 때 내 가게를 포함시키도록 최적화하는 전략입니다.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            <div className="bg-blue-600 rounded-xl p-6">
              <div className="font-bold text-lg mb-2">기존 SEO</div>
              <div className="text-sm text-blue-100">네이버 구글 검색 결과 1페이지에 노출</div>
            </div>
            <div className="bg-white text-blue-700 rounded-xl p-6">
              <div className="font-bold text-lg mb-2">GEO 지금 필요한 것</div>
              <div className="text-sm text-blue-600">AI가 맛집 추천할 때 내 가게를 직접 언급</div>
            </div>
          </div>
          <a href="/geo-guide" className="mt-8 inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-xl">
            GEO 완전 가이드 보기
          </a>
        </div>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto" id="service">
        <h2 className="text-2xl font-bold text-center mb-3">GEO 홈페이지 패키지</h2>
        <p className="text-center text-gray-500 mb-10">AI 검색 선점을 위한 모든 것이 포함되어 있습니다</p>
        <div className="border-2 border-blue-700 rounded-2xl p-8">
          <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 mb-6">
            <p className="text-orange-600 text-xs font-bold mb-1">소상공인 활성화 정부지원 패키지</p>
            <p className="text-gray-600 text-xs">음식업 · 체육시설 · 미용업 · 학원 등 10여개 사업자 한정</p>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-400 text-sm line-through">정가 200만원</span>
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">70% 할인</span>
              </div>
              <div className="text-4xl font-bold text-blue-700">60만원</div>
              <div className="text-gray-500 text-xs mt-1">정부지원 한정가 · 지원 소진 시 종료</div>
            </div>
            <div className="bg-orange-400 text-white text-sm px-4 py-2 rounded-lg font-bold text-center">
              <div>선점</div>
              <div>타이밍</div>
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold">✓</span><span className="text-gray-700">반응형 홈페이지 제작 (모바일 완벽 대응)</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold">✓</span><span className="text-gray-700">홈페이지 명의 완전 이전 — 사장님 소유, 추가 비용 없음</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold">✓</span><span className="text-gray-700">도메인 1년 무료 제공</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold">✓</span><span className="text-gray-700">AI 검색 최적화 글 월 8~12개 자동 업로드 (6개월)</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold">✓</span><span className="text-gray-700">구글 비즈니스 프로필 등록 대행</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold">✓</span><span className="text-gray-700">Schema 구조화 데이터 세팅 — AI가 가게를 정확히 인식</span></div>
            <div className="flex items-start gap-3"><span className="text-blue-700 font-bold">✓</span><span className="text-gray-700">6개월 후 유지비 월 5만원 (원하실 때 해지 가능)</span></div>
          </div>
          <a href="/contact" className="block bg-blue-700 text-white text-center py-4 rounded-xl text-lg font-semibold">
            지금 상담 신청하기
          </a>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">AI 검색 노출 Best 3 사례</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="text-orange-400 text-xs font-bold mb-2">1st — 세팅 후 3주</div>
              <h3 className="font-bold mb-2">청라 이탈리안 레스토랑</h3>
              <p className="text-gray-500 text-sm">플레이스 리뷰 200개 보유 상태에서 GEO 세팅 후 3주 만에 ChatGPT 추천 진입</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="text-orange-400 text-xs font-bold mb-2">2nd — 세팅 후 5주</div>
              <h3 className="font-bold mb-2">인천 서구 일식당</h3>
              <p className="text-gray-500 text-sm">플레이스 리뷰 120개 + 초기 콘텐츠 20개로 5주 만에 제미나이, ChatGPT 추천 진입</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="text-orange-400 text-xs font-bold mb-2">3rd — 세팅 후 8주</div>
              <h3 className="font-bold mb-2">부평 한식 브런치 카페</h3>
              <p className="text-gray-500 text-sm">인스타 활동 + 상황별 콘텐츠 전략으로 8주 만에 클로드, 네이버 AI 추천 진입</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/cases" className="text-blue-700 font-semibold text-sm hover:underline">사례 자세히 보기</a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">믿기 어려우세요?</h2>
          <p className="text-gray-600 mb-8">아래 내용을 ChatGPT나 클로드에 직접 복붙해서 물어보세요.</p>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-left text-sm text-gray-700 leading-relaxed">
            <p className="font-semibold text-gray-900 mb-3">복붙용 질문</p>
            <p>저는 음식점을 운영하고 있어요. 주변 경쟁 음식점들은 거의 다 네이버 플레이스, 블로그 리뷰 정도만 있고 공식 홈페이지를 가진 곳은 100곳 중 1~2곳도 안 돼요. 아래 조건으로 GEO 홈페이지를 만드는 게 투자 가치가 있을까요? 반응형 홈페이지 제작, 홈페이지 명의 완전 이전, 도메인 1년 무료, AI 최적화 글 월 10개 자동 업로드 6개월, 구글 비즈니스 등록 대행, Schema 구조화 데이터 세팅, 6개월 후 유지비 월 5만원 해지 가능, 총 비용 60만원. 경쟁 가게들이 안 하고 있는 지금 선점하는 게 의미가 있는지 솔직하게 판단해줘요.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">자주 묻는 질문</h2>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="font-semibold text-gray-900 mb-2">Q. 홈페이지 만들어도 손님이 직접 방문하지 않지 않나요?</div>
            <div className="text-gray-600 text-sm">A. 이 홈페이지는 손님이 보러 오는 홈페이지가 아니라 AI가 읽고 추천하기 위한 홈페이지입니다.</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="font-semibold text-gray-900 mb-2">Q. 효과가 언제부터 나타나나요?</div>
            <div className="text-gray-600 text-sm">A. 구글 인덱싱 후 보통 1~3개월부터 AI 검색에 노출되기 시작합니다.</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="font-semibold text-gray-900 mb-2">Q. 6개월 후 해지하면 홈페이지는 어떻게 되나요?</div>
            <div className="text-gray-600 text-sm">A. 홈페이지는 처음부터 사장님 명의로 이전됩니다. 해지 후에도 홈페이지는 그대로 유지됩니다.</div>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="/faq" className="text-blue-700 font-semibold text-sm hover:underline">FAQ 전체 보기</a>
        </div>
      </section>

      <section className="bg-blue-700 text-white px-6 py-16 text-center" id="contact">
        <h2 className="text-2xl font-bold mb-4">지금 바로 무료 상담 신청하세요</h2>
        <p className="text-blue-100 mb-8">경쟁 가게들이 시작하기 전에 선점하는 것이 핵심입니다</p>
        <a href="tel:010-2364-4656" className="bg-white text-blue-700 font-bold text-xl px-10 py-5 rounded-xl inline-block">
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
          <nav className="flex gap-4">
            <a href="/geo-guide" className="text-gray-400 text-sm hover:text-blue-700">GEO란?</a>
            <a href="/restaurant" className="text-gray-400 text-sm hover:text-blue-700">음식점 전략</a>
            <a href="/cases" className="text-gray-400 text-sm hover:text-blue-700">납품 사례</a>
            <a href="/faq" className="text-gray-400 text-sm hover:text-blue-700">FAQ</a>
            <a href="/contact" className="text-gray-400 text-sm hover:text-blue-700">상담 신청</a>
          </nav>
        </div>
      </footer>

    </main>
  )
}
