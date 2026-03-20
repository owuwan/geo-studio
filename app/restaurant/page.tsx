import Header from "../components/Header"
export default function Restaurant() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* 헤더 */}
      <Header />

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-12">
          <p className="text-blue-600 text-sm font-semibold mb-3">음식점 전용 GEO 가이드</p>
          <h1 className="text-4xl font-bold mb-6">
            음식점 GEO 홈페이지 완전 전략
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            요즘 손님들은 ChatGPT나 클로드에게 "○○동 데이트 코스 짜줘",
            "○○역 가족 외식 맛집 추천해줘" 라고 묻습니다.
            AI가 이 질문에 답할 때 내 식당이 포함되게 만드는 것이
            음식점 GEO 전략의 핵심입니다.
          </p>
        </div>

        {/* 음식점 검색 현실 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">음식점 검색 시장의 변화</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="font-bold text-gray-500 mb-4">과거 검색 방식</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• "청라 파스타" 키워드 검색</li>
                <li>• 네이버 플레이스 목록 확인</li>
                <li>• 별점 + 리뷰 수 비교</li>
                <li>• 방문 결정</li>
              </ul>
            </div>
            <div className="bg-blue-700 text-white rounded-xl p-6">
              <p className="font-bold mb-4">현재 AI 검색 방식</p>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>• "청라 데이트 코스 짜줘" 질문</li>
                <li>• AI가 코스 전체를 생성</li>
                <li>• 특정 식당을 직접 추천</li>
                <li>• 손님이 그대로 방문</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 음식점 GEO 핵심 구조 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">음식점 GEO 홈페이지 핵심 구조</h2>
          <div className="space-y-4">
            {[
              {
                title: "메인 페이지 — 지역 + 업종 선언",
                desc: "첫 문장에 지역명과 음식 종류가 명확히 있어야 합니다. 예: '인천 서구 청라 이탈리안 레스토랑 — 파스타 전문'. AI는 첫 문장에서 업체 정체성을 판단합니다.",
                tag: "필수"
              },
              {
                title: "메뉴 상세 페이지 — 메뉴별 개별 페이지",
                desc: "대표 메뉴마다 개별 페이지를 만들어야 합니다. 메뉴 설명, 원산지, 가격, 사진을 포함합니다. AI가 '청라 파스타 맛집'을 추천할 때 이 페이지를 참조합니다.",
                tag: "핵심"
              },
              {
                title: "가게 스토리 페이지 — 신뢰 신호",
                desc: "사장님 스토리, 식재료 소싱 방법, 가게 철학을 담습니다. AI는 이런 정보가 있는 식당을 더 신뢰 가능한 업체로 인식합니다.",
                tag: "권장"
              },
              {
                title: "방문 후기 페이지 — 증거 데이터",
                desc: "실제 방문 후기를 정리해서 올립니다. '청라 데이트', '가족 외식', '소개팅' 등 방문 상황별로 분류하면 AI가 코스 추천 시 더 잘 참조합니다.",
                tag: "핵심"
              },
              {
                title: "FAQ 페이지 — AI 재사용 데이터",
                desc: "주차 가능 여부, 예약 방법, 포장 가능 여부 등 손님이 자주 묻는 질문을 정리합니다. AI가 질문에 답할 때 FAQ 형식을 가장 많이 재사용합니다.",
                tag: "필수"
              },
              {
                title: "찾아오시는 길 — 지역 권위",
                desc: "정확한 주소, 지도, 대중교통 안내, 주차 정보를 포함합니다. 구글 비즈니스 프로필과 100% 동일하게 작성해야 AI가 같은 업체로 확인합니다.",
                tag: "필수"
              },
            ].map((item, i) => (
              <div key={i} className="p-6 border border-gray-100 rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold">{item.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.tag === "핵심" ? "bg-blue-100 text-blue-700" :
                    item.tag === "필수" ? "bg-red-100 text-red-700" :
                    "bg-gray-100 text-gray-600"
                  }`}>{item.tag}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI가 음식점 추천할 때 보는 것 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">AI가 음식점을 추천할 때 보는 것</h2>
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <p className="text-sm text-gray-500 mb-4">AI 내부 판단 흐름</p>
            <div className="space-y-3">
              {[
                "이 식당이 실제로 그 지역에 있는가?",
                "어떤 음식을 전문으로 하는가?",
                "최근에도 운영 중인가?",
                "손님들이 어떤 상황에서 방문했는가?",
                "구글 지도, 홈페이지, 리뷰 정보가 일치하는가?",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-blue-700 font-bold text-sm w-6">{i + 1}</span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-100 rounded-xl p-5">
              <p className="font-bold text-red-700 mb-3">❌ AI가 추천 못하는 음식점</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 홈페이지 없음</li>
                <li>• 메뉴 정보 불명확</li>
                <li>• 지역 정보 부족</li>
                <li>• 오랫동안 업데이트 없음</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
              <p className="font-bold text-blue-700 mb-3">✅ AI가 자주 추천하는 음식점</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• GEO 최적화 홈페이지 보유</li>
                <li>• 메뉴별 상세 페이지 존재</li>
                <li>• 지역명 자연스럽게 포함</li>
                <li>• 구글 비즈니스 완성도 높음</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6개월 콘텐츠 전략 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">음식점 GEO 6개월 콘텐츠 전략</h2>
          <div className="space-y-3">
            {[
              { period: "1개월", content: "메인 + 메뉴 전체 + 업체 정보 세팅 — 기초 인덱싱 시작" },
              { period: "2개월", content: "원산지 상세 페이지 + 식재료 스토리 — 신뢰 신호 강화" },
              { period: "3개월", content: "대표 메뉴 상세 스토리 + 가게 철학 — 브랜드 신뢰 구축" },
              { period: "4개월", content: "방문 상황별 후기 정리 (데이트/가족/소개팅) — 코스 추천 데이터 확보" },
              { period: "5개월", content: "FAQ 확장 + 지역 키워드 페이지 — 지역 권위 강화" },
              { period: "6개월", content: "계절 메뉴 + 이벤트 + 리뷰 정리 — 활동성 유지" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 border border-gray-100 rounded-xl">
                <span className="text-blue-700 font-bold text-sm w-16 shrink-0">{item.period}</span>
                <span className="text-gray-600 text-sm">{item.content}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 실제 AI 질문 예시 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">GEO 세팅 후 AI 추천 예시</h2>
          <div className="space-y-4">
            {[
              {
                question: "청라 데이트 코스 짜줘",
                answer: "청라 데이트 코스 추천드립니다. 저녁 식사로는 청라 이탈리안 레스토랑 ○○을 추천합니다. 파스타 전문점으로 분위기가 좋고..."
              },
              {
                question: "인천 서구 가족 외식 맛집 추천해줘",
                answer: "인천 서구 가족 외식으로 ○○ 레스토랑을 추천합니다. 넓은 홀과 어린이 메뉴가 있어 가족 방문에 적합하며..."
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6">
                <div className="bg-gray-50 rounded-lg p-3 mb-3">
                  <p className="text-sm font-semibold text-gray-700">사용자 질문</p>
                  <p className="text-gray-600 text-sm mt-1">"{item.question}"</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-blue-700">AI 추천 답변</p>
                  <p className="text-gray-600 text-sm mt-1">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            우리 식당도 AI 추천에 포함시키고 싶으신가요?
          </h2>
          <p className="text-blue-100 mb-6">
            GEO Studio 음식점 전용 패키지 60만원으로
            AI 검색 선점을 시작하세요.
            주변 경쟁 식당 100곳 중 1~2곳만 하고 있는 지금이 타이밍입니다.
          </p>
          <a href="/#contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl inline-block">
            무료 상담 신청하기
          </a>
        </section>

      </div>
    </main>
  )
}