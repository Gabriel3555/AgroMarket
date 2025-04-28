import Link from "next/link"
import Image from "next/image"
import { StarRating } from "@/components/star-rating"
import { UserMenu } from "@/components/user-menu"
import { CartMenu } from "@/components/cart-menu"
import { MobileMenu } from "@/components/mobile-menu"

export default function CatalogoPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-green-700 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <span className="text-yellow-400">Agro</span>Market
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/catalogo" className="hover:text-yellow-400 transition-colors">
              Catálogo
            </Link>
            <Link href="/servicios" className="hover:text-yellow-400 transition-colors">
              Servicios
            </Link>
            <Link href="/consejos" className="hover:text-yellow-400 transition-colors">
              Consejos
            </Link>
            <Link href="/contacto" className="hover:text-yellow-400 transition-colors">
              Contacto
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="px-4 py-1 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <UserMenu />
            <CartMenu />
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Catálogo de Productos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Categorías */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <Link href="/catalogo/semillas">
              <div className="relative h-48 w-full">
                <Image src="/images/seeds.png" alt="Semillas" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Semillas</h3>
                <p className="text-gray-600">Variedad de semillas de alta calidad para todo tipo de cultivos.</p>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <Link href="/catalogo/fertilizantes">
              <div className="relative h-48 w-full">
                <Image src="/images/fertilizer.png" alt="Fertilizantes" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Fertilizantes</h3>
                <p className="text-gray-600">Fertilizantes orgánicos y químicos para optimizar tus cultivos.</p>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <Link href="/catalogo/herramientas">
              <div className="relative h-48 w-full">
                <Image src="/images/tools.png" alt="Herramientas" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Herramientas</h3>
                <p className="text-gray-600">Herramientas de calidad para el trabajo en el campo y jardín.</p>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <Link href="/catalogo/sistemas-riego">
              <div className="relative h-48 w-full">
                <Image src="/images/irrigation.png" alt="Sistemas de Riego" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Sistemas de Riego</h3>
                <p className="text-gray-600">Soluciones de riego eficientes para todo tipo de cultivos.</p>
              </div>
            </Link>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">Productos Destacados</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Producto 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col h-full">
            <div className="relative h-48 w-full">
              <Image src="/images/seeds.png" alt="Paquete de Semillas MIX" fill className="object-cover z-0" />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold z-10">
                -4%
              </div>
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Paquete de Semillas MIX</h3>
              <div className="flex items-center mb-2">
                <StarRating rating={4.5} />
                <span className="text-gray-500 text-sm ml-2">(23)</span>
              </div>
              <div className="mt-auto">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-green-700">$124.99</span>
                  <span className="text-gray-500 text-sm line-through ml-2">$129.99</span>
                </div>
                <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition-colors">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col h-full">
            <div className="relative h-48 w-full">
              <Image src="/images/fertilizer.png" alt="Fertilizante Orgánico" fill className="object-cover z-0" />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold z-10">
                -6%
              </div>
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Fertilizante Orgánico</h3>
              <div className="flex items-center mb-2">
                <StarRating rating={4.2} />
                <span className="text-gray-500 text-sm ml-2">(19)</span>
              </div>
              <div className="mt-auto">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-green-700">$149.99</span>
                  <span className="text-gray-500 text-sm line-through ml-2">$159.99</span>
                </div>
                <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition-colors">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Producto 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col h-full">
            <div className="relative h-48 w-full">
              <Image src="/images/tools.png" alt="Kit de Herramientas Deluxe" fill className="object-cover z-0" />
              <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold z-10">
                -10%
              </div>
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Kit de Herramientas Deluxe</h3>
              <div className="flex items-center mb-2">
                <StarRating rating={4.0} />
                <span className="text-gray-500 text-sm ml-2">(15)</span>
              </div>
              <div className="mt-auto">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-green-700">$179.99</span>
                  <span className="text-gray-500 text-sm line-through ml-2">$199.99</span>
                </div>
                <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition-colors">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Producto 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col h-full">
            <div className="relative h-48 w-full">
              <Image src="/images/irrigation.png" alt="Sistema de Riego Automático" fill className="object-cover z-0" />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Sistema de Riego Automático</h3>
              <div className="flex items-center mb-2">
                <StarRating rating={4.8} />
                <span className="text-gray-500 text-sm ml-2">(30)</span>
              </div>
              <div className="mt-auto">
                <div className="flex items-center">
                  <span className="text-lg font-bold text-green-700">$189.99</span>
                </div>
                <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition-colors">
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AgroMarket</h3>
              <p>Tu tienda de confianza para productos agrícolas de calidad.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Enlaces</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/catalogo" className="hover:text-yellow-400 transition-colors">
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link href="/servicios" className="hover:text-yellow-400 transition-colors">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/consejos" className="hover:text-yellow-400 transition-colors">
                    Consejos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="hover:text-yellow-400 transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Contacto</h4>
              <ul className="space-y-2">
                <li>Email: info@agromarket.com</li>
                <li>Teléfono: (123) 456-7890</li>
                <li>Dirección: Calle Agricultura 123</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Suscríbete</h4>
              <p className="mb-3">Recibe nuestras ofertas y novedades</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="px-3 py-2 rounded-l-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
                />
                <button className="bg-yellow-500 text-green-900 px-4 py-2 rounded-r-md hover:bg-yellow-400 transition-colors">
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-green-700 text-center">
            <p>&copy; 2023 AgroMarket. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
