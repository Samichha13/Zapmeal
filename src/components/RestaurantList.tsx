'use client'

import Link from 'next/link'
import { Clock, Heart, Star } from 'lucide-react'

interface Restaurant {
  id: string
  name: string
  cuisine: string
  time: string
  price: string
  rating: number
  reviews: number
  image?: string
  offers?: string
  isOpen?: boolean
}

const restaurants = [
  {
    id: '1',
    name: 'La Pino\'z Pizza',
    cuisine: 'Pizza, Italian, Pasta',
    time: '20-25 mins',
    price: '₹550 for two',
    rating: 4.2,
    reviews: 255,
    offers: 'Free delivery on order above ₹500',
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
  },
  {
    id: '3',
    name: 'Haldiram\'s',
    cuisine: 'Snacks, Fast Food',
    time: '15-20 mins',
    price: '₹400 for two',
    rating: 4.3,
    reviews: 410,
    offers: '20% cashback on first order',
  },
]

export default function RestaurantList() {
  return (
    <div className="bg-white/40 backdrop-blur-sm">
      {restaurants.map((restaurant, index) => (
        <Link key={restaurant.id} href={`/restaurant/${restaurant.id}`}>
          <div className="border-b border-gray-100/50 hover:bg-gradient-to-r hover:from-primary-50/30 hover:to-accent-green/10 transition-all duration-300 cursor-pointer group animate-slideUp" style={{ animationDelay: `${index * 50}ms` }}>
            <div className="p-4">
              <div className="flex gap-4 mb-3">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                  <span className="text-4xl group-hover:scale-110 transition-transform">{restaurant.name.includes('Pizza') ? '🍕' : '🥘'}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-sans font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{restaurant.name}</h3>
                    <Heart size={18} className="text-gray-300 group-hover:text-red-500 transition-colors" />
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
          </div>
        </Link>
      ))}
    </div>
  )
}
