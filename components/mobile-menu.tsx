"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  className?: string
}

export function MobileMenu({ className }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest("[data-mobile-menu]")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      setOpenSubmenu(null)
    }
  }

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu)
  }

  return (
    <div className={className} data-mobile-menu>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white p-4 lg:hidden animate-fadeIn">
          <nav className="space-y-4">
            <Link
              href="/"
              className="block py-2 text-lg font-medium hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              Inicio
            </Link>

            <div>
              <button
                className="flex w-full items-center justify-between py-2 text-lg font-medium hover:text-green-600 transition-colors"
                onClick={() => toggleSubmenu("catalogo")}
              >
                Catálogo
                {openSubmenu === "catalogo" ? (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronRight className="h-5 w-5 transition-transform" />
                )}
              </button>
              {openSubmenu === "catalogo" && (
                <div className="ml-4 space-y-2 pt-2 animate-slideInUp">
                  <Link
                    href="/catalogo/semillas"
                    className="block py-1 text-gray-600 hover:text-green-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Semillas
                  </Link>
                  <Link
                    href="/catalogo/fertilizantes"
                    className="block py-1 text-gray-600 hover:text-green-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Fertilizantes
                  </Link>
                  <Link
                    href="/catalogo/herramientas"
                    className="block py-1 text-gray-600 hover:text-green-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Herramientas
                  </Link>
                  <Link
                    href="/catalogo/sistemas-riego"
                    className="block py-1 text-gray-600 hover:text-green-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Sistemas de riego
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/servicios"
              className="block py-2 text-lg font-medium hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              Servicios
            </Link>

            <Link
              href="/consejos"
              className="block py-2 text-lg font-medium hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              Consejos
            </Link>

            <Link
              href="/contacto"
              className="block py-2 text-lg font-medium hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </nav>

          <div className="mt-6 border-t pt-6">
            <Link
              href="/cuenta"
              className="flex items-center py-2 text-lg font-medium hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Mi cuenta
            </Link>

            <button
              onClick={() => {
                setIsOpen(false)
                document.querySelector<HTMLButtonElement>('[aria-label="Carrito de compras"]')?.click()
              }}
              className="flex w-full items-center py-2 text-lg font-medium hover:text-green-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
