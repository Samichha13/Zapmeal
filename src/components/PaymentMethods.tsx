'use client'

interface PaymentMethod {
  id: string
  name: string
  icon: string
  description?: string
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'credit',
    name: 'Credit Card',
    icon: '💳',
    description: 'Visa, Mastercard, Amex',
  },
  {
    id: 'debit',
    name: 'Debit Card',
    icon: '💳',
    description: 'ATM Cards',
  },
  {
    id: 'upi',
    name: 'UPI',
    icon: '📱',
    description: 'Google Pay, PhonePe, Paytm',
  },
  {
    id: 'wallet',
    name: 'Digital Wallet',
    icon: '👛',
    description: 'PayTM, Amazon Pay',
  },
  {
    id: 'cod',
    name: 'Cash on Delivery',
    icon: '💵',
    description: 'Pay at delivery',
  },
]

export default function PaymentMethods() {
  return (
    <div className="bg-white rounded-lg p-4 mb-3">
      <h3 className="font-bold text-gray-900 mb-4">Payment Method</h3>

      <div className="space-y-2">
        {paymentMethods.map((method) => (
          <label key={method.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
            <input
              type="radio"
              name="payment"
              value={method.id}
              defaultChecked={method.id === 'cod'}
              className="w-4 h-4 cursor-pointer"
            />
            <div className="text-2xl">{method.icon}</div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{method.name}</p>
              {method.description && (
                <p className="text-xs text-gray-600">{method.description}</p>
              )}
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
