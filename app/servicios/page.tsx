import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { MobileMenu } from "@/components/mobile-menu"
import { UserMenu } from "@/components/user-menu"
import { CartMenu } from "@/components/cart-menu"

export default function ServiciosPage() {
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
                <Link href="/servicios" className="text-sm text-green-600 font-medium">
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
        <h1 className="text-3xl font-bold mb-6 animate-fadeIn">Nuestros Servicios</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slideInLeft">
            <h2 className="text-xl font-semibold mb-4 text-green-600">Asesoría Agrícola</h2>
            <p className="text-gray-700 mb-4">
              Nuestro equipo de expertos agrónomos te brinda asesoría personalizada para maximizar el rendimiento de tus
              cultivos. Analizamos las condiciones de tu terreno y te recomendamos las mejores prácticas.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Análisis de suelo y agua</li>
              <li>Planificación de cultivos</li>
              <li>Control de plagas y enfermedades</li>
              <li>Optimización de recursos</li>
            </ul>
            <Link href="/contacto" className="text-green-600 font-medium hover:underline">
              Solicitar asesoría →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slideInRight">
            <h2 className="text-xl font-semibold mb-4 text-green-600">Instalación de Sistemas de Riego</h2>
            <p className="text-gray-700 mb-4">
              Diseñamos e instalamos sistemas de riego eficientes adaptados a tus necesidades específicas. Nuestros
              técnicos especializados garantizan un funcionamiento óptimo.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Riego por goteo</li>
              <li>Sistemas automatizados</li>
              <li>Mantenimiento preventivo</li>
              <li>Optimización de consumo de agua</li>
            </ul>
            <Link href="/contacto" className="text-green-600 font-medium hover:underline">
              Solicitar presupuesto →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slideInLeft">
            <h2 className="text-xl font-semibold mb-4 text-green-600">Diseño de Huertos</h2>
            <p className="text-gray-700 mb-4">
              Creamos huertos urbanos y rurales personalizados, maximizando el espacio disponible y seleccionando las
              especies más adecuadas para cada ubicación.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Huertos urbanos en terrazas y balcones</li>
              <li>Huertos escolares y comunitarios</li>
              <li>Jardines comestibles</li>
              <li>Cultivos verticales</li>
            </ul>
            <Link href="/contacto" className="text-green-600 font-medium hover:underline">
              Solicitar diseño →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-slideInRight">
            <h2 className="text-xl font-semibold mb-4 text-green-600">Capacitación y Talleres</h2>
            <p className="text-gray-700 mb-4">
              Ofrecemos talleres prácticos y cursos de capacitación para agricultores principiantes y avanzados. Aprende
              técnicas modernas y sostenibles para mejorar tus cultivos.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Agricultura orgánica</li>
              <li>Compostaje y fertilización natural</li>
              <li>Control biológico de plagas</li>
              <li>Técnicas de cultivo eficientes</li>
            </ul>
            <Link href="/contacto" className="text-green-600 font-medium hover:underline">
              Ver calendario de talleres →
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
