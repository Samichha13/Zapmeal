'use client'

import { Search, MapPin, Mic } from 'lucide-react'
import Image from 'next/image'

interface LocationHeaderProps {
  location?: string
}

export default function LocationHeader({ location = 'A-76, A Block, Sector 36, Dwarka' }: LocationHeaderProps) {
  return (
    <div className="sticky top-0 z-40 bg-gradient-to-b from-brown-800 via-brown-700 to-brown-600 text-white px-4 py-4 shadow-lg">
      <div className="flex items-center justify-between mb-4 animate-slideDown">
        <div className="flex items-center gap-3">
          <Image 
            src="/zaplogo.png" 
            alt="Zapmeal Logo" 
            width={40} 
            height={40}
            className="rounded-full shadow-lg hover:scale-110 transition-transform"
          />
          <div>
            <p className="text-xs opacity-75 font-medium">Deliver to</p>
            <span className="font-semibold text-sm flex items-center gap-1">Home <span className="text-xs">▼</span></span>
          </div>
        </div>
        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer border border-white/30">
          <span className="text-lg">👤</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg hover:shadow-xl transition-shadow animate-fadeIn">
        <Search size={20} className="text-primary-500 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search restaurants or dishes"
          className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm bg-transparent font-medium"
        />
        <Mic size={20} className="text-gray-400 cursor-pointer hover:text-primary-500 transition-colors flex-shrink-0" />
      </div>
    </div>
  )
}
