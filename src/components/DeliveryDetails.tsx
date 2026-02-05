'use client'

import { MapPin, User, Phone } from 'lucide-react'

export default function DeliveryDetails() {
  return (
    <div className="bg-white rounded-lg p-4 mb-3">
      <h3 className="font-bold text-gray-900 mb-4">Delivery Details</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2 mb-1">
              <MapPin size={16} className="text-primary-500" />
              Delivery Address
            </div>
          </label>
          <input
            type="text"
            placeholder="Enter delivery address"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            defaultValue="A-76, A Block, Sector 36, Dwarka"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2 mb-1">
              <User size={16} className="text-primary-500" />
              Your Name
            </div>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2 mb-1">
              <Phone size={16} className="text-primary-500" />
              Phone Number
            </div>
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          />
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-gray-700">
          ⚠️ Note: If you cancel order within 15 seconds of placing your order, then it will be free cancellation as to the restaurant charges to view for processing your order.
        </div>
      </div>
    </div>
  )
}
