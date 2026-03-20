// @ts-nocheck
import Header from "../components/Header"
export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Header />

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-12 text-center">
          <p className="text-blue-600 text-sm font-semibold mb-3">무료 상담 신청</p>
          <h1 className="text-4xl font-bold mb-4">5분이면 충분합니다</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            우리 가게에 GEO가 필요한지, 지금 시작하면 얼마나 걸리는지
            전화 한 통으로 바로 확인해드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="bg-blue-50 rounded-xl p-5 text-center">
            <p className="text-3xl mb-2">📞</p>
            <p className="font-bold mb-1">전화 상담</p>
            <p className="text-gray-500 text-sm">바로 연결됩니다</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-5 text-center">
            <p className="text-3xl mb-2">⚡</p>
            <p className="font-bold mb-1">5분 상담</p>
            <p className="text-gray-500 text-sm">빠르게 판단해드립니다</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-5 text-center">
            <p className="text-3xl mb-2">🎁</p>
            <p className="font-bold mb-1">완전 무료</p>
            <p className="text-gray-500 text-sm">상담 비용 없습니다</p>
          </div>
        </div>

        <div className="border-2 border-blue-700 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">지금 바로 전화하세요</h2>
          <a href="tel:010-2364-4656" className="block bg-blue-700 text-white text-center py-5 rounded-xl text-2xl font-bold mb-4 hover:bg-blue-800">
            전화 010-2364-4656
          </a>
          <p className="text-center text-gray-500 text-sm">
            평일 오전 9시 ~ 오후 6시 운영
            <br />
            부재 시 문자 남겨주시면 바로 연락드립니다
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          <h3 className="font-bold mb-4">상담 전 AI에게 직접 물어보세요</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            저희를 믿기 어려우시다면 아래 내용을 ChatGPT나 클로드에 복붙해서 AI가 직접 판단하게 해보세요.
          </p>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-sm text-gray-700 leading-relaxed">
            저는 음식점을 운영하고 있어요. 주변 경쟁 음식점들은 거의 다 네이버 플레이스, 블로그 리뷰 정도만 있고 공식 홈페이지를 가진 곳은 100곳 중 1~2곳도 안 돼요. 아래 조건으로 GEO 홈페이지를 만드는 게 투자 가치가 있을까요? 반응형 홈페이지 제작, 홈페이지 명의 완전 이전, 도메인 1년 무료, AI 최적화 글 월 10개 자동 업로드 6개월, 구글 비즈니스 등록 대행, Schema 구조화 데이터 세팅, 6개월 후 유지비 월 5만원 해지 가능, 총 비용 60만원. 경쟁 가게들이 안 하고 있는 지금 선점하는 게 의미가 있는지 솔직하게 판단해줘요.
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">상담에서 확인해드리는 것</h3>
          <div className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl">
            <span className="text-blue-700 font-bold">✓</span>
            <span className="text-gray-700 text-sm">우리 가게 지역에서 현재 GEO 경쟁 상황</span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl">
            <span className="text-blue-700 font-bold">✓</span>
            <span className="text-gray-700 text-sm">GEO 세팅 후 AI 추천까지 예상 기간</span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl">
            <span className="text-blue-700 font-bold">✓</span>
            <span className="text-gray-700 text-sm">플레이스 리뷰가 몇 개면 효과가 빠른지</span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl">
            <span className="text-blue-700 font-bold">✓</span>
            <span className="text-gray-700 text-sm">60만원 패키지 세부 내용 설명</span>
          </div>
          <div className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl">
            <span className="text-blue-700 font-bold">✓</span>
            <span className="text-gray-700 text-sm">계약 없이 궁금한 것만 물어봐도 됩니다</span>
          </div>
        </div>

      </div>
    </main>
  )
}