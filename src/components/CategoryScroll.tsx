'use client'

const categories = [
  { name: 'Home Made', icon: '🏠' },
  { name: 'Samosa', icon: '🥟' },
  { name: 'Sandwiches', icon: '🥪' },
  { name: 'Chole', icon: '🍲' },
  { name: 'Chaat', icon: '🥘' },
  { name: 'Chicken', icon: '🍗' },
  { name: 'Momos', icon: '🥟' },
  { name: 'Egg', icon: '🥚' },
]

export default function CategoryScroll() {
  return (
    <div className="bg-white/60 backdrop-blur-sm px-4 py-6 border-b border-gray-100 animate-slideUp">
      <h3 className="text-sm font-sans font-bold text-gray-900 mb-4">Discover Category</h3>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center gap-3 min-w-max group cursor-pointer animate-fadeIn">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 via-primary-50 to-cream rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg group-hover:scale-110 transition-all duration-300 border border-primary-200/50">
              <span className="text-3xl group-hover:scale-125 transition-transform">{category.icon}</span>
            </div>
            <p className="text-xs font-semibold text-gray-700 text-center w-20 group-hover:text-primary-600 transition-colors">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
