'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Clock, MapPin, CheckCircle, Truck } from 'lucide-react'
import { useAppContext } from '@/context/AppContext'
import BottomNav from '@/components/BottomNav'

export default function OrdersPage() {
  const searchParams = useSearchParams()
  const { orders } = useAppContext()
  const status = searchParams.get('status')

  const getStatusIcon = (orderStatus: string) => {
    switch (orderStatus) {
      case 'delivered':
        return <CheckCircle size={20} className="text-accent-green" />
      case 'on_the_way':
        return <Truck size={20} className="text-primary-500" />
      default:
        return <Clock size={20} className="text-gray-400" />
    }
  }

  const getStatusColor = (orderStatus: string) => {
    switch (orderStatus) {
      case 'delivered':
        return 'bg-green-100 text-accent-green'
      case 'on_the_way':
        return 'bg-primary-100 text-primary-600'
      case 'confirmed':
        return 'bg-blue-100 text-blue-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  const getStatusText = (orderStatus: string) => {
    switch (orderStatus) {
      case 'pending':
        return 'Pending'
      case 'confirmed':
        return 'Confirmed'
      case 'preparing':
        return 'Preparing'
      case 'on_the_way':
        return 'On the Way'
      case 'delivered':
        return 'Delivered'
      default:
        return orderStatus
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream via-white/30 to-cream pb-32">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <Link href="/">
          <ChevronLeft size={24} className="text-gray-900 cursor-pointer hover:text-primary-600 transition-colors" />
        </Link>
        <h1 className="font-sans font-bold text-gray-900">My Orders</h1>
      </div>

      <div className="px-4 py-6">
        {status === 'success' && (
          <div className="bg-gradient-to-r from-accent-green/10 to-green-100 border border-accent-green/30 rounded-2xl p-4 mb-6 animate-slideDown">
            <div className="flex items-start gap-3">
              <CheckCircle size={24} className="text-accent-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-sans font-bold text-gray-900 mb-1">Order Placed Successfully! 🎉</h3>
                <p className="text-sm text-gray-700">Your order has been confirmed and will be prepared shortly.</p>
              </div>
            </div>
          </div>
        )}

        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="font-sans font-bold text-2xl text-gray-900 mb-2">No orders yet</h2>
            <p className="text-gray-600 text-center mb-6">You haven't placed any orders yet. Start ordering now!</p>
            <Link href="/">
              <button className="btn-primary">Start Ordering</button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="font-sans font-bold text-gray-900 mb-4 text-lg">Order History</h2>
            {orders.map((order, index) => (
              <div 
                key={order.id} 
                className="card p-4 hover:shadow-lg transition-all duration-300 animate-slideUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="font-sans font-bold text-gray-900 mb-1">{order.restaurantName}</h3>
                    <p className="text-xs text-gray-600">Order ID: {order.id}</p>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {getStatusText(order.status)}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  {order.items.map((item) => (
                    <div key={`${item.id}-${item.restaurantId}`} className="flex items-center justify-between text-sm text-gray-700 py-1">
                      <span>{item.name} x{item.quantity}</span>
                      <span className="font-semibold">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock size={14} className="text-gray-400" />
                    <span>{order.estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin size={14} className="text-gray-400" />
                    <span className="line-clamp-1">{order.deliveryAddress}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">Total Amount</span>
                  <span className="font-sans font-bold text-lg text-primary-600">₹{order.total}</span>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 btn-secondary py-2 text-sm rounded-lg">Track Order</button>
                  <button className="flex-1 btn-primary py-2 text-sm rounded-lg">Reorder</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </main>
  )
}
