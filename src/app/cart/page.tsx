'use client'

import Link from 'next/link'
import { ChevronLeft, Plus, Minus, Trash2 } from 'lucide-react'
import { useAppContext } from '@/context/AppContext'
import BottomNav from '@/components/BottomNav'

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity, getCartTotal } = useAppContext()

  const groupedByRestaurant = cart.reduce(
    (acc: Record<string, typeof cart>, item) => {
      if (!acc[item.restaurantId]) {
        acc[item.restaurantId] = []
      }
      acc[item.restaurantId].push(item)
      return acc
    },
    {}
  )

  const { subtotal, tax, delivery, total } = getCartTotal()
  const isEmpty = cart.length === 0

  if (isEmpty) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-cream via-white/30 to-cream pb-32">
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center gap-3">
          <Link href="/">
            <ChevronLeft size={24} className="text-gray-900 cursor-pointer hover:text-primary-600" />
          </Link>
          <h1 className="font-sans font-bold text-gray-900">Your Cart</h1>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="font-sans font-bold text-2xl text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 text-center mb-6">Add some delicious food to get started!</p>
          <Link href="/">
            <button className="btn-primary">Start Ordering</button>
          </Link>
        </div>

        <BottomNav />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream via-white/30 to-cream pb-32">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <Link href="/">
          <ChevronLeft size={24} className="text-gray-900 cursor-pointer hover:text-primary-600 transition-colors" />
        </Link>
        <h1 className="font-sans font-bold text-gray-900">Your Cart</h1>
      </div>

      <div className="px-4 py-4">
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 rounded-2xl p-4 mb-6 flex items-start gap-3 animate-slideDown">
          <span className="text-lg">🎉</span>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-2">Free delivery on orders above ₹500!</p>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary-500 to-accent-green h-2 rounded-full transition-all" 
                style={{ width: `${Math.min((subtotal / 500) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-700 mt-1">₹{Math.max(0, 500 - subtotal)} more to unlock free delivery</p>
          </div>
        </div>

        <h2 className="font-sans font-bold text-gray-900 mb-4 text-lg">Items in cart</h2>

        {Object.entries(groupedByRestaurant).map(([restaurantId, items]) => (
          <div key={restaurantId} className="mb-6">
            <h3 className="font-sans font-semibold text-gray-900 mb-3 text-sm">{items[0].restaurantName}</h3>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={`${item.id}-${item.restaurantId}`} className="card p-4 flex items-center gap-4">
                  <div className="text-2xl">{item.image}</div>
                  <div className="flex-1">
                    <h4 className="font-sans font-semibold text-gray-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-600">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => updateCartQuantity(item.id, item.restaurantId, item.quantity - 1)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Minus size={14} className="text-gray-700" />
                    </button>
                    <span className="w-6 text-center text-sm font-semibold text-gray-900">{item.quantity}</span>
                    <button
                      onClick={() => updateCartQuantity(item.id, item.restaurantId, item.quantity + 1)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Plus size={14} className="text-gray-700" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.restaurantId)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="card p-4 mb-6">
          <h3 className="font-sans font-bold text-gray-900 mb-4">Bill Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm text-gray-700">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-700">
              <span>Delivery Fee</span>
              <span className={delivery === 0 ? 'text-accent-green font-semibold' : ''}>
                {delivery === 0 ? 'FREE' : `₹${delivery}`}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-700">
              <span>Tax & Charges</span>
              <span>₹{tax}</span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between items-center font-sans font-bold text-gray-900">
              <span>Total Amount</span>
              <span className="text-primary-600">₹{total}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Link href="/" className="flex-1">
            <button className="w-full btn-secondary py-3 font-semibold rounded-xl">
              Continue Shopping
            </button>
          </Link>
          <Link href="/checkout" className="flex-1">
            <button className="w-full btn-success py-3 font-semibold rounded-xl">
              Checkout
            </button>
          </Link>
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
