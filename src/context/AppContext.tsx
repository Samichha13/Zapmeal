'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface MenuItem {
  id: string
  name: string
  price: number
  image: string
  rating?: number
  isVeg?: boolean
}

export interface CartItem extends MenuItem {
  restaurantId: string
  restaurantName: string
  quantity: number
  serving?: string
}

export interface Restaurant {
  id: string
  name: string
  image: string
  rating: number
  deliveryTime: string
  deliveryFee: number
  cuisines: string[]
  offer?: string
  items: MenuItem[]
}

export interface Order {
  id: string
  restaurantName: string
  items: CartItem[]
  subtotal: number
  deliveryFee: number
  tax: number
  total: number
  status: 'pending' | 'confirmed' | 'preparing' | 'on_the_way' | 'delivered'
  estimatedTime: string
  deliveryAddress: string
  orderDate: string
  paymentMethod: string
}

interface AppContextType {
  cart: CartItem[]
  orders: Order[]
  addToCart: (item: CartItem) => void
  removeFromCart: (itemId: string, restaurantId: string) => void
  updateCartQuantity: (itemId: string, restaurantId: string, quantity: number) => void
  clearCart: () => void
  getCartTotal: () => { subtotal: number; tax: number; delivery: number; total: number }
  placeOrder: (order: Omit<Order, 'id' | 'orderDate'>) => void
  getOrders: () => Order[]
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem('zapmeal_cart')
    const savedOrders = localStorage.getItem('zapmeal_orders')

    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedOrders) setOrders(JSON.parse(savedOrders))
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('zapmeal_cart', JSON.stringify(cart))
    }
  }, [cart, mounted])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('zapmeal_orders', JSON.stringify(orders))
    }
  }, [orders, mounted])

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === item.id && cartItem.restaurantId === item.restaurantId
      )

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id && cartItem.restaurantId === item.restaurantId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }

      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId: string, restaurantId: string) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === itemId && item.restaurantId === restaurantId))
    )
  }

  const updateCartQuantity = (itemId: string, restaurantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId, restaurantId)
      return
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.restaurantId === restaurantId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const tax = Math.round(subtotal * 0.05)
    const delivery = cart.length > 0 ? 49 : 0

    return {
      subtotal,
      tax,
      delivery,
      total: subtotal + tax + delivery,
    }
  }

  const placeOrder = (orderData: Omit<Order, 'id' | 'orderDate'>) => {
    const newOrder: Order = {
      ...orderData,
      id: `ORDER_${Date.now()}`,
      orderDate: new Date().toISOString(),
    }

    setOrders((prevOrders) => [newOrder, ...prevOrders])
    clearCart()
  }

  const getOrders = () => orders

  return (
    <AppContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        getCartTotal,
        placeOrder,
        getOrders,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
