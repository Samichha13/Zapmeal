'use client'

export default function DeliveryInstructions() {
  return (
    <div className="bg-white rounded-lg p-4 mb-3">
      <h3 className="font-bold text-gray-900 mb-4">Delivery Instructions</h3>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center text-lg">
            🏠
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">Apartment</p>
            <p className="text-xs text-gray-600">Leave at door</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
            ☎️
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">Call on Arrival</p>
            <p className="text-xs text-gray-600">Ring doorbell</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
            🚪
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">Gate</p>
            <p className="text-xs text-gray-600">Leave at gate</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
            🎧
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">Other</p>
            <p className="text-xs text-gray-600">Custom instructions</p>
          </div>
        </div>
      </div>

      <textarea
        placeholder="Add any special instructions for delivery"
        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none"
        rows={3}
      ></textarea>
    </div>
  )
}
