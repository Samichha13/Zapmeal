'use client'

interface CartItem {
  id: string
  restaurantName: string
  dishName: string
  price: number
  quantity: number
  image: string
  serving: string
}

interface CartRestaurantSectionProps {
  restaurantName: string
  items: CartItem[]
  onUpdateQuantity?: (itemId: string, quantity: number) => void
  onRemoveItem?: (itemId: string) => void
}

export function CartRestaurantSection({
  restaurantName,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartRestaurantSectionProps) {
  return (
    <div className="bg-white rounded-lg p-4 mb-3">
      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <span>🍕</span>
        {restaurantName}
      </h3>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 pb-3 border-b border-gray-100 last:border-0">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              {item.image}
            </div>

            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 text-sm">{item.dishName}</h4>
              <p className="text-xs text-gray-600 mb-1">₹{item.price}</p>
              <p className="text-xs text-gray-600 mb-2">Serving: {item.serving}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1">
                  <button
                    onClick={() => onUpdateQuantity?.(item.id, Math.max(0, item.quantity - 1))}
                    className="text-gray-600 font-bold text-sm hover:text-primary-500"
                  >
                    −
                  </button>
                  <span className="w-4 text-center text-sm font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
                    className="text-primary-500 font-bold text-sm hover:text-primary-600"
                  >
                    +
                  </button>
                </div>
                <span className="font-bold text-gray-900">₹{item.price * item.quantity}</span>
              </div>
            </div>

            <div className="flex items-start">
              <button
                onClick={() => onRemoveItem?.(item.id)}
                className="text-gray-400 hover:text-red-500 text-sm font-medium"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="text-primary-500 font-bold text-sm mt-3 hover:text-primary-600">
        + Add Items
      </button>
    </div>
  )
}
