'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, User, Mail, Phone, MapPin, LogOut, Edit2, ShoppingBag, Heart, HelpCircle } from 'lucide-react'
import BottomNav from '@/components/BottomNav'

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Samichha',
    email: 'samichha@example.com',
    phone: '+91 98765 43210',
    address: 'Sector 7, Chandigarh',
  })

  const [editForm, setEditForm] = useState(profile)

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveProfile = () => {
    setProfile(editForm)
    setIsEditing(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-cream via-white/30 to-cream pb-32">
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <Link href="/">
          <ChevronLeft size={24} className="text-gray-900 cursor-pointer hover:text-primary-600 transition-colors" />
        </Link>
        <h1 className="font-sans font-bold text-gray-900">My Account</h1>
      </div>

      <div className="px-4 py-6">
        <div className="card mb-6 overflow-hidden">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-32"></div>
          <div className="px-4 pb-4">
            <div className="flex items-end gap-4 -mt-12 mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 text-white rounded-full flex items-center justify-center text-4xl border-4 border-white shadow-lg">
                👤
              </div>
              <div className="flex-1 pb-2">
                <h2 className="font-sans font-bold text-2xl text-gray-900">{profile.name}</h2>
                <p className="text-xs text-gray-600">Member since 2024</p>
              </div>
            </div>
          </div>
        </div>

        {!isEditing ? (
          <>
            <div className="card mb-6">
              <h3 className="font-sans font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User size={18} className="text-primary-600" />
                Account Information
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <label className="text-xs font-semibold text-gray-600 block mb-1">Name</label>
                  <p className="text-gray-900 font-semibold">{profile.name}</p>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <label className="text-xs font-semibold text-gray-600 block mb-1">Email</label>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-gray-400" />
                    <p className="text-gray-900">{profile.email}</p>
                  </div>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <label className="text-xs font-semibold text-gray-600 block mb-1">Phone</label>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-gray-400" />
                    <p className="text-gray-900">{profile.phone}</p>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 block mb-1">Address</label>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-gray-400 mt-1" />
                    <p className="text-gray-900">{profile.address}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setEditForm(profile)
                  setIsEditing(true)
                }}
                className="w-full btn-primary mt-4 py-2 flex items-center justify-center gap-2"
              >
                <Edit2 size={16} />
                Edit Profile
              </button>
            </div>
          </>
        ) : (
          <div className="card mb-6">
            <h3 className="font-sans font-bold text-gray-900 mb-4">Edit Profile</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                  className="input-modern w-full"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleEditChange}
                  className="input-modern w-full"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={editForm.phone}
                  onChange={handleEditChange}
                  className="input-modern w-full"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-2">Address</label>
                <textarea
                  name="address"
                  value={editForm.address}
                  onChange={handleEditChange}
                  className="input-modern w-full min-h-20 resize-none"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 btn-secondary py-2"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveProfile}
                  className="flex-1 btn-primary py-2"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3 mb-6">
          <Link href="/orders">
            <button className="w-full card p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
              <ShoppingBag size={18} className="text-primary-600" />
              <span className="font-sans font-semibold text-gray-900">My Orders</span>
              <ChevronLeft size={18} className="ml-auto rotate-180 text-gray-400" />
            </button>
          </Link>

          <Link href="/favorites">
            <button className="w-full card p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
              <Heart size={18} className="text-red-500" />
              <span className="font-sans font-semibold text-gray-900">Favorite Restaurants</span>
              <ChevronLeft size={18} className="ml-auto rotate-180 text-gray-400" />
            </button>
          </Link>

          <button className="w-full card p-4 flex items-center gap-3 hover:bg-gray-50 transition-colors">
            <HelpCircle size={18} className="text-blue-500" />
            <span className="font-sans font-semibold text-gray-900">Help & Support</span>
            <ChevronLeft size={18} className="ml-auto rotate-180 text-gray-400" />
          </button>
        </div>

        <button className="w-full card p-4 flex items-center gap-3 hover:bg-red-50 transition-colors border-red-200">
          <LogOut size={18} className="text-red-500" />
          <span className="font-sans font-semibold text-red-600">Logout</span>
        </button>
      </div>

      <BottomNav />
    </main>
  )
}
