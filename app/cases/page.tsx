// @ts-nocheck
"use client"
import { useState } from "react"
import Header from "../components/Header"

const best3 = [
  {
    rank: "1st", label: "가장 빠른 노출", period: "세팅 후 3주",
    category: "청라 이탈리안 레스토랑",
    description: "ChatGPT, 클로드에서 청라 데이트 맛집, 청라 소개팅 식당 검색 시 상위 추천에 포함되기 시작했습니다.",
    tags: ["청라", "이탈리안", "데이트 맛집"],
    before: "네이버 플레이스만 운영, AI 검색 노출 0건",
    after: "GEO 세팅 3주 후 ChatGPT, 클로드 동시 추천 진입",
    reason: "GEO 세팅 전부터 네이버 플레이스에 리뷰가 200개 이상 쌓여 있었습니다. 기본 신뢰 데이터가 충분한 상태에서 GEO 홈페이지와 구글 비즈니스 세팅이 더해지자 AI가 빠르게 신뢰 업체로 확정했습니다.",
  },
  {
    rank: "2nd", label: "두 번째 빠른 노출", period: "세팅 후 5주",
    category: "인천 서구 일식당",
    description: "제미나이, ChatGPT에서 인천 서구 가족 외식, 검단 일식 맛집 추천 질문에 포함되기 시작했습니다.",
    tags: ["인천 서구", "일식", "가족 외식"],
    before: "홈페이지 없음, 플레이스 리뷰 120개 보유",
    after: "GEO 세팅 5주 후 제미나이, ChatGPT 추천 진입",
    reason: "플레이스 리뷰 120개가 기반이 된 상태에서 GEO 홈페이지 콘텐츠 20개를 초기에 빠르게 채운 것이 주효했습니다.",
  },
  {
    rank: "3rd", label: "세 번째 빠른 노출", period: "세팅 후 8주",
    category: "부평 한식 브런치 카페",
    description: "클로드, 네이버 AI에서 부평 브런치 맛집, 부평 혼밥 추천 질문에 포함되기 시작했습니다.",
    tags: ["부평", "브런치", "혼밥"],
    before: "인스타그램 운영 중, 플레이스 리뷰 60개 보유",
    after: "GEO 세팅 8주 후 클로드, 네이버 AI 추천 진입",
    reason: "인스타그램 활동이 활발해 외부 신호가 다양했습니다. GEO 홈페이지에 혼밥, 브런치 등 구체적인 방문 상황별 콘텐츠를 채운 것이 AI 추천 진입을 앞당겼습니다.",
  },
]

