'use client'

import Link from 'next/link'
import { ChevronLeft, Heart, Star, Clock, MapPin } from 'lucide-react'
import { useState } from 'react'
import BottomNav from '@/components/BottomNav'

const FAVORITE_RESTAURANTS = [
  {
    id: '1',
    name: 'La Pino\'z Pizza',
    cuisine: 'Pizza, Italian, Pasta',
    time: '20-25 mins',
    price: '₹550 for two',
    rating: 4.2,
    reviews: 255,
    offers: 'Free delivery on order above ₹500',
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
    offers: 'Get 30% off on orders above ₹600',
    image: '🍕',
  },
]

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(FAVORITE_RESTAURANTS)

  const handleRemoveFavorite = (id: string) => {
    setFavorites(favorites.filter(fav => fav.id !== id))
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream via-white/30 to-cream pb-32">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <Link href="/">
          <ChevronLeft size={24} className="text-gray-900 cursor-pointer hover:text-primary-600 transition-colors" />
        </Link>
        <h1 className="font-sans font-bold text-gray-900">Favorite Restaurants</h1>
      </div>

      <div className="px-4 py-6">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="text-6xl mb-4">❤️</div>
            <h2 className="font-sans font-bold text-2xl text-gray-900 mb-2">No favorites yet</h2>
            <p className="text-gray-600 text-center mb-6">Your favorite restaurants will appear here</p>
            <Link href="/">
              <button className="btn-primary">Explore Restaurants</button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="font-sans font-bold text-gray-900 text-lg mb-4">Your Favorite Restaurants ({favorites.length})</h2>
            {favorites.map((restaurant, index) => (
              <Link key={restaurant.id} href={`/restaurant/${restaurant.id}`}>
                <div className="card p-4 hover:shadow-lg transition-all duration-300 group animate-slideUp" style={{ animationDelay: `${index * 50}ms` }}>
                  <div className="flex gap-4 mb-3">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                      <span className="text-4xl group-hover:scale-110 transition-transform">{restaurant.image}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-sans font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{restaurant.name}</h3>
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            handleRemoveFavorite(restaurant.id)
                          }}
                          className="text-red-500 hover:scale-110 transition-transform"
                        >
                          <Heart size={18} fill="currentColor" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">{restaurant.cuisine}</p>
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Clock size={14} className="text-gray-500" />
                          <span className="text-xs text-gray-600 font-medium">{restaurant.time}</span>
                        </div>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-600 font-medium">{restaurant.price}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-gradient-to-r from-accent-green to-green-600 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                          <Star size={12} fill="white" />
                          {restaurant.rating}
                          <span className="text-xs font-normal opacity-90">({restaurant.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200/50 rounded-xl px-3 py-2.5 flex items-center gap-2 hover:from-primary-100 hover:to-primary-150 transition-all">
                    <span className="text-sm font-bold text-primary-600">🎁</span>
                    <p className="text-xs text-gray-700 font-medium">{restaurant.offers}</p>
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
