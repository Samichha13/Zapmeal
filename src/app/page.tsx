import LocationHeader from '@/components/LocationHeader'
import PromoCard from '@/components/PromoCard'
import FilterBar from '@/components/FilterBar'
import CategoryScroll from '@/components/CategoryScroll'
import RestaurantList from '@/components/RestaurantList'
import BottomNav from '@/components/BottomNav'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cream via-white/30 to-cream pb-24">
      <LocationHeader />
      <PromoCard />
      <FilterBar />
      <CategoryScroll />
      <div className="mt-6 px-4 mb-4">
        <h2 className="text-lg font-sans font-bold text-gray-900 animate-slideIn">Get it quickly</h2>
      </div>
      <RestaurantList />
      <BottomNav />
    </main>
  )
}