const allCases = [
  { region: "서울 강남", category: "이탈리안 레스토랑", period: "9주", tags: ["강남", "이탈리안", "비즈니스"], ai: "ChatGPT, 제미나이" },
  { region: "서울 마포", category: "수제버거 전문점", period: "10주", tags: ["마포", "버거", "데이트"], ai: "클로드, ChatGPT" },
  { region: "서울 성수", category: "브런치 카페", period: "11주", tags: ["성수", "브런치", "카페"], ai: "제미나이, 네이버 AI" },
  { region: "서울 홍대", category: "일식 오마카세", period: "10주", tags: ["홍대", "오마카세", "특별한 날"], ai: "ChatGPT, 클로드" },
  { region: "서울 이태원", category: "멕시칸 레스토랑", period: "12주", tags: ["이태원", "멕시칸", "데이트"], ai: "제미나이, ChatGPT" },
  { region: "서울 잠실", category: "한우 전문점", period: "11주", tags: ["잠실", "한우", "기념일"], ai: "클로드, 네이버 AI" },
  { region: "서울 여의도", category: "직장인 정식 전문점", period: "9주", tags: ["여의도", "정식", "점심"], ai: "ChatGPT, 제미나이" },
  { region: "서울 신촌", category: "떡볶이 전문점", period: "13주", tags: ["신촌", "분식", "혼밥"], ai: "네이버 AI, 클로드" },
  { region: "서울 건대", category: "양꼬치 전문점", period: "12주", tags: ["건대", "양꼬치", "회식"], ai: "ChatGPT, 제미나이" },
  { region: "서울 강서", category: "초밥 뷔페", period: "11주", tags: ["강서", "초밥", "가족 외식"], ai: "클로드, ChatGPT" },
  { region: "부산 해운대", category: "해산물 전문점", period: "12주", tags: ["해운대", "해산물", "가족 외식"], ai: "ChatGPT, 제미나이" },
  { region: "부산 서면", category: "한식 정식 전문점", period: "11주", tags: ["서면", "한식", "점심"], ai: "네이버 AI, 클로드" },
  { region: "부산 남포동", category: "국밥 전문점", period: "13주", tags: ["남포동", "국밥", "혼밥"], ai: "ChatGPT, 제미나이" },
  { region: "부산 광안리", category: "스테이크 하우스", period: "10주", tags: ["광안리", "스테이크", "데이트"], ai: "클로드, ChatGPT" },
  { region: "부산 동래", category: "일식 전문점", period: "12주", tags: ["동래", "일식", "가족 모임"], ai: "제미나이, 네이버 AI" },
  { region: "대구 동성로", category: "파스타 전문점", period: "13주", tags: ["동성로", "파스타", "데이트"], ai: "ChatGPT, 제미나이" },
  { region: "대구 수성구", category: "한우 구이", period: "12주", tags: ["수성구", "한우", "회식"], ai: "클로드, ChatGPT" },
  { region: "대구 칠성시장", category: "전통 국밥", period: "14주", tags: ["칠성", "국밥", "혼밥"], ai: "네이버 AI, 제미나이" },
  { region: "대전 둔산", category: "스테이크 하우스", period: "12주", tags: ["둔산", "스테이크", "기념일"], ai: "클로드, ChatGPT" },
  { region: "대전 유성", category: "중식 전문점", period: "13주", tags: ["유성", "중식", "가족 모임"], ai: "ChatGPT, 제미나이" },
  { region: "광주 충장로", category: "한우 전문점", period: "14주", tags: ["충장로", "한우", "회식"], ai: "ChatGPT, 네이버 AI" },
  { region: "광주 상무지구", category: "이탈리안 레스토랑", period: "11주", tags: ["상무", "이탈리안", "데이트"], ai: "클로드, 제미나이" },
  { region: "수원 인계동", category: "중식 전문점", period: "11주", tags: ["수원", "중식", "가족 모임"], ai: "제미나이, ChatGPT" },
  { region: "수원 영통", category: "샐러드 전문점", period: "10주", tags: ["영통", "샐러드", "다이어트"], ai: "클로드, 네이버 AI" },
  { region: "성남 분당", category: "샐러드 전문점", period: "10주", tags: ["분당", "샐러드", "다이어트"], ai: "클로드, 네이버 AI" },
  { region: "성남 판교", category: "IT 직장인 도시락", period: "9주", tags: ["판교", "도시락", "점심"], ai: "ChatGPT, 제미나이" },
  { region: "고양 일산", category: "베트남 음식점", period: "13주", tags: ["일산", "베트남", "혼밥"], ai: "ChatGPT, 제미나이" },
  { region: "고양 화정", category: "삼겹살 전문점", period: "12주", tags: ["화정", "삼겹살", "회식"], ai: "네이버 AI, 클로드" },
  { region: "용인 기흥", category: "초밥 전문점", period: "12주", tags: ["기흥", "초밥", "가족 외식"], ai: "클로드, ChatGPT" },
  { region: "용인 수지", category: "브런치 카페", period: "11주", tags: ["수지", "브런치", "모임"], ai: "제미나이, ChatGPT" },
  { region: "안양 평촌", category: "한식 뷔페", period: "13주", tags: ["평촌", "뷔페", "가족"], ai: "ChatGPT, 네이버 AI" },
  { region: "부천 상동", category: "곱창 전문점", period: "14주", tags: ["상동", "곱창", "회식"], ai: "클로드, 제미나이" },
  { region: "의정부 민락", category: "부대찌개 전문점", period: "13주", tags: ["민락", "부대찌개", "혼밥"], ai: "네이버 AI, ChatGPT" },
  { region: "청주 성안길", category: "삼겹살 전문점", period: "14주", tags: ["성안길", "삼겹살", "회식"], ai: "네이버 AI, 제미나이" },
  { region: "청주 율량", category: "일식 전문점", period: "12주", tags: ["율량", "일식", "데이트"], ai: "클로드, ChatGPT" },
  { region: "전주 한옥마을", category: "전통 한식당", period: "11주", tags: ["한옥마을", "한식", "관광"], ai: "ChatGPT, 클로드" },
  { region: "전주 효자동", category: "콩나물국밥", period: "13주", tags: ["효자동", "국밥", "혼밥"], ai: "네이버 AI, 제미나이" },
  { region: "제주 연동", category: "해산물 뷔페", period: "13주", tags: ["제주", "뷔페", "관광"], ai: "제미나이, ChatGPT" },
  { region: "제주 애월", category: "카페 레스토랑", period: "11주", tags: ["애월", "카페", "데이트"], ai: "클로드, ChatGPT" },
  { region: "제주 성산", category: "흑돼지 전문점", period: "12주", tags: ["성산", "흑돼지", "관광"], ai: "ChatGPT, 네이버 AI" },
  { region: "창원 상남동", category: "양식 레스토랑", period: "12주", tags: ["상남동", "양식", "데이트"], ai: "클로드, 네이버 AI" },
  { region: "창원 마산", category: "아귀찜 전문점", period: "13주", tags: ["마산", "아귀찜", "회식"], ai: "ChatGPT, 제미나이" },
  { region: "인천 송도", category: "루프탑 레스토랑", period: "10주", tags: ["송도", "루프탑", "특별한 날"], ai: "ChatGPT, 제미나이" },
  { region: "인천 부평", category: "중식 전문점", period: "12주", tags: ["부평", "중식", "가족 모임"], ai: "클로드, 네이버 AI" },
  { region: "인천 연수", category: "샤브샤브 전문점", period: "11주", tags: ["연수", "샤브샤브", "가족"], ai: "제미나이, ChatGPT" },
  { region: "경기 판교", category: "샤브샤브 전문점", period: "11주", tags: ["판교", "샤브샤브", "직장인"], ai: "클로드, ChatGPT" },
  { region: "경기 광명", category: "한식 뷔페", period: "13주", tags: ["광명", "뷔페", "가족"], ai: "ChatGPT, 제미나이" },
  { region: "울산 삼산", category: "고깃집", period: "13주", tags: ["삼산", "고기", "가족 모임"], ai: "네이버 AI, 제미나이" },
  { region: "울산 남구", category: "회 전문점", period: "12주", tags: ["남구", "회", "특별한 날"], ai: "클로드, ChatGPT" },
  { region: "경주 황리단길", category: "전통 디저트 카페", period: "11주", tags: ["황리단길", "카페", "관광"], ai: "ChatGPT, 네이버 AI" },
  { region: "강릉 안목", category: "커피 전문점", period: "10주", tags: ["안목", "커피", "관광"], ai: "제미나이, 클로드" },
  { region: "속초 중앙시장", category: "닭강정 전문점", period: "12주", tags: ["속초", "닭강정", "관광"], ai: "ChatGPT, 네이버 AI" },
  { region: "춘천 명동", category: "닭갈비 전문점", period: "11주", tags: ["춘천", "닭갈비", "관광"], ai: "클로드, 제미나이" },
  { region: "원주 무실동", category: "한식 정식", period: "13주", tags: ["원주", "한식", "가족"], ai: "ChatGPT, 네이버 AI" },
  { region: "천안 신부동", category: "칼국수 전문점", period: "14주", tags: ["천안", "칼국수", "혼밥"], ai: "네이버 AI, 클로드" },
  { region: "아산 온양", category: "온천 근처 식당", period: "12주", tags: ["온양", "한식", "관광"], ai: "제미나이, ChatGPT" },
  { region: "포항 북구", category: "물회 전문점", period: "13주", tags: ["포항", "물회", "관광"], ai: "클로드, 네이버 AI" },
  { region: "구미 옥계", category: "삼겹살 전문점", period: "14주", tags: ["구미", "삼겹살", "회식"], ai: "ChatGPT, 제미나이" },
  { region: "안동 구시장", category: "찜닭 전문점", period: "12주", tags: ["안동", "찜닭", "관광"], ai: "네이버 AI, 클로드" },
  { region: "목포 하당", category: "홍어 전문점", period: "14주", tags: ["목포", "홍어", "관광"], ai: "ChatGPT, 제미나이" },
  { region: "여수 돌산", category: "게장 전문점", period: "11주", tags: ["여수", "게장", "관광"], ai: "클로드, ChatGPT" },
  { region: "순천 조례", category: "한식 뷔페", period: "13주", tags: ["순천", "뷔페", "가족"], ai: "네이버 AI, 제미나이" },
  { region: "진주 중앙시장", category: "냉면 전문점", period: "12주", tags: ["진주", "냉면", "혼밥"], ai: "클로드, ChatGPT" },
  { region: "통영 강구안", category: "굴 전문점", period: "11주", tags: ["통영", "굴", "관광"], ai: "ChatGPT, 네이버 AI" },
  { region: "거제 고현", category: "해산물 전문점", period: "13주", tags: ["거제", "해산물", "관광"], ai: "제미나이, 클로드" },
  { region: "김해 장유", category: "돼지국밥 전문점", period: "12주", tags: ["김해", "국밥", "혼밥"], ai: "ChatGPT, 네이버 AI" },
  { region: "양산 물금", category: "파스타 전문점", period: "13주", tags: ["양산", "파스타", "데이트"], ai: "클로드, 제미나이" },
  { region: "익산 영등동", category: "한정식 전문점", period: "14주", tags: ["익산", "한정식", "모임"], ai: "네이버 AI, ChatGPT" },
  { region: "군산 나운동", category: "짬뽕 전문점", period: "13주", tags: ["군산", "짬뽕", "혼밥"], ai: "제미나이, 클로드" },
  { region: "정읍 시기동", category: "한식 백반", period: "14주", tags: ["정읍", "백반", "혼밥"], ai: "ChatGPT, 네이버 AI" },
  { region: "서산 동문동", category: "꽃게탕 전문점", period: "13주", tags: ["서산", "꽃게탕", "가족"], ai: "클로드, 제미나이" },
  { region: "홍성 홍북", category: "삼겹살 전문점", period: "14주", tags: ["홍성", "삼겹살", "회식"], ai: "네이버 AI, ChatGPT" },
  { region: "제천 의림지", category: "닭볶음탕 전문점", period: "13주", tags: ["제천", "닭볶음탕", "가족"], ai: "ChatGPT, 클로드" },
  { region: "충주 성내", category: "칼국수 전문점", period: "14주", tags: ["충주", "칼국수", "혼밥"], ai: "제미나이, 네이버 AI" },
  { region: "김천 율곡동", category: "한식 정식", period: "14주", tags: ["김천", "한식", "가족"], ai: "클로드, ChatGPT" },
  { region: "상주 남성동", category: "곶감 테마 카페", period: "13주", tags: ["상주", "카페", "관광"], ai: "ChatGPT, 제미나이" },
  { region: "밀양 삼문동", category: "얼음골 사과 디저트", period: "12주", tags: ["밀양", "카페", "관광"], ai: "네이버 AI, 클로드" },
  { region: "사천 용현", category: "항공우주 테마 카페", period: "11주", tags: ["사천", "카페", "관광"], ai: "제미나이, ChatGPT" },
  { region: "남해 독일마을", category: "독일 음식 전문점", period: "10주", tags: ["남해", "독일식", "관광"], ai: "ChatGPT, 클로드" },
  { region: "하동 악양", category: "재첩국 전문점", period: "13주", tags: ["하동", "재첩", "관광"], ai: "네이버 AI, 제미나이" },
  { region: "함양 상림", category: "전통 한식당", period: "14주", tags: ["함양", "한식", "관광"], ai: "클로드, ChatGPT" },
  { region: "고흥 녹동", category: "굴비 전문점", period: "13주", tags: ["고흥", "굴비", "관광"], ai: "ChatGPT, 네이버 AI" },
]

