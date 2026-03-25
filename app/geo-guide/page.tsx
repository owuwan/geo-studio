import Header from "../components/Header"
export default function GeoGuide() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* 헤더 */}
      <Header />

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* 타이틀 */}
        <div className="mb-12">
          <p className="text-blue-600 text-sm font-semibold mb-3">GEO 완전 가이드</p>
          <h1 className="text-4xl font-bold mb-6">
            GEO(Generative Engine Optimization)란 무엇인가
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            GEO는 ChatGPT, 클로드, 제미나이 같은 생성형 AI가 질문에 답할 때
            특정 업체를 추천 후보로 인식하게 만드는 최적화 전략입니다.
            기존 SEO가 검색 결과 순위를 목표로 했다면,
            GEO는 AI가 직접 추천하는 업체가 되는 것을 목표로 합니다.
          </p>
        </div>

        {/* SEO vs GEO */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">SEO vs GEO — 핵심 차이</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-500">기존 SEO</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• 목표: 검색 결과 1페이지 노출</li>
                <li>• 평가 주체: 검색엔진 알고리즘</li>
                <li>• 핵심 자원: 키워드 + 백링크</li>
                <li>• 콘텐츠: 트래픽 유입용 글</li>
                <li>• 효과: 변동 많음</li>
              </ul>
            </div>
            <div className="bg-blue-700 text-white rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4">GEO (현재 필요한 것)</h3>
              <ul className="space-y-3 text-blue-100 text-sm">
                <li>• 목표: AI 추천 후보에 포함</li>
                <li>• 평가 주체: 생성형 AI 언어모델</li>
                <li>• 핵심 자원: 엔티티 명확성 + 데이터</li>
                <li>• 콘텐츠: AI가 읽는 신뢰 문서</li>
                <li>• 효과: 한번 자리 잡으면 고정성 강함</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI가 보는 5가지 신호 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">AI가 업체를 판단하는 5가지 신호</h2>
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "지역 권위 (Local Authority)",
                desc: "주소, 지역명 반복, 지도 등록, 지역 콘텐츠 보유 여부로 해당 지역에서 실제 활동하는 업체인지 판단합니다."
              },
              {
                num: "02",
                title: "업종 권위 (Topical Authority)",
                desc: "특정 작업을 얼마나 반복하고 깊이 다루는지를 봅니다. 여러 업종을 섞으면 정체성이 모호해져 불리합니다."
              },
              {
                num: "03",
                title: "증거 데이터 (Evidence Data)",
                desc: "AI는 광고 문구보다 실제 작업 기록을 신뢰합니다. '최고의 서비스'보다 '3단계 폴리싱, 작업시간 4시간' 같은 구체적 데이터가 신뢰를 만듭니다."
              },
              {
                num: "04",
                title: "활동성 (Freshness)",
                desc: "업체가 현재도 운영 중인지 판단합니다. 최근 작업 기록, 최근 게시물, 최근 리뷰가 기준이 됩니다."
              },
              {
                num: "05",
                title: "다중 출처 검증 (Multi-Source Verification)",
                desc: "여러 플랫폼에서 동일한 정보가 존재하는지 확인합니다. 홈페이지 단독보다 지도+SNS+블로그+홈페이지가 일치해야 강합니다."
              }
            ].map((item) => (
              <div key={item.num} className="flex gap-4 p-6 border border-gray-100 rounded-xl">
                <div className="text-blue-700 font-bold text-xl w-10 shrink-0">{item.num}</div>
                <div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Schema Markup */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Schema Markup — AI가 읽는 구조화 데이터</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Schema Markup은 홈페이지 코드에 삽입하는 구조화 데이터로,
            AI와 검색엔진이 업체 정보를 정확하게 읽을 수 있도록 도와줍니다.
            Schema가 없으면 AI가 홈페이지 내용을 파악하는 속도와 정확도가 크게 떨어집니다.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-4">
            <p className="text-sm font-semibold text-gray-700 mb-3">Schema Markup 적용 전후 비교</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-red-500 text-sm font-semibold mb-2">❌ Schema 없음</p>
                <p className="text-gray-600 text-sm">AI가 홈페이지를 읽어도 업체가 무엇을 하는지, 어디 있는지 정확히 파악하기 어려움</p>
              </div>
              <div>
                <p className="text-blue-600 text-sm font-semibold mb-2">✅ Schema 있음</p>
                <p className="text-gray-600 text-sm">업체명, 주소, 서비스, 영업시간을 AI가 즉시 구조화된 데이터로 인식</p>
              </div>
            </div>
          </div>
        </section>

        {/* 엔티티 개념 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">엔티티(Entity) — GEO의 핵심 개념</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AI는 업체를 하나의 확정된 존재(Entity)로 인식해야 추천합니다.
            상호명, 주소, 전화번호가 모든 플랫폼에서 완전히 동일해야
            AI가 같은 업체로 확인합니다. 이를 NAP 일관성이라고 합니다.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="font-semibold text-blue-700 mb-3">NAP 일관성 체크리스트</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ 홈페이지 상호명 = 구글 비즈니스 상호명</li>
              <li>✓ 홈페이지 주소 = 네이버 플레이스 주소</li>
              <li>✓ 홈페이지 전화번호 = 모든 플랫폼 동일</li>
              <li>✓ 서비스명 표기 방식 통일</li>
            </ul>
          </div>
        </section>

        {/* AI 추천 후보 구조 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">AI 추천 후보 풀 — 선점이 핵심인 이유</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AI는 지역 질문을 받으면 신뢰 가능한 업체 후보 리스트를 먼저 생성하고
            그 안에서만 추천합니다. 한번 후보 풀에 들어가면 반복 등장하고,
            들어가지 못하면 거의 추천되지 않습니다.
            같은 지역에 업체가 20개 있어도 AI는 2~3곳만 반복 추천하는 이유가 이것입니다.
          </p>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="font-semibold mb-3">후보 풀 진입 조건</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ 엔티티 명확성 — 모든 플랫폼 정보 일치</li>
              <li>✓ 서비스 전문성 집중 — 한 분야를 깊게</li>
              <li>✓ 서비스 정의 페이지 존재 — AI가 참조할 개념 문서</li>
              <li>✓ 지속적 활동 신호 — 최근 콘텐츠 업데이트</li>
              <li>✓ 다중 플랫폼 등장 — 여러 곳에서 동일 정보 확인</li>
            </ul>
          </div>
        </section>


        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Schema Markup 실제 적용 예시</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            GEO Studio는 모든 납품 홈페이지에 Schema Markup을 직접 코드로 삽입합니다.
            AI와 검색엔진이 업체 정보를 구조화된 데이터로 즉시 읽을 수 있도록 하는 핵심 기술입니다.
          </p>

          <div className="space-y-6">

            <div className="border border-gray-100 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">음식점 Schema (Restaurant 타입)</p>
                  <p className="text-gray-500 text-sm mt-1">AI가 음식점 정보를 즉시 구조화해서 읽는 코드</p>
                </div>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full shrink-0 ml-4">실제 적용 코드</span>
              </div>
              <div className="bg-gray-900 p-5">
                <pre className="text-green-400 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap">{`{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "청라 이탈리안 레스토랑",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "인천시 서구 청라동 OOO로 00",
    "addressLocality": "인천",
    "addressRegion": "서구"
  },
  "telephone": "032-000-0000",
  "openingHours": "Mo-Su 11:00-22:00",
  "servesCuisine": "이탈리안",
  "priceRange": "$$",
  "url": "https://cheongra-italian.kr"
}`}</pre>
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">GEO 전문 서비스 Schema (ProfessionalService 타입)</p>
                  <p className="text-gray-500 text-sm mt-1">GEO Studio 공식 홈페이지에 실제 적용된 코드</p>
                </div>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full shrink-0 ml-4">현재 적용 중</span>
              </div>
              <div className="bg-gray-900 p-5">
                <pre className="text-green-400 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap">{`{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "GEO Studio",
  "description": "ChatGPT, 클로드, 제미나이 등 생성형 AI 검색에
    최적화된 GEO 홈페이지 전문 제작사",
  "url": "https://geo-studio.kr",
  "areaServed": "대한민국",
  "serviceType": [
    "GEO 홈페이지 제작",
    "AI 검색 최적화",
    "Schema 구조화 데이터 세팅"
  ]
}`}</pre>
              </div>
            </div>

          </div>

          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-5">
            <p className="text-blue-700 text-sm font-bold mb-2">Schema Markup이 없으면 어떻게 되나요?</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Schema가 없는 홈페이지는 AI가 업체 정보를 파악하는 데 훨씬 오래 걸립니다.
              같은 조건이라면 Schema가 적용된 홈페이지가 AI 추천 후보에 먼저 진입합니다.
              GEO Studio는 모든 납품 홈페이지에 업종에 맞는 Schema를 기본 적용합니다.
            </p>
          </div>

          <div className="mt-4 text-center">
            <a href="/tech" className="text-blue-700 font-semibold text-sm hover:underline">
              전체 기술 스펙 보기 →
            </a>
          </div>
        </section>

        {/* GEO 홈페이지 구조 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">GEO 홈페이지 필수 구조</h2>
          <div className="space-y-4">
            {[
              { page: "메인 페이지", desc: "지역명 + 서비스명 상단 반복 노출. AI가 첫 문장에서 업체의 정체성을 즉시 파악할 수 있어야 합니다." },
              { page: "서비스 정의 페이지", desc: "'자동차 광택이란?' 같은 개념 정의 문서. AI가 질문에 답할 때 가장 많이 참조하는 페이지입니다." },
              { page: "작업사례 페이지", desc: "전체 사이트의 70%를 차지해야 합니다. 지역+차량+작업명 구조로 AI가 읽기 쉽게 작성합니다." },
              { page: "지역 페이지", desc: "주요 커버 지역별 개별 페이지. AI의 지역 권위 신호를 강화합니다." },
              { page: "FAQ 페이지", desc: "AI가 답변 생성 시 가장 많이 재사용하는 형식입니다. 최소 10개 이상 작성을 권장합니다." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 border border-gray-100 rounded-xl">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 shrink-0"></div>
                <div>
                  <h3 className="font-bold mb-1">{item.page}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 마무리 CTA */}
        <section className="bg-blue-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            GEO 홈페이지 제작이 필요하신가요?
          </h2>
          <p className="text-blue-100 mb-6">
            GEO Studio는 AI 검색 최적화 홈페이지 전문 제작사입니다.
            음식점 대상 60만원 패키지로 AI 검색 선점을 도와드립니다.
          </p>
          <a href="/#contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl inline-block">
            무료 상담 신청하기
          </a>
        </section>

      </div>
    </main>
  )
}