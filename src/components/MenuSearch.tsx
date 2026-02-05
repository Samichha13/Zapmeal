'use client'

import { Search } from 'lucide-react'

export default function MenuSearch() {
  return (
    <div className="bg-white px-4 py-3 sticky top-0 z-30 border-b border-gray-100">
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for dishes"
          className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg outline-none text-sm placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-primary-500"
        />
      </div>
    </div>
  )
}
