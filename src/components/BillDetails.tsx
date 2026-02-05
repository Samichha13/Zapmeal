'use client'

interface BillDetailsProps {
  itemTotal: number
  deliveryFee: number
  tax: number
  discount?: number
  total: number
}

export default function BillDetails({
  itemTotal = 2400,
  deliveryFee = 30,
  tax = 240,
  discount = 0,
  total = 2670,
}: BillDetailsProps) {
  return (
    <div className="bg-white rounded-lg p-4 mb-3">
      <h3 className="font-bold text-gray-900 mb-3">Bill Details</h3>

      <div className="space-y-2 text-sm mb-3 border-b border-gray-100 pb-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Item Total</span>
          <span className="font-semibold text-gray-900">₹{itemTotal}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Delivery Fee</span>
          <span className="font-semibold text-gray-900">₹{deliveryFee}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Charges for 3 restaurants</span>
          <span className="font-semibold text-gray-900">₹{tax}</span>
        </div>
        {discount > 0 && (
          <div className="flex items-center justify-between text-accent-green">
            <span>Discount</span>
            <span>-₹{discount}</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className="font-bold text-gray-900">Total Pay</span>
        <span className="font-bold text-lg text-gray-900">₹{total}</span>
      </div>

      <p className="text-xs text-gray-600 mt-3 pt-3 border-t border-gray-100">
        ℹ️ Bill details will maintain the extra, delivery and restaurant charges here.
      </p>
    </div>
  )
}
