import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/star-rating"
import { MobileMenu } from "@/components/mobile-menu"
import { UserMenu } from "@/components/user-menu"
import { CartMenu } from "@/components/cart-menu"

export default function SistemasRiegoPage() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between border-b">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-green-600">
            AgroMarket
          </Link>
          <nav className="hidden lg:flex ml-10">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-sm hover:text-green-600 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo/semillas" className="text-sm text-green-600 font-medium">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm hover:text-green-600 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/consejos" className="text-sm hover:text-green-600 transition-colors">
                  Consejos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm hover:text-green-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Input
              type="text"
              placeholder="Buscar productos"
              className="w-40 lg:w-64 pl-2 pr-8 py-1 text-sm rounded-md"
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <div className="hidden sm:block">
            <UserMenu />
          </div>
          <div className="hidden sm:block">
            <CartMenu />
          </div>
          <MobileMenu className="lg:hidden" />
        </div>
      </header>

      {/* Mobile Search - Only visible on small screens */}
      <div className="container mx-auto px-4 py-2 sm:hidden">
        <div className="relative">
          <Input type="text" placeholder="Buscar productos" className="w-full pl-2 pr-8 py-1 text-sm rounded-md" />
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <Link href="/catalogo" className="hover:text-green-600 transition-colors">
              Catálogo
            </Link>
            <span className="mx-2">/</span>
            <span className="text-green-600 font-medium">Sistemas de Riego</span>
          </div>
        </div>

        {/* Category Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold animate-fadeIn">Sistemas de Riego</h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Ordenar por:</span>
            <select className="text-sm border rounded-md px-2 py-1">
              <option>Más populares</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>Más recientes</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Product 1 */}
          <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow animate-fadeIn">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                20% OFF
              </div>
              <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
                <Link href="/producto/sistema-riego-automatico">
                  <Image
                    src="/images/irrigation.png"
                    alt="Sistema de Riego Automático"
                    width={150}
                    height={150}
                    className="object-contain h-full transform hover:scale-105 transition-transform"
                  />
                </Link>
              </div>
            </div>
            <CardContent className="p-4 flex-grow flex flex-col">
              <Link href="/producto/sistema-riego-automatico" className="hover:text-green-600 transition-colors">
                <h3 className="font-semibold mb-1">Sistema de Riego Automático</h3>
              </Link>
              <div className="flex items-baseline mb-2">
                <span className="text-lg font-bold">$49.99</span>
                <span className="text-sm text-gray-500 line-through ml-2">$59.99</span>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <StarRating rating={4} totalReviews={27} />
                <button className="text-gray-500 hover:text-green-600 transition-colors">
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
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Puedes agregar más productos aquí siguiendo el mismo patrón */}
        </div>
      </main>

      <footer className="bg-gray-50 border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-500">© 2025 AgroMarket. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}
