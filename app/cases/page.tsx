// @ts-nocheck
import Header from "../components/Header"
const cases = [
  {
    rank: "1st",
    label: "가장 빠른 노출",
    period: "세팅 후 3주",
    category: "청라 이탈리안 레스토랑",
    description: "ChatGPT, 클로드에서 청라 데이트 맛집, 청라 소개팅 식당 검색 시 상위 추천에 포함되기 시작했습니다.",
    tags: ["청라", "이탈리안", "데이트 맛집"],
    before: "네이버 플레이스만 운영, AI 검색 노출 0건",
    after: "GEO 세팅 3주 후 ChatGPT, 클로드 동시 추천 진입",
    reason: "GEO 세팅 전부터 네이버 플레이스에 리뷰가 200개 이상 쌓여 있었습니다. 기본 신뢰 데이터가 충분한 상태에서 GEO 홈페이지와 구글 비즈니스 세팅이 더해지자 AI가 빠르게 신뢰 업체로 확정했습니다. 플레이스 리뷰가 많을수록 GEO 효과가 빠르게 나타납니다.",
  },
  {
    rank: "2nd",
    label: "두 번째 빠른 노출",
    period: "세팅 후 5주",
    category: "인천 서구 일식당",
    description: "제미나이, ChatGPT에서 인천 서구 가족 외식, 검단 일식 맛집 추천 질문에 포함되기 시작했습니다.",
    tags: ["인천 서구", "일식", "가족 외식"],
    before: "홈페이지 없음, 플레이스 리뷰 120개 보유",
    after: "GEO 세팅 5주 후 제미나이, ChatGPT 추천 진입",
    reason: "플레이스 리뷰 120개가 기반이 된 상태에서 GEO 홈페이지 콘텐츠 20개를 초기에 빠르게 채운 것이 주효했습니다. 콘텐츠 누적 속도가 빠를수록 구글 인덱싱이 빨라지고 AI 추천 진입도 앞당겨집니다.",
  },
  {
    rank: "3rd",
    label: "세 번째 빠른 노출",
    period: "세팅 후 8주",
    category: "부평 한식 브런치 카페",
    description: "클로드, 네이버 AI에서 부평 브런치 맛집, 부평 혼밥 추천 질문에 포함되기 시작했습니다.",
    tags: ["부평", "브런치", "혼밥"],
    before: "인스타그램 운영 중, 플레이스 리뷰 60개 보유",
    after: "GEO 세팅 8주 후 클로드, 네이버 AI 추천 진입",
    reason: "플레이스 리뷰 수가 상대적으로 적었지만 인스타그램 활동이 활발해 외부 신호가 다양했습니다. GEO 홈페이지에 혼밥, 브런치 등 구체적인 방문 상황별 콘텐츠를 채운 것이 AI 추천 진입을 앞당겼습니다.",
  },
]

export default function Cases() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Header />

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-12">
          <p className="text-blue-600 text-sm font-semibold mb-3">납품 사례</p>
          <h1 className="text-4xl font-bold mb-4">AI 검색 노출 Best 3</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            GEO 세팅 후 가장 빠르게 AI 추천에 포함된 사례 3건입니다.
            업체 상호는 고객 요청에 따라 비공개로 운영됩니다.
          </p>
        </div>

        <div className="space-y-10">
          {cases.map((item, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">

              <div className="bg-blue-700 px-6 py-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-white text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                    {item.rank}
                  </span>
                  <span className="text-blue-200 text-sm">{item.label}</span>
                </div>
                <div className="flex items-start justify-between">
                  <h3 className="text-white font-bold text-xl">{item.category}</h3>
                  <span className="bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full shrink-0 ml-4">
                    {item.period}
                  </span>
                </div>
                <div className="flex gap-2 mt-3">
                  {item.tags.map((tag, ti) => (
                    <span key={ti} className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 space-y-6">

                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                    <p className="text-red-600 text-xs font-bold mb-2">BEFORE — GEO 세팅 전</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.before}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                    <p className="text-blue-600 text-xs font-bold mb-2">AFTER — GEO 세팅 후</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.after}</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4">
                  <p className="text-yellow-700 text-xs font-bold mb-2">빠르게 노출된 이유</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.reason}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
          <p className="text-gray-500 text-sm mb-1">납품 사례는 계속 업데이트됩니다</p>
          <p className="text-gray-700 font-semibold text-sm">
            플레이스 리뷰가 많을수록 GEO 효과가 빠르게 나타납니다
          </p>
        </div>

        <div className="mt-6 bg-blue-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            우리 가게도 AI 추천에 포함되고 싶으신가요?
          </h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            지금 상담 신청하시면 우리 가게 맞춤 GEO 전략을 안내해드립니다.
          </p>
          <a href="/#contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl inline-block">
            무료 상담 신청하기
          </a>
        </div>

      </div>
    </main>
  )
}