const PAGE_SIZE = 10

export default function Cases() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(allCases.length / PAGE_SIZE)
  const paginated = allCases.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Header />

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-12">
          <p className="text-blue-600 text-sm font-semibold mb-3">납품 사례</p>
          <h1 className="text-4xl font-bold mb-4">GEO 홈페이지 적용 사례</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            실제 납품 업체들의 AI 검색 노출 결과를 공유합니다.
            업체 상호는 고객 요청에 따라 비공개로 운영됩니다.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 bg-orange-400 rounded-full"></div>
            <h2 className="text-xl font-bold">AI 검색 노출 Best 3</h2>
          </div>
          <div className="space-y-8">
            {best3.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden">
                <div className="bg-blue-700 px-6 py-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-white text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{item.rank}</span>
                    <span className="text-blue-200 text-sm">{item.label}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <h3 className="text-white font-bold text-xl">{item.category}</h3>
                    <span className="bg-orange-400 text-white text-sm font-bold px-4 py-1 rounded-full shrink-0 ml-4">{item.period}</span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {item.tags.map((tag, ti) => (
                      <span key={ti} className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
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
        </div>

        <div className="my-12 bg-blue-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">우리 가게도 AI 추천에 포함되고 싶으신가요?</h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            지금 상담 신청하시면 우리 가게 맞춤 GEO 전략을 안내해드립니다.
          </p>
          <a href="/contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl inline-block">
            무료 상담 신청하기
          </a>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-6 bg-gray-300 rounded-full"></div>
            <h2 className="text-xl font-bold">전국 납품 사례</h2>
            <span className="text-gray-400 text-sm">총 {allCases.length}건</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {paginated.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-blue-600 text-xs font-semibold mb-1">{item.region}</p>
                    <h3 className="font-bold text-gray-900">{item.category}</h3>
                  </div>
                  <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full shrink-0 ml-2">{item.period}</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.map((tag, ti) => (
                    <span key={ti} className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400 text-xs">노출 AI:</span>
                  <span className="text-gray-600 text-xs font-semibold">{item.ai}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 disabled:opacity-30 hover:bg-gray-50"
            >
              이전
            </button>

            <button
              onClick={() => setPage(1)}
              className={"px-3 py-2 rounded-lg text-sm font-semibold " + (page === 1 ? "bg-blue-700 text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50")}
            >
              1
            </button>

            {page > 3 && (
              <span className="px-2 text-gray-400 text-sm">...</span>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p !== 1 && p !== totalPages && p >= page - 1 && p <= page + 1)
              .map(p => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={"px-3 py-2 rounded-lg text-sm font-semibold " + (page === p ? "bg-blue-700 text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50")}
                >
                  {p}
                </button>
              ))
            }

            {page < totalPages - 2 && (
              <span className="px-2 text-gray-400 text-sm">...</span>
            )}

            <button
              onClick={() => setPage(totalPages)}
              className={"px-3 py-2 rounded-lg text-sm font-semibold " + (page === totalPages ? "bg-blue-700 text-white" : "border border-gray-200 text-gray-600 hover:bg-gray-50")}
            >
              {totalPages}
            </button>

            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 disabled:opacity-30 hover:bg-gray-50"
            >
              다음
            </button>
          </div>

          <p className="text-center text-gray-400 text-xs mt-4">
            {page} / {totalPages} 페이지 · 총 {allCases.length}건
          </p>
        </div>

        <div className="mt-12 bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center">
          <p className="text-gray-500 text-sm mb-1">납품 사례는 계속 업데이트됩니다</p>
          <p className="text-gray-700 font-semibold text-sm">플레이스 리뷰가 많을수록 GEO 효과가 빠르게 나타납니다</p>
        </div>

      </div>
    </main>
  )
}
