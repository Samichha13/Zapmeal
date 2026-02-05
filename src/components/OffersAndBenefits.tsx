'use client'

interface OffersAndBenefitsProps {
  couponCode?: string
  discount?: number
}

export default function OffersAndBenefits({
  couponCode = 'ICIC30',
}: OffersAndBenefitsProps) {
  return (
    <div className="bg-white rounded-lg p-4 mb-3">
      <h3 className="font-bold text-gray-900 mb-3 flex items-center justify-between">
        <span>Offers & Benefits</span>
        <span className="text-primary-500 text-sm font-semibold cursor-pointer hover:text-primary-600">
          Apply Coupon →
        </span>
      </h3>

      <div className="bg-primary-50 border border-primary-200 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:bg-primary-100 transition-colors">
        <span className="text-lg">🎁</span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900">30% of upto ₹120</p>
          <p className="text-xs text-gray-600">USE CODE: {couponCode}</p>
        </div>
        <span className="text-primary-500 font-bold text-sm">→</span>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-2 flex items-start gap-2 text-xs text-gray-700">
        <span className="text-lg mt-0.5">⚠️</span>
        <p>Max combining of ₹250 is possible. If you got a bulk order according to it, order without coupon code for best payment.</p>
      </div>
    </div>
  )
}
