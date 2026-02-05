'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronLeft, MapPin, Phone, User } from 'lucide-react'
import { useAppContext } from '@/context/AppContext'
import BottomNav from '@/components/BottomNav'

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, getCartTotal, placeOrder, clearCart } = useAppContext()

  const [deliveryData, setDeliveryData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  })

  const [paymentMethod, setPaymentMethod] = useState('upi')

  const { subtotal, tax, delivery, total } = getCartTotal()

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-cream via-white/30 to-cream pb-32">
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center gap-3">
          <h1 className="font-sans font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="font-sans font-bold text-2xl text-gray-900 mb-2">No items to checkout</h2>
          <p className="text-gray-600 text-center mb-6">Please add items to your cart first</p>
          <Link href="/">
            <button className="btn-primary">Continue Shopping</button>
          </Link>
        </div>

        <BottomNav />
      </main>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setDeliveryData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePlaceOrder = () => {
    if (!deliveryData.name || !deliveryData.phone || !deliveryData.address) {
      alert('Please fill in all required fields')
      return
    }

    const restaurantId = cart[0].restaurantId
    const restaurantName = cart[0].restaurantName

    placeOrder({
      restaurantName,
      items: cart,
      subtotal,
      deliveryFee: delivery,
      tax,
      total,
      status: 'confirmed',
      estimatedTime: '30-45 mins',
      deliveryAddress: deliveryData.address,
      paymentMethod,
    })

    router.push('/orders?status=success')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream via-white/30 to-cream pb-32">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <Link href="/cart">
          <ChevronLeft size={24} className="text-gray-900 cursor-pointer hover:text-primary-600 transition-colors" />
        </Link>
        <h1 className="font-sans font-bold text-gray-900">Checkout</h1>
      </div>

      <div className="px-4 py-4">
        <h2 className="font-sans font-bold text-gray-900 mb-4 text-lg">Delivery Address</h2>
        <div className="card mb-6 space-y-4">
          <div className="relative">
            <label className="text-xs font-semibold text-gray-600">Name *</label>
            <div className="flex items-center gap-2 mt-1">
              <User size={16} className="text-gray-400" />
              <input
                type="text"
                name="name"
                value={deliveryData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="input-modern flex-1"
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-xs font-semibold text-gray-600">Phone *</label>
            <div className="flex items-center gap-2 mt-1">
              <Phone size={16} className="text-gray-400" />
              <input
                type="tel"
                name="phone"
                value={deliveryData.phone}
                onChange={handleInputChange}
                placeholder="+91 XXXXX XXXXX"
                className="input-modern flex-1"
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-xs font-semibold text-gray-600">Delivery Address *</label>
            <div className="flex items-start gap-2 mt-1">
              <MapPin size={16} className="text-gray-400 mt-3" />
              <textarea
                name="address"
                value={deliveryData.address}
                onChange={handleInputChange}
                placeholder="Enter your complete address"
                className="input-modern flex-1 min-h-24 resize-none"
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-xs font-semibold text-gray-600">Delivery Instructions (Optional)</label>
            <textarea
              name="notes"
              value={deliveryData.notes}
              onChange={handleInputChange}
              placeholder="E.g., Ring the doorbell twice, gate code is 1234..."
              className="input-modern mt-1 min-h-20 resize-none"
            />
          </div>
        </div>

        <h2 className="font-sans font-bold text-gray-900 mb-4 text-lg">Payment Method</h2>
        <div className="space-y-2 mb-6">
          {[
            { id: 'upi', label: '💳 UPI', desc: 'Google Pay, PhonePe, Paytm' },
            { id: 'credit', label: '💳 Credit/Debit Card', desc: 'Visa, Mastercard, American Express' },
            { id: 'wallet', label: '👛 Wallet', desc: 'Zapmeal Wallet Balance' },
            { id: 'netbanking', label: '🏦 Net Banking', desc: 'All major banks' },
            { id: 'cod', label: '💰 Cash on Delivery', desc: 'Pay on delivery' },
          ].map((method) => (
            <label key={method.id} className="card p-4 cursor-pointer hover:bg-primary-50 transition-colors">
              <div className="flex items-start gap-3">
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mt-1 w-4 h-4 accent-primary-500 cursor-pointer"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{method.label}</p>
                  <p className="text-xs text-gray-600">{method.desc}</p>
                </div>
              </div>
            </label>
          ))}
        </div>

        <h2 className="font-sans font-bold text-gray-900 mb-4 text-lg">Order Summary</h2>
        <div className="card p-4 mb-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm text-gray-700">
              <span>Subtotal ({cart.length} items)</span>
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
            <div className="border-t border-gray-200 pt-3 flex justify-between items-center font-sans font-bold text-gray-900 text-lg">
              <span>Total Amount</span>
              <span className="text-primary-600">₹{total}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mb-6">
          <Link href="/cart" className="flex-1">
            <button className="w-full btn-secondary py-3 font-semibold rounded-xl">
              Back
            </button>
          </Link>
          <button
            onClick={handlePlaceOrder}
            className="flex-1 btn-success py-3 font-semibold rounded-xl"
          >
            Place Order (₹{total})
          </button>
        </div>
      </div>

      <BottomNav />
    </main>
  )
}
