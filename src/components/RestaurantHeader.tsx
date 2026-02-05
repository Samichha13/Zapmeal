'use client'

import { MapPin, Clock, Heart } from 'lucide-react'

interface RestaurantHeaderProps {
  name: string
  cuisine: string
  rating: number
  reviews: number
  time: string
  location: string
}

export default function RestaurantHeader({
  name = 'La Pino\'z Pizza',
  cuisine = 'Pizza, Italian, Pasta',
  rating = 4.2,
  reviews = 255,
  time = '20-25 mins',
  location = 'Dwarka',
}: RestaurantHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
        <span className="text-6xl">🍕</span>
        <button className="absolute top-4 right-4 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
          <Heart size={20} className="text-gray-400" />
        </button>
      </div>

      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{name}</h1>
        <p className="text-sm text-gray-600 mb-3">{cuisine}</p>

        <div className="flex items-center gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-1">
            <div className="bg-accent-green text-white px-2 py-1 rounded font-bold text-sm">
              ★ {rating}
            </div>
            <span className="text-xs text-gray-600">({reviews} Reviews)</span>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gray-500" />
            <span>Outlets: {location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-gray-500" />
            <span>{time} • Delivery to Home</span>
          </div>
          <p className="text-xs text-gray-600 px-6">Delivery Fee may vary according to single or bulk order</p>
        </div>

        <div className="mt-4 bg-orange-50 border border-primary-200 rounded-lg px-3 py-2 flex items-center gap-2">
          <span className="text-sm">🎁</span>
          <p className="text-xs text-gray-700">Free delivery on order above ₹500</p>
        </div>
      </div>
    </div>
  )
}
