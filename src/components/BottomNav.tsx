'use client'

import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-white/95 border-t border-gray-200/50 px-4 py-3 flex justify-around items-center backdrop-blur-md shadow-2xl">
      <Link href="/" className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 group ${isActive('/') ? 'text-primary-500 bg-primary-50' : 'text-gray-500 hover:text-primary-600 hover:bg-gray-50'}`}>
        <Home size={24} className="group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold">Delivery</span>
      </Link>
      <Link href="/search" className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 group ${isActive('/search') ? 'text-primary-500 bg-primary-50' : 'text-gray-500 hover:text-primary-600 hover:bg-gray-50'}`}>
        <Search size={24} className="group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold">Search</span>
      </Link>
      <Link href="/favorites" className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 group ${isActive('/favorites') ? 'text-red-500 bg-red-50' : 'text-gray-500 hover:text-red-600 hover:bg-red-50'}`}>
        <Heart size={24} className="group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold">Favourite</span>
      </Link>
      <Link href="/orders" className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 group ${isActive('/orders') ? 'text-accent-green bg-green-50' : 'text-gray-500 hover:text-accent-green hover:bg-green-50'}`}>
        <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold">Orders</span>
      </Link>
      <Link href="/account" className={`flex flex-col items-center gap-1 py-2 px-3 rounded-xl transition-all duration-300 group ${isActive('/account') ? 'text-primary-500 bg-primary-50' : 'text-gray-500 hover:text-primary-600 hover:bg-gray-50'}`}>
        <User size={24} className="group-hover:scale-110 transition-transform" />
        <span className="text-xs font-semibold">Account</span>
      </Link>
    </div>
  )
}
