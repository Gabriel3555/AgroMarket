import Link from "next/link"
import { Search, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { UserMenu } from "@/components/user-menu"
import { CartMenu } from "@/components/cart-menu"

export default function ContactoPage() {
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
                <Link href="/consejos" className="text-sm hover:text-green-600 transition-colors">
                  Consejos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-green-600 font-medium">
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
        <h1 className="text-3xl font-bold mb-6 animate-fadeIn">Contáctanos</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="animate-slideInLeft">
            <h2 className="text-xl font-semibold mb-4">Envíanos un mensaje</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full transition-all hover:border-green-300 focus:border-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 mb-1">
                    Apellido
                  </label>
                  <Input
                    id="apellido"
                    type="text"
                    placeholder="Tu apellido"
                    className="w-full transition-all hover:border-green-300 focus:border-green-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full transition-all hover:border-green-300 focus:border-green-500"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono (opcional)
                </label>
                <Input
                  id="telefono"
                  type="tel"
                  placeholder="+1 (123) 456-7890"
                  className="w-full transition-all hover:border-green-300 focus:border-green-500"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <Input
                  id="asunto"
                  type="text"
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full transition-all hover:border-green-300 focus:border-green-500"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="mensaje"
                  placeholder="Escribe tu mensaje aquí..."
                  rows={5}
                  className="w-full transition-all hover:border-green-300 focus:border-green-500"
                />
              </div>

              <Button type="submit" className="bg-green-600 hover:bg-green-700 transition-colors">
                Enviar mensaje
              </Button>
            </form>
          </div>

          <div className="animate-slideInRight">
            <h2 className="text-xl font-semibold mb-4">Información de contacto</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-gray-600">Calle Verde 123, Agrociudad, AG 54321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-gray-600">+1 (123) 456-7890</p>
                    <p className="text-gray-600">+1 (123) 456-7891</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Correo electrónico</h3>
                    <p className="text-gray-600">info@agromarket.com</p>
                    <p className="text-gray-600">ventas@agromarket.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-2">Horario de atención</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 2:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-medium mb-4">Síguenos en redes sociales</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
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
