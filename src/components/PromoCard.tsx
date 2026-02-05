'use client'

export default function PromoCard() {
  return (
    <div className="bg-gradient-to-br from-brown-700 via-brown-750 to-brown-800 text-white mx-4 mt-5 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-brown-600/30 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent-green rounded-full blur-3xl"></div>
      </div>

      <div className="flex items-start justify-between relative z-10">
        <div className="flex-1">
          <div className="inline-block bg-primary-500/20 border border-primary-500/40 rounded-full px-3 py-1 mb-2">
            <span className="text-xs font-bold text-primary-200">🚀 BIG UPDATE</span>
          </div>
          <h2 className="text-2xl font-sans font-bold mb-2 leading-tight">
            Multiple Restaurants,<br />One Order
          </h2>
          <p className="text-sm text-gray-200 mb-4 opacity-90">
            Now order from max 3 restaurants and get it delivered in a single order
          </p>
          <button className="bg-gradient-to-r from-primary-400 to-primary-500 text-brown-900 px-6 py-3 rounded-xl font-bold text-sm hover:from-primary-300 hover:to-primary-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
            Start Ordering →
          </button>
        </div>
        <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/20 shadow-lg">
          <span className="text-5xl">🍕</span>
        </div>
      </div>
    </div>
  )
}
