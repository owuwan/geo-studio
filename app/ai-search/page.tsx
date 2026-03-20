// @ts-nocheck
"use client"
import { useState } from "react"
import Header from "../components/Header"

const trends = [
  {
    title: "키워드 검색에서 질문형 검색으로",
    description: "예전에는 청라 파스타 같은 키워드로 검색했다면, 지금은 청라에서 분위기 좋은 파스타 맛집 추천해줘처럼 AI에게 직접 질문하는 방식으로 바뀌고 있습니다.",
    stat: "AI 질문형 검색 2년 새 4배 증가",
  },
  {
    title: "데이트 코스, 여행 코스를 AI가 짜준다",
    description: "청라 데이트 코스 짜줘, 인천 당일치기 코스 추천해줘 같은 질문에 AI가 식당, 카페, 관광지를 묶어서 코스로 추천합니다. 코스에 포함된 식당은 자동으로 노출됩니다.",
    stat: "코스형 AI 질문 월 수백만 건 발생",
  },
  {
    title: "네이버도 AI 검색을 강화하고 있다",
    description: "네이버 클로바X, 네이버 AI 검색이 확대되면서 국내 검색 시장도 AI 추천 방식으로 빠르게 전환되고 있습니다. 네이버 플레이스만으로는 부족해지는 시대가 오고 있습니다.",
    stat: "네이버 AI 검색 사용자 빠르게 증가 중",
  },
  {
    title: "AI는 공식 홈페이지를 가장 신뢰한다",
    description: "AI가 맛집을 추천할 때 블로그 후기보다 공식 홈페이지의 구조화된 데이터를 더 신뢰합니다. 홈페이지가 없는 식당은 AI가 존재를 확인하기 어렵습니다.",
    stat: "음식점 100곳 중 공식 홈페이지 보유 1~2곳",
  },
]

const comparison = [
  { label: "검색 방식", old: "키워드 입력", new: "AI에게 질문" },
  { label: "결과 형태", old: "목록 나열", new: "AI가 직접 추천" },
  { label: "필요한 최적화", old: "SEO (키워드, 백링크)", new: "GEO (엔티티, 구조화 데이터)" },
  { label: "핵심 플랫폼", old: "네이버 플레이스, 블로그", new: "공식 홈페이지, 구글 비즈니스" },
  { label: "선점 난이도", old: "이미 경쟁 과열", new: "아직 초기 단계" },
]

const searchShareData = [
  { year: "2021", naver: 88, google: 10, ai: 2 },
  { year: "2022", naver: 82, google: 13, ai: 5 },
  { year: "2023", naver: 74, google: 15, ai: 11 },
  { year: "2024", naver: 63, google: 17, ai: 20 },
  { year: "2025", naver: 52, google: 18, ai: 30 },
  { year: "2026 (예측)", naver: 42, google: 18, ai: 40 },
]

const chatgptData = [
  { month: "2023.01", users: 100 },
  { month: "2023.06", users: 180 },
  { month: "2023.12", users: 300 },
  { month: "2024.06", users: 520 },
  { month: "2024.12", users: 800 },
  { month: "2025.06", users: 1200 },
  { month: "2026.01", users: 1800 },
]

function StackedBar({ data }) {
  const maxTotal = 100
  return (
    <div className="space-y-3">
      {data.map((row, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-xs text-gray-500 w-24 shrink-0 text-right">{row.year}</span>
          <div className="flex-1 flex rounded-lg overflow-hidden h-8">
            <div
              className="bg-green-400 flex items-center justify-center text-xs font-bold text-white transition-all"
              style={{ width: row.naver + "%" }}
            >
              {row.naver > 10 ? row.naver + "%" : ""}
            </div>
            <div
              className="bg-blue-400 flex items-center justify-center text-xs font-bold text-white transition-all"
              style={{ width: row.google + "%" }}
            >
              {row.google > 8 ? row.google + "%" : ""}
            </div>
            <div
              className="bg-orange-400 flex items-center justify-center text-xs font-bold text-white transition-all"
              style={{ width: row.ai + "%" }}
            >
              {row.ai > 5 ? row.ai + "%" : ""}
            </div>
          </div>
        </div>
      ))}
      <div className="flex gap-4 mt-4 justify-center">
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-400 rounded-sm"></div><span className="text-xs text-gray-600">네이버</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-400 rounded-sm"></div><span className="text-xs text-gray-600">구글</span></div>
        <div className="flex items-center gap-1"><div className="w-3 h-3 bg-orange-400 rounded-sm"></div><span className="text-xs text-gray-600">AI 검색</span></div>
      </div>
    </div>
  )
}

function LineChart({ data }) {
  const max = Math.max(...data.map(d => d.users))
  const width = 100
  const height = 160
  const padL = 10
  const padB = 24
  const padT = 10
  const padR = 10
  const chartW = width - padL - padR
  const chartH = height - padB - padT

  const points = data.map((d, i) => ({
    x: padL + (i / (data.length - 1)) * chartW,
    y: padT + chartH - (d.users / max) * chartH,
    ...d,
  }))

  const pathD = points.map((p, i) => (i === 0 ? "M" : "L") + p.x + " " + p.y).join(" ")
  const areaD = pathD + " L" + points[points.length-1].x + " " + (padT + chartH) + " L" + padL + " " + (padT + chartH) + " Z"

  return (
    <div className="w-full">
      <svg viewBox={"0 0 " + width + " " + height} className="w-full" preserveAspectRatio="none" style={{height: "180px"}}>
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#grad)" />
        <path d={pathD} fill="none" stroke="#f97316" strokeWidth="0.8"/>
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="1.2" fill="#f97316"/>
        ))}
        {points.map((p, i) => (
          i % 2 === 0 ? (
            <text key={i} x={p.x} y={padT + chartH + 10} textAnchor="middle" fontSize="3.5" fill="#9ca3af">
              {p.month.replace("20","")}
            </text>
          ) : null
        ))}
      </svg>
      <div className="flex justify-between text-xs text-gray-400 mt-1 px-2">
        <span>2023.01 기준 100 = 약 1억명</span>
        <span>2026.01 = 약 18억명</span>
      </div>
    </div>
  )
}

