'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

interface MenuItem {
  id: string
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  description: string
}

interface MenuItemCardProps {
  item: MenuItem
  onAddToCart?: (item: MenuItem, quantity: number) => void
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'The Unthinkable Pizza',
    price: 430,
    image: '🍕',
    rating: 4.3,
    reviews: 323,
    description: 'Cheese Overloaded pizza with 4 different varieties of cheese and...',
  },
  {
    id: '2',
    name: 'Cheese Onion Capsicum',
    price: 359,
    image: '🍕',
    rating: 4.3,
    reviews: 323,
    description: 'Cheese Overloaded pizza with 4 different varieties of cheese and...',
  },
]

function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  const [quantity, setQuantity] = useState(0)

  return (
    <div className="bg-white p-4 border-b border-gray-100 flex gap-4">
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
        <p className="text-lg font-bold text-gray-900 mb-2">₹{item.price}</p>
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-accent-green text-white px-2 py-1 rounded text-xs font-bold">
            ★ {item.rating}
          </div>
          <span className="text-xs text-gray-600">{item.reviews} Reviews</span>
        </div>
        <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
          {item.image}
        </div>
        {quantity === 0 ? (
          <button
            onClick={() => {
              setQuantity(1)
              onAddToCart?.(item, 1)
            }}
            className="text-primary-500 font-bold text-sm hover:text-primary-600 border border-primary-500 px-4 py-1 rounded"
          >
            ADD
          </button>
        ) : (
          <div className="flex items-center gap-1 border border-primary-500 rounded px-2">
            <button
              onClick={() => {
                setQuantity(Math.max(0, quantity - 1))
                onAddToCart?.(item, Math.max(0, quantity - 1))
              }}
              className="text-primary-500 p-1"
            >
              <Minus size={14} />
            </button>
            <span className="w-4 text-center font-semibold text-sm">{quantity}</span>
            <button
              onClick={() => {
                setQuantity(quantity + 1)
                onAddToCart?.(item, quantity + 1)
              }}
              className="text-primary-500 p-1"
            >
              <Plus size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

interface MenuListProps {
  restaurantName?: string
}

export default function MenuList({ restaurantName = 'La Pino\'z Pizza' }: MenuListProps) {
  const handleAddToCart = (item: MenuItem, quantity: number) => {
    console.log(`Added ${quantity} of ${item.name} to cart`)
  }

  return (
    <div className="bg-white">
      <div className="px-4 py-4 border-b border-gray-100">
        <h3 className="font-bold text-gray-900">{restaurantName}</h3>
      </div>
      {menuItems.map((item) => (
        <MenuItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
      ))}
    </div>
  )
}
