"use client"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 px-6 py-4 relative z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">

        <a href="/" className="text-xl font-bold text-blue-700">GEO Studio</a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/geo-guide" className="text-sm text-gray-600 hover:text-blue-700">GEO란?</a>
          <a href="/restaurant" className="text-sm text-gray-600 hover:text-blue-700">음식점 전략</a>
          <a href="/ai-search" className="text-sm text-gray-600 hover:text-blue-700">AI 검색 트렌드</a>
          <a href="/cases" className="text-sm text-gray-600 hover:text-blue-700">납품 사례</a>
          <a href="/tech" className="text-sm text-gray-600 hover:text-blue-700">기술 스펙</a>
          <a href="/faq" className="text-sm text-gray-600 hover:text-blue-700">FAQ</a>
          <a href="/contact" className="bg-blue-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-800">무료 상담</a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1">
            <a href="/geo-guide" onClick={() => setOpen(false)} className="py-3 text-gray-700 font-medium border-b border-gray-50 hover:text-blue-700">GEO란?</a>
            <a href="/restaurant" onClick={() => setOpen(false)} className="py-3 text-gray-700 font-medium border-b border-gray-50 hover:text-blue-700">음식점 전략</a>
            <a href="/ai-search" onClick={() => setOpen(false)} className="py-3 text-gray-700 font-medium border-b border-gray-50 hover:text-blue-700">AI 검색 트렌드</a>
            <a href="/cases" onClick={() => setOpen(false)} className="py-3 text-gray-700 font-medium border-b border-gray-50 hover:text-blue-700">납품 사례</a>
            <a href="/tech" onClick={() => setOpen(false)} className="py-3 text-gray-700 font-medium border-b border-gray-50 hover:text-blue-700">기술 스펙</a>
            <a href="/faq" onClick={() => setOpen(false)} className="py-3 text-gray-700 font-medium border-b border-gray-50 hover:text-blue-700">FAQ</a>
            <a href="/contact" onClick={() => setOpen(false)} className="mt-2 bg-blue-700 text-white text-center py-3 rounded-xl font-semibold hover:bg-blue-800">무료 상담 신청</a>
          </nav>
        </div>
      )}

    </header>
  )
}