export default function AiSearch() {
  const [activeTab, setActiveTab] = useState("share")

  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Header />

      <div className="max-w-3xl mx-auto px-6 py-16">

        <div className="mb-12">
          <p className="text-blue-600 text-sm font-semibold mb-3">AI 검색 트렌드</p>
          <h1 className="text-4xl font-bold mb-4">검색 시장이 바뀌고 있습니다</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            네이버, 구글 키워드 검색 시대에서
            ChatGPT, 클로드, 제미나이에게 직접 묻는 시대로 바뀌고 있습니다.
            데이터로 확인해보세요.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2">검색 시장 점유율 변화</h2>
          <p className="text-gray-500 text-sm mb-6">
            국내 검색 시장에서 AI 검색이 차지하는 비중이 빠르게 커지고 있습니다.
            <br/>
            출처: Statcounter, OpenAI 발표 자료, 업계 추정치 종합
          </p>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("share")}
              className={"px-4 py-2 rounded-lg text-sm font-semibold " + (activeTab === "share" ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-600")}
            >
              검색 점유율
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={"px-4 py-2 rounded-lg text-sm font-semibold " + (activeTab === "users" ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-600")}
            >
              ChatGPT 사용자
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            {activeTab === "share" ? (
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-4">연도별 국내 검색 채널 점유율 (%)</p>
                <StackedBar data={searchShareData} />
                <div className="mt-4 bg-orange-50 border border-orange-100 rounded-xl p-4">
                  <p className="text-orange-700 text-xs font-bold mb-1">핵심 인사이트</p>
                  <p className="text-gray-600 text-sm">
                    2021년 2%에 불과했던 AI 검색 점유율이 2026년에는 40%에 달할 것으로 예측됩니다.
                    지금 GEO를 준비하지 않으면 검색 노출의 40%를 놓치게 됩니다.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-4">ChatGPT 글로벌 월간 사용자 수 (상대 지수)</p>
                <LineChart data={chatgptData} />
                <div className="mt-4 bg-orange-50 border border-orange-100 rounded-xl p-4">
                  <p className="text-orange-700 text-xs font-bold mb-1">핵심 인사이트</p>
                  <p className="text-gray-600 text-sm">
                    ChatGPT 월간 사용자는 3년 만에 18배 증가했습니다.
                    클로드, 제미나이까지 합산하면 AI 검색 사용자는 이미 수십억 명에 달합니다.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">지금 일어나고 있는 변화</h2>
          <div className="space-y-4">
            {trends.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <span className="text-blue-600 text-xs font-semibold bg-blue-50 px-3 py-1 rounded-full shrink-0 ml-4">
                    {item.stat}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">검색 시장 변화 비교</h2>
          <div className="border border-gray-100 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50 px-4 py-3">
              <p className="text-xs font-bold text-gray-500">구분</p>
              <p className="text-xs font-bold text-gray-500">기존 검색</p>
              <p className="text-xs font-bold text-blue-600">AI 검색 (지금)</p>
            </div>
            {comparison.map((row, i) => (
              <div key={i} className="grid grid-cols-3 px-4 py-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-700">{row.label}</p>
                <p className="text-sm text-gray-500">{row.old}</p>
                <p className="text-sm text-blue-700 font-semibold">{row.new}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">왜 지금이 타이밍인가</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 border border-gray-100 rounded-xl">
              <span className="text-blue-700 font-bold text-2xl shrink-0">01</span>
              <div>
                <h3 className="font-bold mb-1">경쟁자가 아직 없다</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  주변 음식점 100곳 중 GEO 홈페이지를 가진 곳은 1~2곳도 안 됩니다.
                  지금 시작하면 AI 추천 후보 풀에 먼저 자리를 잡을 수 있습니다.
                  한번 자리를 잡으면 경쟁자가 따라오기 어렵습니다.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 border border-gray-100 rounded-xl">
              <span className="text-blue-700 font-bold text-2xl shrink-0">02</span>
              <div>
                <h3 className="font-bold mb-1">AI 추천은 한번 자리 잡으면 고정된다</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  AI는 신뢰 가능한 업체 후보를 먼저 만들고 그 안에서 반복 추천합니다.
                  지역에서 2~3곳만 반복 등장하는 이유가 이것입니다.
                  지금 진입하면 그 자리를 선점할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 border border-gray-100 rounded-xl">
              <span className="text-blue-700 font-bold text-2xl shrink-0">03</span>
              <div>
                <h3 className="font-bold mb-1">네이버 광고보다 효율적이다</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  네이버 광고는 매달 비용이 나가지만 GEO 홈페이지는 한번 세팅하면
                  콘텐츠가 누적될수록 효과가 커집니다.
                  광고를 끄면 사라지는 노출이 아니라 자산으로 쌓이는 노출입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-700 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">AI 검색 시대, 지금 바로 선점하세요</h2>
          <p className="text-blue-100 mb-6 leading-relaxed">
            경쟁 가게들이 시작하기 전에 먼저 자리를 잡는 것이 핵심입니다.
          </p>
          <a href="/#contact" className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl inline-block">
            무료 상담 신청하기
          </a>
        </section>

      </div>
    </main>
  )
}
