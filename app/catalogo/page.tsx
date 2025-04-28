import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { MobileMenu } from "@/components/mobile-menu"
import { UserMenu } from "@/components/user-menu"
import { CartMenu } from "@/components/cart-menu"

export default function CatalogoPage() {
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
                <Link href="/catalogo" className="text-sm text-green-600 font-medium">
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
        <h1 className="text-3xl font-bold mb-8 animate-fadeIn">Nuestro Catálogo</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Semillas */}
          <Link href="/catalogo/semillas" className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn">
              <div className="h-48 relative">
                <Image
                  src="/images/seeds.png"
                  alt="Semillas"
                  fill
                  className="object-contain p-4 transform hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 bg-green-600 text-white text-center">
                <h2 className="text-xl font-semibold">Semillas</h2>
                <p className="text-sm mt-1">Variedad de semillas para tu huerto</p>
              </div>
            </div>
          </Link>

          {/* Fertilizantes */}
          <Link href="/catalogo/fertilizantes" className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn">
              <div className="h-48 relative">
                <Image
                  src="/images/fertilizer.png"
                  alt="Fertilizantes"
                  fill
                  className="object-contain p-4 transform hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 bg-green-600 text-white text-center">
                <h2 className="text-xl font-semibold">Fertilizantes</h2>
                <p className="text-sm mt-1">Nutrientes para tus cultivos</p>
              </div>
            </div>
          </Link>

          {/* Herramientas */}
          <Link href="/catalogo/herramientas" className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn">
              <div className="h-48 relative">
                <Image
                  src="/images/tools.png"
                  alt="Herramientas"
                  fill
                  className="object-contain p-4 transform hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 bg-green-600 text-white text-center">
                <h2 className="text-xl font-semibold">Herramientas</h2>
                <p className="text-sm mt-1">Equipamiento para jardinería</p>
              </div>
            </div>
          </Link>

          {/* Sistemas de riego */}
          <Link href="/catalogo/sistemas-riego" className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fadeIn">
              <div className="h-48 relative">
                <Image
                  src="/images/irrigation.png"
                  alt="Sistemas de Riego"
                  fill
                  className="object-contain p-4 transform hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 bg-green-600 text-white text-center">
                <h2 className="text-xl font-semibold">Sistemas de Riego</h2>
                <p className="text-sm mt-1">Soluciones de irrigación eficientes</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-lg animate-slideInLeft">
            <h2 className="text-2xl font-bold mb-4">Productos destacados</h2>
            <p className="mb-4">
              Descubre nuestra selección de productos más populares y aprovecha nuestras ofertas especiales.
            </p>
            <Link href="/catalogo/semillas" className="text-green-600 font-medium hover:underline">
              Ver productos destacados →
            </Link>
          </div>

          <div className="bg-green-50 p-6 rounded-lg animate-slideInRight">
            <h2 className="text-2xl font-bold mb-4">Novedades</h2>
            <p className="mb-4">Mantente al día con los últimos productos y tecnologías para mejorar tus cultivos.</p>
            <Link href="/catalogo/sistemas-riego" className="text-green-600 font-medium hover:underline">
              Ver novedades →
            </Link>
          </div>
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
