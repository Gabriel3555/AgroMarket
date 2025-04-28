import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { MobileMenu } from "@/components/mobile-menu"
import { UserMenu } from "@/components/user-menu"
import { CartMenu } from "@/components/cart-menu"

export default function ConsejosPage() {
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
                <Link href="/catalogo/semillas" className="text-sm hover:text-green-600 transition-colors">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm hover:text-green-600 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/consejos" className="text-sm text-green-600 font-medium">
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
        <h1 className="text-3xl font-bold mb-6 animate-fadeIn">Consejos para tu Huerto</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fadeIn">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Preparación del suelo"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 hover:text-green-600 transition-colors">
                <Link href="#">Cómo preparar el suelo para tu huerto</Link>
              </h2>
              <p className="text-gray-600 mb-4">
                La preparación adecuada del suelo es fundamental para el éxito de tu huerto. Aprende las técnicas
                básicas para mejorar la calidad de tu tierra.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">15 de abril, 2025</span>
                <Link href="#" className="text-green-600 hover:underline">
                  Leer más →
                </Link>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fadeIn">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Calendario de siembra"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 hover:text-green-600 transition-colors">
                <Link href="#">Calendario de siembra: ¿Cuándo plantar qué?</Link>
              </h2>
              <p className="text-gray-600 mb-4">
                Conoce las mejores épocas para sembrar cada tipo de cultivo y maximiza tu producción durante todo el
                año.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">10 de abril, 2025</span>
                <Link href="#" className="text-green-600 hover:underline">
                  Leer más →
                </Link>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fadeIn">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Control de plagas"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 hover:text-green-600 transition-colors">
                <Link href="#">Control natural de plagas en tu huerto</Link>
              </h2>
              <p className="text-gray-600 mb-4">
                Descubre métodos ecológicos para mantener las plagas a raya sin utilizar productos químicos que puedan
                dañar tus cultivos.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">5 de abril, 2025</span>
                <Link href="#" className="text-green-600 hover:underline">
                  Leer más →
                </Link>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fadeIn">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Compostaje casero"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 hover:text-green-600 transition-colors">
                <Link href="#">Guía para hacer compost casero</Link>
              </h2>
              <p className="text-gray-600 mb-4">
                Aprende a transformar los residuos orgánicos de tu hogar en un fertilizante natural de alta calidad para
                tu huerto.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">1 de abril, 2025</span>
                <Link href="#" className="text-green-600 hover:underline">
                  Leer más →
                </Link>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fadeIn">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=400&width=600" alt="Riego eficiente" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 hover:text-green-600 transition-colors">
                <Link href="#">Técnicas de riego eficiente</Link>
              </h2>
              <p className="text-gray-600 mb-4">
                Optimiza el uso del agua en tu huerto con estas técnicas de riego que ahorran recursos y mejoran el
                crecimiento de tus plantas.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">28 de marzo, 2025</span>
                <Link href="#" className="text-green-600 hover:underline">
                  Leer más →
                </Link>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow animate-fadeIn">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Asociación de cultivos"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 hover:text-green-600 transition-colors">
                <Link href="#">Asociación de cultivos: qué plantar junto</Link>
              </h2>
              <p className="text-gray-600 mb-4">
                Descubre qué plantas se benefician mutuamente cuando se cultivan juntas y cuáles deberías mantener
                separadas.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">25 de marzo, 2025</span>
                <Link href="#" className="text-green-600 hover:underline">
                  Leer más →
                </Link>
              </div>
            </div>
          </article>
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
