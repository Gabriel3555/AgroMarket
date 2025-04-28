import Image from "next/image"
import Link from "next/link"
import { Search, Droplets, Sprout, Wrench, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/star-rating"
import { MobileMenu } from "@/components/mobile-menu"
import { UserMenu } from "@/components/user-menu"
import { CartMenu } from "@/components/cart-menu"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-green-600">AgroMarket</h1>
          <nav className="hidden lg:flex ml-10">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-sm hover:text-green-600">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo/semillas" className="text-sm hover:text-green-600">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-sm hover:text-green-600">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/consejos" className="text-sm hover:text-green-600">
                  Consejos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm hover:text-green-600">
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
              className="w-40 md:w-64 pl-2 pr-8 py-1 text-sm rounded-md"
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

      {/* Rest of the page content remains unchanged */}
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Tu cosecha de calidad</h2>
            <h3 className="text-3xl font-semibold text-green-600">Productos frescos</h3>
            <p className="text-gray-700">
              Descubre nuestra selección de semillas, fertilizantes y herramientas con hasta un 20% de descuento en
              pedidos anticipados.
            </p>
            <div className="flex space-x-4 pt-2">
              <Button className="bg-green-600 hover:bg-green-700">Comprar ahora</Button>
              <Link href="/catalogo/semillas">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Ver catálogo
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/images/crop-field.png"
              alt="Campo de cultivo"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Fresh Produce Section with Search Overlay */}
      <section className="w-full mt-8 relative">
        <div className="w-full h-[400px] relative">
          <Image src="/images/fresh-produce.png" alt="Productos frescos" fill className="object-cover" />
        </div>

        {/* Search Promotions Overlay */}
        <div className="absolute left-0 right-0 bottom-0 transform translate-y-1/2">
          <div className="container mx-auto flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-md w-[70%]">
              <h3 className="text-xl font-semibold mb-4">Busca promociones</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Producto buscado</label>
                  <Input type="text" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Cantidad de productos</label>
                  <Input type="number" placeholder="2 items" className="w-full" />
                </div>
                <div className="flex flex-col md:flex-row items-end gap-4">
                  <div className="w-full md:w-1/2">
                    <label className="block text-sm text-gray-600 mb-1">Fecha</label>
                    <Input type="date" defaultValue="23/04/2025" className="w-full" />
                  </div>
                  <Button className="w-full md:w-1/2 bg-green-600 hover:bg-green-700">Buscar</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 mt-40 md:mt-48 pt-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Categorías</h2>
          <p className="text-gray-600">Servicios y productos disponibles para ti</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Semillas */}
          <Link href="/catalogo/semillas" className="block">
            <div className="bg-green-500 rounded-lg p-6 text-center hover:bg-green-600 transition-colors cursor-pointer">
              <div className="bg-white rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                <Sprout className="h-12 w-12 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold text-white">Semillas</h3>
            </div>
          </Link>

          {/* Fertilizantes */}
          <Link href="/catalogo/fertilizantes" className="block">
            <div className="bg-green-500 rounded-lg p-6 text-center hover:bg-green-600 transition-colors cursor-pointer">
              <div className="bg-white rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-800"
                >
                  <path d="M12 10c3.976 0 7-1.374 7-3s-3.024-3-7-3-7 1.374-7 3 3.024 3 7 3z" />
                  <path d="M5 10v4c0 1.626 3.024 3 7 3s7-1.374 7-3v-4" />
                  <path d="M12 7v13" />
                  <path d="M5 14v4c0 1.626 3.024 3 7 3s7-1.374 7-3v-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Fertilizantes</h3>
            </div>
          </Link>

          {/* Herramientas */}
          <Link href="/catalogo/herramientas" className="block">
            <div className="bg-green-500 rounded-lg p-6 text-center hover:bg-green-600 transition-colors cursor-pointer">
              <div className="bg-white rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                <Wrench className="h-12 w-12 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold text-white">Herramientas</h3>
            </div>
          </Link>

          {/* Sistemas de riego */}
          <Link href="/producto/sistema-riego-automatico" className="block">
            <div className="bg-green-500 rounded-lg p-6 text-center hover:bg-green-600 transition-colors cursor-pointer">
              <div className="bg-white rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-4">
                <Droplets className="h-12 w-12 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold text-white">Sistemas de riego</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Productos destacados</h2>
          <p className="text-gray-600">Nuestros artículos más populares</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                20% OFF
              </div>
              <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
                <Image
                  src="/images/seeds.png"
                  alt="Paquete de Semillas MIX"
                  width={150}
                  height={150}
                  className="object-contain h-full"
                />
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-1">Paquete de Semillas MIX</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-lg font-bold">$124.99</span>
                <span className="text-sm text-gray-500 line-through ml-2">$129.99</span>
              </div>
              <div className="flex justify-between items-center">
                <StarRating rating={4} totalReviews={23} />
                <button className="text-gray-500">
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

          {/* Product 2 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                13% OFF
              </div>
              <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
                <Image
                  src="/images/fertilizer.png"
                  alt="Fertilizante Orgánico"
                  width={150}
                  height={150}
                  className="object-contain h-full"
                />
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-1">Fertilizante Orgánico</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-lg font-bold">$149.99</span>
                <span className="text-sm text-gray-500 line-through ml-2">$159.99</span>
              </div>
              <div className="flex justify-between items-center">
                <StarRating rating={4} totalReviews={19} />
                <button className="text-gray-500">
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

          {/* Product 3 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                25% OFF
              </div>
              <div className="h-64 flex items-center justify-center p-2 bg-gray-50">
                <Image
                  src="/images/tools.png"
                  alt="Kit de Herramientas Deluxe"
                  width={280}
                  height={280}
                  className="object-contain"
                />
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-1">Kit de Herramientas Deluxe</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-lg font-bold">$179.99</span>
                <span className="text-sm text-gray-500 line-through ml-2">$199.99</span>
              </div>
              <div className="flex justify-between items-center">
                <StarRating rating={4} totalReviews={15} />
                <button className="text-gray-500">
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

          {/* Product 4 */}
          <Card className="overflow-hidden">
            <div className="relative">
              <div className="h-64 flex items-center justify-center p-2 bg-gray-50">
                <Link href="/producto/sistema-riego-automatico">
                  <Image
                    src="/images/irrigation.png"
                    alt="Sistema de Riego Automático"
                    width={280}
                    height={280}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
            <CardContent className="p-4">
              <Link href="/producto/sistema-riego-automatico" className="hover:text-green-600">
                <h3 className="font-semibold mb-1">Sistema de Riego Automático</h3>
              </Link>
              <div className="flex items-baseline mb-2">
                <span className="text-lg font-bold">$189.99</span>
              </div>
              <div className="flex justify-between items-center">
                <StarRating rating={4} totalReviews={30} />
                <button className="text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
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
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
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
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Asesoría personalizada</h3>
            <p className="text-gray-600 text-sm">Recomendaciones de cultivo y productos a tu medida.</p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
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
                <circle cx="12" cy="12" r="10" />
                <path d="m4.93 4.93 4.24 4.24" />
                <path d="m14.83 14.83 4.24 4.24" />
                <path d="m14.83 9.17-4.24 4.24" />
                <path d="M14.83 9.17c3.12-3.12 3.12-8.19 0-11.31" />
                <path d="M9.17 14.83c-3.12 3.12-3.12 8.19 0 11.31" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Envío flexible</h3>
            <p className="text-gray-600 text-sm">Cancelación o cambio de pedido gratis hasta 24h antes del envío.</p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
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
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Atención 24/7</h3>
            <p className="text-gray-600 text-sm">Soporte y consultas sobre tus pedidos en cualquier momento.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-green-600 mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl font-bold mb-2">Contáctenos</h2>
            <p>Síguenos en redes para conocer novedades, trucos y promociones.</p>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors">
              <Facebook className="h-6 w-6 text-green-600" />
            </a>
            <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors">
              <Instagram className="h-6 w-6 text-green-600" />
            </a>
            <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors">
              <Twitter className="h-6 w-6 text-green-600" />
            </a>
            <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors">
              <Linkedin className="h-6 w-6 text-green-600" />
            </a>
            <a href="#" className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors">
              <Youtube className="h-6 w-6 text-green-600" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4">AgroMarket</h3>
              <p className="text-gray-600 text-sm">Tu socio agrícola de confianza.</p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Catálogo</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/catalogo/semillas" className="text-gray-600 hover:text-green-600 text-sm">
                    Semillas
                  </Link>
                </li>
                <li>
                  <Link href="/catalogo/fertilizantes" className="text-gray-600 hover:text-green-600 text-sm">
                    Fertilizantes
                  </Link>
                </li>
                <li>
                  <Link href="/catalogo/herramientas" className="text-gray-600 hover:text-green-600 text-sm">
                    Herramientas
                  </Link>
                </li>
                <li>
                  <Link href="/catalogo/sistemas-riego" className="text-gray-600 hover:text-green-600 text-sm">
                    Sistemas de riego
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/quienes-somos" className="text-gray-600 hover:text-green-600 text-sm">
                    Quiénes somos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-600 hover:text-green-600 text-sm">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="text-gray-600 hover:text-green-600 text-sm">
                    Términos y condiciones
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm">info@agromarket.com</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm">+1 (123) 456-7890</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm">Calle Verde 123, Agrociudad, AG 54321</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
            © 2025 AgroMarket. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
