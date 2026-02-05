'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Plus, ShoppingCart, Star, Clock, MapPin } from 'lucide-react'
import { useAppContext, CartItem, MenuItem } from '@/context/AppContext'
import BottomNav from '@/components/BottomNav'

const RESTAURANTS_DATA: Record<string, any> = {
  '1': {
    id: '1',
    name: 'La Pino\'z Pizza',
    rating: 4.2,
    reviews: 255,
    deliveryTime: '20-25 mins',
    deliveryFee: 49,
    location: 'Sector 7, Chandigarh',
    cuisine: 'Pizza, Italian, Pasta',
    image: '🍕',
    items: [
      { id: '1', name: 'The Unthinkable Pizza', price: 430, image: '🍕', isVeg: false, rating: 4.5 },
      { id: '2', name: 'Cheese Onion Capsicum', price: 359, image: '🍕', isVeg: true, rating: 4.3 },
      { id: '3', name: 'Corn & Cheese Pizza', price: 399, image: '🍕', isVeg: true, rating: 4.2 },
      { id: '4', name: 'Margherita Pizza', price: 329, image: '🍕', isVeg: true, rating: 4.4 },
      { id: '5', name: 'BBQ Chicken Pizza', price: 499, image: '🍕', isVeg: false, rating: 4.6 },
      { id: '6', name: 'Farm House Pizza', price: 449, image: '🍕', isVeg: true, rating: 4.5 },
    ],
  },
  '2': {
    id: '2',
    name: 'Dominoz Pizza',
    rating: 4.1,
    reviews: 320,
    deliveryTime: '25-30 mins',
    deliveryFee: 49,
    location: 'Sector 8, Chandigarh',
    cuisine: 'Pizza, Italian, Pasta',
    image: '🍕',
    items: [
      { id: '1', name: 'Pepperoni Pizza', price: 499, image: '🍕', isVeg: false, rating: 4.5 },
      { id: '2', name: 'Veggie Pizza', price: 399, image: '🍕', isVeg: true, rating: 4.2 },
      { id: '3', name: 'Meat Lovers Pizza', price: 599, image: '🍕', isVeg: false, rating: 4.6 },
      { id: '4', name: 'Garlic Bread', price: 249, image: '🍞', isVeg: true, rating: 4.3 },
      { id: '5', name: 'Coca Cola 500ml', price: 50, image: '🥤', isVeg: true, rating: 4.4 },
    ],
  },
  '3': {
    id: '3',
    name: 'Haldiram\'s',
    rating: 4.3,
    reviews: 410,
    deliveryTime: '15-20 mins',
    deliveryFee: 39,
    location: 'Sector 17, Chandigarh',
    cuisine: 'Snacks, Fast Food',
    image: '🥘',
    items: [
      { id: '1', name: 'Pao Bhaaji', price: 190, image: '🥘', isVeg: true, rating: 4.4 },
      { id: '2', name: 'Samosa (4 pcs)', price: 80, image: '🥟', isVeg: true, rating: 4.3 },
      { id: '3', name: 'Jalebi (250g)', price: 120, image: '🍮', isVeg: true, rating: 4.5 },
      { id: '4', name: 'Chole Bhature', price: 220, image: '🥘', isVeg: true, rating: 4.2 },
      { id: '5', name: 'Chaat Masala', price: 100, image: '🥒', isVeg: true, rating: 4.1 },
    ],
  },
}

export default function RestaurantPage() {
  const params = useParams()
  const restaurantId = params.id as string
  const restaurant = RESTAURANTS_DATA[restaurantId]
  const { addToCart, cart } = useAppContext()

  if (!restaurant) {
    return <div className="p-4 text-center">Restaurant not found</div>
  }

  const handleAddToCart = (item: MenuItem) => {
    const cartItem: CartItem = {
      ...item,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      quantity: 1,
      serving: '1 serving',
    }
    addToCart(cartItem)
  }

  const cartCount = cart.filter((item) => item.restaurantId === restaurant.id).length

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream via-white/30 to-cream pb-32">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <ChevronLeft size={24} className="text-gray-900 cursor-pointer hover:text-primary-600 transition-colors" />
        </Link>
        {cartCount > 0 && (
          <Link href="/cart">
            <button className="btn-primary relative flex items-center gap-2">
              <ShoppingCart size={18} />
              {cartCount} items
            </button>
          </Link>
        )}
      </div>

      <div className="px-4 py-6">
        <div className="flex items-start gap-4 mb-6 animate-fadeIn">
          <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-100 rounded-2xl flex items-center justify-center text-5xl shadow-lg">
            {restaurant.image}
          </div>
          <div className="flex-1">
            <h1 className="font-sans font-bold text-2xl text-gray-900 mb-2">{restaurant.name}</h1>
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-r from-accent-green to-green-600 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                <Star size={12} fill="white" />
                {restaurant.rating} ({restaurant.reviews})
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Clock size={14} />
                {restaurant.deliveryTime}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <MapPin size={14} />
                {restaurant.location}
              </div>
            </div>
          </div>
        </div>

        <h2 className="font-sans font-bold text-lg text-gray-900 mb-4 animate-slideIn">Menu</h2>

        <div className="space-y-3">
          {restaurant.items.map((item: MenuItem, index: number) => (
            <div 
              key={item.id} 
              className="card hover:shadow-lg transition-all duration-300 group animate-slideUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-2">
                    <h3 className="font-sans font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {item.name}
                    </h3>
                    {item.isVeg && (
                      <div className="w-4 h-4 border border-green-600 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-2">₹{item.price}</p>
                  <div className="flex items-center gap-2">
                    <Star size={12} className="fill-accent-green text-accent-green" />
                    <span className="text-xs text-gray-600">{item.rating}</span>
                  </div>
                </div>
                <div className="text-3xl flex-shrink-0">{item.image}</div>
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className="w-full mt-3 btn-primary text-sm py-2 flex items-center justify-center gap-2"
              >
                <Plus size={16} />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
