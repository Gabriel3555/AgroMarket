"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export function CartMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Sistema de Riego Automático",
      price: 49.99,
      quantity: 1,
      image: "/images/irrigation.png",
    },
    {
      id: "2",
      name: "Fertilizante Orgánico",
      price: 24.99,
      quantity: 2,
      image: "/images/fertilizer.png",
    },
  ])
  const [isItemRemoved, setIsItemRemoved] = useState<string | null>(null)

  const handleRemoveItem = (id: string) => {
    setIsItemRemoved(id)

    // Delay actual removal to allow animation to complete
    setTimeout(() => {
      setCartItems(cartItems.filter((item) => item.id !== id))
      setIsItemRemoved(null)
    }, 300)
  }

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-green-50 transition-colors"
          aria-label="Carrito de compras"
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs text-white animate-fadeIn">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Carrito de compras</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Carrito de compras</SheetTitle>
          <SheetDescription>
            {cartItems.length === 0
              ? "Tu carrito está vacío"
              : `Tienes ${totalItems} ${totalItems === 1 ? "producto" : "productos"} en tu carrito`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4">
              <div className="rounded-full bg-gray-100 p-6">
                <ShoppingCart className="h-10 w-10 text-gray-400" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">Tu carrito está vacío</h3>
                <p className="text-sm text-gray-500">Parece que no has añadido ningún producto a tu carrito todavía.</p>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-green-600 hover:bg-green-700 transition-colors btn-hover-effect"
              >
                Continuar comprando
              </Button>
            </div>
          ) : (
            <ul className="divide-y">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className={`py-4 transition-all duration-300 ${
                    isItemRemoved === item.id ? "opacity-0 transform translate-x-full" : "opacity-100"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.name}</h4>
                      <p className="text-sm font-medium text-green-600">${item.price.toFixed(2)}</p>
                      <div className="mt-1 flex items-center">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="rounded-md border p-1 text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="mx-2 w-6 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="rounded-md border p-1 text-gray-500 hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t pt-4 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Envío:</span>
                <span>Calculado al finalizar</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Total estimado:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button className="w-full bg-green-600 hover:bg-green-700 transition-colors btn-hover-effect">
                Finalizar compra
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="transition-colors hover:bg-green-50"
              >
                Seguir comprando
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
