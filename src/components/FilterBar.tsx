'use client'

import { SlidersHorizontal } from 'lucide-react'

export default function FilterBar() {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-4 bg-white/50 backdrop-blur-sm border-b border-gray-100 scrollbar-hide sticky top-16 z-30">
      <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-gray-100 to-gray-50 text-gray-700 rounded-xl font-semibold hover:from-gray-200 hover:to-gray-100 transition-all hover:shadow-md active:scale-95 whitespace-nowrap text-sm border border-gray-200">
        <SlidersHorizontal size={16} />
        Filters
      </button>
      <button className="px-4 py-2.5 bg-gradient-to-br from-gray-100 to-gray-50 text-gray-700 rounded-xl font-semibold hover:from-gray-200 hover:to-gray-100 transition-all hover:shadow-md active:scale-95 whitespace-nowrap text-sm border border-gray-200">
        Cuisine ▼
      </button>
      <button className="px-4 py-2.5 bg-gradient-to-br from-gray-100 to-gray-50 text-gray-700 rounded-xl font-semibold hover:from-gray-200 hover:to-gray-100 transition-all hover:shadow-md active:scale-95 whitespace-nowrap text-sm border border-gray-200">
        Fast Delivery
      </button>
      <button className="px-4 py-2.5 bg-gradient-to-br from-gray-100 to-gray-50 text-gray-700 rounded-xl font-semibold hover:from-gray-200 hover:to-gray-100 transition-all hover:shadow-md active:scale-95 whitespace-nowrap text-sm border border-gray-200">
        Rating
      </button>
    </div>
  )
}
