'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ChevronLeft, Search as SearchIcon, Star, Clock } from 'lucide-react'
import BottomNav from '@/components/BottomNav'

const ALL_RESTAURANTS = [
  {
    id: '1',
    name: 'La Pino\'z Pizza',
    cuisine: 'Pizza, Italian, Pasta',
    time: '20-25 mins',
    price: '₹550 for two',
    rating: 4.2,
    reviews: 255,
    image: '🍕',
  },
  {
    id: '2',
    name: 'Dominoz Pizza',
    cuisine: 'Pizza, Italian, Pasta',
    time: '25-30 mins',
    price: '₹600 for two',
    rating: 4.1,
    reviews: 320,
    image: '🍕',
  },
  {
    id: '3',
    name: 'Haldiram\'s',
    cuisine: 'Snacks, Fast Food',
    time: '15-20 mins',
    price: '₹400 for two',
    rating: 4.3,
    reviews: 410,
    image: '🥘',
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const query = searchQuery.toLowerCase()
    return ALL_RESTAURANTS.filter(restaurant =>
      restaurant.name.toLowerCase().includes(query) ||
      restaurant.cuisine.toLowerCase().includes(query)
    )
  }, [searchQuery])

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream via-white/30 to-cream pb-32">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <Link href="/">
          <ChevronLeft size={24} className="text-gray-900 cursor-pointer hover:text-primary-600 transition-colors" />
        </Link>
        <h1 className="font-sans font-bold text-gray-900">Search</h1>
      </div>

      <div className="px-4 py-4">
        <div className="relative mb-6">
          <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-md border border-gray-200 hover:border-primary-500 transition-colors">
            <SearchIcon size={20} className="text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search restaurants or cuisine..."
              className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>

        {searchQuery.trim() === '' ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="font-sans font-bold text-2xl text-gray-900 mb-2">Search for restaurants</h2>
            <p className="text-gray-600 text-center">Find your favorite restaurants or browse by cuisine</p>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="text-6xl mb-4">😞</div>
            <h2 className="font-sans font-bold text-2xl text-gray-900 mb-2">No results found</h2>
            <p className="text-gray-600 text-center">Try searching with different keywords</p>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="font-sans font-bold text-gray-900 text-lg mb-4">Results ({filteredResults.length})</h2>
            {filteredResults.map((restaurant, index) => (
              <Link key={restaurant.id} href={`/restaurant/${restaurant.id}`}>
                <div className="card p-4 hover:shadow-lg transition-all duration-300 group animate-slideUp" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="flex gap-4 mb-3">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                      <span className="text-4xl group-hover:scale-110 transition-transform">{restaurant.image}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-1">{restaurant.name}</h3>
                      <p className="text-xs text-gray-600 mb-3">{restaurant.cuisine}</p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Clock size={14} className="text-gray-500" />
                          <span className="text-xs text-gray-600 font-medium">{restaurant.time}</span>
                        </div>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-600 font-medium">{restaurant.price}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="bg-gradient-to-r from-accent-green to-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                          <Star size={12} fill="white" />
                          {restaurant.rating}
                          <span className="text-xs font-normal opacity-90">({restaurant.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </main>
  )
}
