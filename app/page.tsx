export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <header className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-700">GEO Studio</div>
        <a href="#contact" className="bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">
          무료 상담 신청
        </a>
      </header>

      <section className="bg-blue-50 px-6 py-20 text-center">
        <p className="text-blue-600 text-sm font-semibold mb-3">AI 검색 최적화 홈페이지 전문 제작</p>
        <h1 className="text-4xl font-bold mb-6">
          ChatGPT가 우리 가게를<br />
          <span className="text-blue-700">직접 추천</span>하게 만드세요
        </h1>
        <p className="text-gray-600 text-lg mb-4 max-w-xl mx-auto">
          손님들이 AI에게 ○○동 맛집 추천해줘 라고 물어볼 때 내 음식점이 나오게 만드는 GEO 홈페이지 전문 제작사입니다.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          주변 경쟁 음식점 100곳 중 1~2곳만 하고 있는 지금이 선점 타이밍입니다.
        </p>
        <a href="#contact" className="bg-blue-700 text-white text-lg px-8 py-4 rounded-xl inline-block">
          지금 바로 상담 신청하기
        </a>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto">
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
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">GEO란 무엇인가요?</h2>
          <p className="text-blue-100 text-lg mb-8">
            GEO는 ChatGPT, 클로드, 제미나이 같은 AI가 맛집을 추천할 때 내 가게를 포함시키도록 최적화하는 전략입니다.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-blue-600 rounded-xl p-6">
              <div className="font-bold text-lg mb-2">기존 SEO</div>
              <div className="text-sm">네이버 구글 검색 결과 1페이지에 노출</div>
            </div>
            <div className="bg-white text-blue-700 rounded-xl p-6">
              <div className="font-bold text-lg mb-2">GEO 지금 필요한 것</div>
              <div className="text-sm">AI가 맛집 추천할 때 내 가게를 직접 언급</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto" id="service">
        <h2 className="text-2xl font-bold text-center mb-3">GEO 홈페이지 패키지</h2>
        <p className="text-center text-gray-500 mb-10">AI 검색 선점을 위한 모든 것이 포함되어 있습니다</p>
        <div className="border-2 border-blue-700 rounded-2xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <div className="text-sm text-blue-600 font-semibold mb-1">음식점 전용 패키지</div>
              <div className="text-4xl font-bold">60만원</div>
            </div>
            <div className="bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">선점 타이밍</div>
          </div>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              <span className="text-gray-700">반응형 홈페이지 제작 (모바일 완벽 대응)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              <span className="text-gray-700">홈페이지 명의 완전 이전 — 사장님 소유, 추가 비용 없음</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              <span className="text-gray-700">도메인 1년 무료 제공</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              <span className="text-gray-700">AI 검색 최적화 글 월 8~12개 자동 업로드 (6개월)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              <span className="text-gray-700">구글 비즈니스 프로필 등록 대행</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              <span className="text-gray-700">Schema 구조화 데이터 세팅 — AI가 가게를 정확히 인식</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-700 font-bold">✓</span>
              <span className="text-gray-700">6개월 후 유지비 월 5만원 (원하실 때 해지 가능)</span>
            </div>
          </div>
          <a href="#contact" className="block bg-blue-700 text-white text-center py-4 rounded-xl text-lg font-semibold">
            지금 상담 신청하기
          </a>
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
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="font-semibold text-gray-900 mb-2">Q. 홈페이지 만들어도 손님이 직접 방문하지 않지 않나요?</div>
            <div className="text-gray-600 text-sm">A. 맞습니다. 이 홈페이지는 손님이 보러 오는 홈페이지가 아니라 AI가 읽고 추천하기 위한 홈페이지입니다. ChatGPT가 맛집을 추천할 때 공식 홈페이지의 구조화된 데이터를 참조합니다.</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="font-semibold text-gray-900 mb-2">Q. 효과가 언제부터 나타나나요?</div>
            <div className="text-gray-600 text-sm">A. 구글 인덱싱 후 보통 1~3개월부터 AI 검색에 노출되기 시작합니다. 콘텐츠가 쌓일수록 노출 빈도가 높아집니다.</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="font-semibold text-gray-900 mb-2">Q. 6개월 후 해지하면 홈페이지는 어떻게 되나요?</div>
            <div className="text-gray-600 text-sm">A. 홈페이지는 처음부터 사장님 명의로 이전됩니다. 해지 후에도 홈페이지는 그대로 유지됩니다. 콘텐츠 자동 업로드만 중단됩니다.</div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="font-semibold text-gray-900 mb-2">Q. 네이버 플레이스는 따로 해야 하나요?</div>
            <div className="text-gray-600 text-sm">A. 네이버 플레이스는 사장님이 직접 운영하시는 것이 가장 효과적입니다. 저희는 구글 비즈니스 등록을 대행해드립니다.</div>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 text-white px-6 py-16 text-center" id="contact">
        <h2 className="text-2xl font-bold mb-4">지금 바로 무료 상담 신청하세요</h2>
        <p className="text-blue-100 mb-8">경쟁 가게들이 시작하기 전에 선점하는 것이 핵심입니다</p>
        <a href="tel:010-0000-0000" className="bg-white text-blue-700 font-bold text-xl px-10 py-5 rounded-xl inline-block">
          010-0000-0000
        </a>
        <p className="text-blue-200 text-sm mt-4">평일 오전 9시 ~ 오후 6시 운영</p>
      </section>

      <footer className="px-6 py-8 text-center text-gray-400 text-sm border-t">
        <p className="font-semibold text-gray-600 mb-1">GEO Studio</p>
        <p>AI 검색 최적화 홈페이지 전문 제작 | geo-studio.kr</p>
      </footer>

    </main>
  )
}