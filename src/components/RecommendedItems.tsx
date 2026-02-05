'use client'

interface RecommendedItemProps {
  id: string
  name: string
  price: number
  rating: number
  reviews: number
  image: string
  description: string
}

const recommendedItems: RecommendedItemProps[] = [
  {
    id: '1',
    name: 'The Unthinkable Pizza',
    price: 430,
    rating: 4.3,
    reviews: 323,
    image: '🍕',
    description: 'Cheese Overloaded pizza with 4 different varieties of cheese and...',
  },
  {
    id: '2',
    name: 'Cheese Onion Capsicum',
    price: 359,
    rating: 4.3,
    reviews: 323,
    image: '🍕',
    description: 'Cheese Overloaded pizza with 4 different varieties of cheese and...',
  },
]

export default function RecommendedItems() {
  return (
    <div className="bg-white mt-4">
      <div className="px-4 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900">Recommended items (18)</h3>
          <button className="text-primary-500 text-sm font-semibold">Collapse ↑</button>
        </div>
      </div>

      <div className="space-y-0">
        {recommendedItems.map((item) => (
          <div key={item.id} className="p-4 border-b border-gray-100 flex gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
              <p className="text-lg font-bold text-gray-900 mb-2">₹{item.price}</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="bg-accent-green text-white px-2 py-1 rounded text-xs font-bold">
                  ★ {item.rating}
                </div>
                <span className="text-xs text-gray-600">{item.reviews} Reviews</span>
              </div>
              <p className="text-xs text-gray-600 line-clamp-2">{item.description}</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                {item.image}
              </div>
              <button className="text-primary-500 font-bold text-sm hover:text-primary-600 border border-primary-500 px-4 py-1 rounded">
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
