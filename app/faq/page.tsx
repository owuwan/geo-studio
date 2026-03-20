// @ts-nocheck
import Header from "../components/Header"
const faqData = [
  { category: "GEO 기본 개념", items: [
    { q: "GEO가 뭔가요? SEO랑 다른 건가요?", a: ["SEO는 네이버, 구글 같은 검색엔진에서 상위 노출되도록 최적화하는 전략입니다.", "GEO는 ChatGPT, 클로드, 제미나이 같은 생성형 AI가 질문에 답할 때 특정 업체를 추천하도록 최적화하는 전략입니다.", "요즘 사람들이 OO동 맛집 추천해줘, OO역 데이트 코스 짜줘 같은 질문을 AI에게 직접 하는 경우가 늘고 있습니다."] },
    { q: "GEO 홈페이지를 만들면 바로 AI에 추천되나요?", a: ["바로 추천되지는 않습니다. 구글 인덱싱에 1~2주, AI 검색 반영에 1~3개월 정도 걸립니다.", "콘텐츠를 빠르게 채우고 구글 비즈니스 프로필을 완성하면 이 기간을 단축할 수 있습니다.", "경쟁 업체들이 아직 GEO를 모르는 지금 시작하는 것이 중요합니다."] },
    { q: "AI 검색이 얼마나 중요해졌나요?", a: ["2024년부터 ChatGPT, 클로드, 제미나이 사용자가 폭발적으로 늘면서 로컬 검색을 AI에게 하는 경우가 급증하고 있습니다.", "네이버도 AI 검색을 강화하고 있어 앞으로 AI 추천 최적화는 선택이 아닌 필수가 될 것입니다.", "지금은 음식점 100곳 중 1~2곳만 GEO 홈페이지를 가지고 있어 선점 효과가 매우 큰 시점입니다."] },
  ]},
  { category: "패키지 및 비용", items: [
    { q: "60만원 패키지에 정확히 뭐가 포함되나요?", a: ["60만원 패키지에는 다음이 모두 포함됩니다.", "반응형 홈페이지 제작 / 홈페이지 명의 완전 이전 / 도메인 1년 무료 / AI 최적화 글 월 8~12개 자동 업로드 6개월 / 구글 비즈니스 프로필 등록 대행 / Schema 구조화 데이터 세팅 / 6개월 후 유지비 월 5만원 해지 가능", "홈페이지는 처음부터 사장님 명의로 이전되며 추후 추가 비용이 없습니다."] },
    { q: "6개월 후 해지하면 홈페이지는 어떻게 되나요?", a: ["홈페이지는 처음부터 사장님 명의로 완전 이전됩니다.", "해지 후에도 홈페이지는 그대로 유지됩니다. 콘텐츠 자동 업로드만 중단됩니다.", "월 5만원 유지비는 원하실 때 언제든 해지 가능하며 위약금이나 추가 비용은 없습니다."] },
    { q: "도메인은 어떻게 제공되나요?", a: ["계약 후 저희가 도메인을 구매해서 사장님 명의로 등록해드립니다.", "1년 무료 제공이며 이후 갱신 비용은 연 1~2만원입니다.", "도메인도 사장님 소유입니다. 추후 인수 비용을 청구하는 일은 없습니다."] },
  ]},
  { category: "효과 및 운영", items: [
    { q: "콘텐츠는 어떻게 자동으로 올라가나요?", a: ["저희가 개발한 AI 콘텐츠 생성 시스템이 GEO 최적화 기준에 맞춘 글을 자동으로 생성하고 홈페이지에 업로드합니다.", "단순 광고 문구가 아니라 AI가 읽고 참조하기 좋은 구조화된 글입니다.", "음식점이라면 청라 파스타 맛집, 인천 서구 데이트 식당 같은 키워드로 작성된 글이 매달 올라갑니다."] },
    { q: "홈페이지를 보고 직접 방문하는 손님이 없으면 의미 없지 않나요?", a: ["GEO 홈페이지는 손님이 직접 방문하는 것을 목적으로 만들지 않습니다.", "AI가 맛집을 추천할 때 참조하는 데이터베이스 역할을 하는 것이 목적입니다.", "손님이 ChatGPT에게 청라 데이트 코스 짜줘라고 물으면 AI가 우리 식당을 코스에 포함시켜 추천합니다."] },
    { q: "음식점 말고 다른 업종도 가능한가요?", a: ["현재는 음식점을 1차 공략 업종으로 운영하고 있습니다.", "자동차 디테일링, 미용실, 학원, 인테리어 업체 등 지역 기반 소상공인이라면 GEO 전략이 동일하게 적용됩니다.", "다른 업종 문의는 상담을 통해 맞춤 안내해드립니다."] },
  ]},
  { category: "AI 직접 검증", items: [
    { q: "정말 효과가 있는지 어떻게 확인할 수 있나요?", a: ["아래 내용을 ChatGPT나 클로드에 그대로 복붙해서 직접 확인해보세요.", "저는 음식점을 운영하고 있어요. 주변 경쟁 음식점들은 거의 다 네이버 플레이스, 블로그 리뷰 정도만 있고 공식 홈페이지를 가진 곳은 100곳 중 1~2곳도 안 돼요. 아래 조건으로 GEO 홈페이지를 만드는 게 투자 가치가 있을까요? 반응형 홈페이지 제작, 홈페이지 명의 완전 이전, 도메인 1년 무료, AI 최적화 글 월 10개 자동 업로드 6개월, 구글 비즈니스 등록 대행, Schema 구조화 데이터 세팅, 6개월 후 유지비 월 5만원 해지 가능, 총 비용 60만원.", "AI가 직접 판단해드립니다."] },
  ]},
]

export default function FAQ() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-blue-600 text-sm font-semibold mb-3">자주 묻는 질문</p>
          <h1 className="text-4xl font-bold mb-6">FAQ</h1>
          <p className="text-gray-600 text-lg">GEO 홈페이지 제작에 대해 가장 많이 묻는 질문들을 정리했습니다.</p>
        </div>
        <div className="space-y-12">
          {faqData.map((section, si) => (
            <div key={si}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-blue-700 rounded-full"></div>
                <h2 className="text-xl font-bold">{section.category}</h2>
              </div>
              <div className="space-y-4">
                {section.items.map((item, ii) => (
                  <div key={ii} className="border border-gray-100 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4">
                      <div className="flex items-start gap-3">
                        <span className="text-blue-700 font-bold text-lg mt-0.5">Q.</span>
                        <p className="font-semibold text-gray-900">{item.q}</p>
                      </div>
                    </div>
                    <div className="px-6 py-5">
                      <div className="flex items-start gap-3">
                        <span className="text-gray-400 font-bold text-lg mt-0.5">A.</span>
                        <div className="space-y-3">
                          {item.a.map((paragraph, pi) => (
                            <p key={pi} className="text-gray-600 text-sm leading-relaxed">{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-blue-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">더 궁금한 점이 있으신가요?</h2>
          <p className="text-blue-100 mb-6 leading-relaxed">전화 한 통으로 무료 상담을 받아보세요. 우리 가게에 GEO가 필요한지 5분 안에 판단해드립니다.</p>
          <a href="/#contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl inline-block">무료 상담 신청하기</a>
        </div>
      </div>
    </main>
  )
}
