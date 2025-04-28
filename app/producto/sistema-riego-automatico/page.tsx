import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ShoppingCart, Minus, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StarRating } from "@/components/star-rating"
import { MobileMenu } from "@/components/mobile-menu"
import { UserMenu } from "@/components/user-menu"
import { CartMenu } from "@/components/cart-menu"

export default function ProductDetail() {
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

      {/* Rest of the product detail page remains unchanged */}
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-green-600">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Volver a todos los productos
          </Link>
        </div>

        {/* Product Detail */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white border rounded-lg overflow-hidden h-[400px]">
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                20% OFF
              </div>
              <Image
                src="/images/irrigation.png"
                alt="Sistema de Riego Automático"
                width={500}
                height={500}
                className="object-contain w-full h-full p-4"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button className="border rounded-md p-2 hover:border-green-500 transition-colors">
                <Image
                  src="/images/irrigation-detail.png"
                  alt="Detalle del sistema"
                  width={100}
                  height={100}
                  className="object-contain w-full h-20"
                />
              </button>
              <button className="border rounded-md p-2 hover:border-green-500 transition-colors">
                <Image
                  src="/images/irrigation-components.png"
                  alt="Componentes del sistema"
                  width={100}
                  height={100}
                  className="object-contain w-full h-20"
                />
              </button>
              <button className="border rounded-md p-2 hover:border-green-500 transition-colors">
                <Image
                  src="/images/irrigation-accessories.png"
                  alt="Accesorios del sistema"
                  width={100}
                  height={100}
                  className="object-contain w-full h-20"
                />
              </button>
              <button className="border rounded-md p-2 hover:border-green-500 transition-colors">
                <Image
                  src="/images/irrigation-diagram.png"
                  alt="Diagrama de instalación"
                  width={100}
                  height={100}
                  className="object-contain w-full h-20"
                />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Sistema de Riego Automático</h1>
              <div className="flex items-center mb-4">
                <div className="flex">
                  <StarRating rating={4} totalReviews={27} />
                </div>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-green-600">$49.99</span>
                <span className="text-lg text-gray-500 line-through ml-2">$59.99</span>
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Ahorra $10.00
                </span>
              </div>
            </div>

            <div className="space-y-4 border-t border-b py-4">
              <div>
                <label htmlFor="delivery-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de entrega
                </label>
                <Input
                  type="date"
                  id="delivery-date"
                  className="w-full"
                  defaultValue={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Cantidad
                </label>
                <div className="flex items-center border rounded-md w-32">
                  <button className="px-3 py-1 text-gray-600 hover:text-green-600">
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    className="w-full text-center border-0 focus:ring-0"
                    min="1"
                    defaultValue="1"
                  />
                  <button className="px-3 py-1 text-gray-600 hover:text-green-600">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Comprar ahora
              </Button>

              <p className="text-sm text-gray-500">No es necesario pagar ahora. Paga al recibir tus productos.</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Detalles</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Sistema de riego:</span>
                  <span className="font-medium">$79.99</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Envío estándar:</span>
                  <span className="font-medium">$10.00</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Servicio logístico:</span>
                  <span className="font-medium">$5.00</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-medium">$94.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="border-b w-full justify-start rounded-none bg-transparent mb-4">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 data-[state=active]:bg-transparent"
            >
              Descripción
            </TabsTrigger>
            <TabsTrigger
              value="specifications"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 data-[state=active]:bg-transparent"
            >
              Especificaciones
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 data-[state=active]:bg-transparent"
            >
              Reseñas (27)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="pt-4">
            <div className="prose max-w-none">
              <p>
                Te presentamos nuestros nuevos Kits de Riego para Macetas de Balcón, vienen con el Temporizador incluido
                y todos los accesorios necesarios para regar de forma adecuada cualquier tamaño de maceta.
              </p>
              <p className="mt-4">
                Este sistema de riego por goteo automático es perfecto para mantener tus plantas hidratadas de manera
                eficiente y sin desperdiciar agua. El kit incluye todos los componentes necesarios para una instalación
                rápida y sencilla.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600 mb-2"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h.01" />
                    <path d="M17 7h.01" />
                    <path d="M7 17h.01" />
                    <path d="M17 17h.01" />
                  </svg>
                  <h4 className="font-medium">Hasta 40 m²</h4>
                </div>
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600 mb-2"
                  >
                    <path d="M12 22v-5" />
                    <path d="M9 8V2" />
                    <path d="M15 8V2" />
                    <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
                  </svg>
                  <h4 className="font-medium">Fácil instalación</h4>
                </div>
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600 mb-2"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  <h4 className="font-medium">Eficiencia</h4>
                </div>
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600 mb-2"
                  >
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="m19.07 10.93-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="M16 6 8 14" />
                    <path d="M16 14 8 6" />
                  </svg>
                  <h4 className="font-medium">Personalización</h4>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="pt-4">
            <div className="prose max-w-none">
              <h3>Contenido del kit:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>40 metros de manguera de riego</li>
                <li>48 goteros ajustables</li>
                <li>48 conectores en T</li>
                <li>4 conectores en L</li>
                <li>4 tapones finales</li>
                <li>1 conector de grifo</li>
                <li>1 divisor de flujo Y</li>
                <li>2 conectores rápidos</li>
                <li>1 rollo de cinta de teflón</li>
                <li>Manual de instalación</li>
              </ul>

              <h3 className="mt-6">Especificaciones técnicas:</h3>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Material de la manguera</td>
                    <td className="py-2">PVC flexible de alta resistencia</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Diámetro de la manguera</td>
                    <td className="py-2">4mm (interior) / 6mm (exterior)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Presión de trabajo</td>
                    <td className="py-2">0.5 - 4 bar</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Caudal por gotero</td>
                    <td className="py-2">0-70 l/h (ajustable)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Área de cobertura</td>
                    <td className="py-2">Hasta 40 m²</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Compatibilidad</td>
                    <td className="py-2">Grifos estándar con rosca de 3/4"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-4">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-5xl font-bold">4.0</div>
                  <div className="flex justify-center mt-2">
                    <StarRating rating={4} />
                  </div>
                  <div className="text-sm text-gray-500 mt-1">27 reseñas</div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-sm font-medium w-8">5★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-yellow-400 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                      <span className="text-sm text-gray-500 w-8 text-right">60%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium w-8">4★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-yellow-400 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                      <span className="text-sm text-gray-500 w-8 text-right">25%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium w-8">3★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-yellow-400 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                      <span className="text-sm text-gray-500 w-8 text-right">10%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium w-8">2★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-yellow-400 rounded-full" style={{ width: "3%" }}></div>
                      </div>
                      <span className="text-sm text-gray-500 w-8 text-right">3%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium w-8">1★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-yellow-400 rounded-full" style={{ width: "2%" }}></div>
                      </div>
                      <span className="text-sm text-gray-500 w-8 text-right">2%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-lg mb-4">Comentarios de clientes</h3>
                <div className="space-y-6">
                  {/* Review 1 */}
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                          MR
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">María Rodríguez</div>
                          <div className="flex">
                            <StarRating rating={5} />
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">Hace 2 semanas</div>
                    </div>
                    <p className="text-gray-700">
                      Excelente sistema de riego. Muy fácil de instalar y funciona perfectamente. Mis plantas están muy
                      agradecidas y yo también porque ya no tengo que preocuparme por regarlas todos los días.
                    </p>
                  </div>

                  {/* Review 2 */}
                  <div className="border-b pb-6">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                          JL
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">Juan López</div>
                          <div className="flex">
                            <StarRating rating={4} />
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">Hace 1 mes</div>
                    </div>
                    <p className="text-gray-700">
                      Buen producto, aunque algunas piezas parecen un poco frágiles. La instalación fue sencilla
                      siguiendo las instrucciones y por ahora funciona bien. Veremos cómo se comporta con el tiempo.
                    </p>
                  </div>

                  {/* Review 3 */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                          AG
                        </div>
                        <div className="ml-3">
                          <div className="font-medium">Ana García</div>
                          <div className="flex">
                            <StarRating rating={5} />
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">Hace 2 meses</div>
                    </div>
                    <p className="text-gray-700">
                      ¡Increíble! Este sistema ha cambiado mi vida. Tengo muchas plantas en mi terraza y siempre era un
                      problema regarlas cuando me iba de vacaciones. Ahora puedo irme tranquila sabiendo que mis plantas
                      estarán bien cuidadas.
                    </p>
                  </div>
                </div>

                <Button variant="outline" className="mt-6">
                  Ver todas las reseñas
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Similar Products */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Productos similares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Product 1 */}
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative">
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  25% OFF
                </div>
                <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
                  <Image
                    src="/images/tools.png"
                    alt="Kit de Herramientas Deluxe"
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
              </div>
              <CardContent className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Kit de Herramientas Deluxe</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-lg font-bold">$24.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$29.99</span>
                  </div>
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
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative">
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  20% OFF
                </div>
                <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
                  <Image
                    src="/images/irrigation.png"
                    alt="Sistema de Riego Automático"
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
              </div>
              <CardContent className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Sistema de Riego Automático</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-lg font-bold">$24.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$27.99</span>
                  </div>
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

            {/* Product 3 */}
            <Card className="overflow-hidden flex flex-col h-full">
              <div className="relative">
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                  40% OFF
                </div>
                <div className="h-48 flex items-center justify-center p-4 bg-gray-50">
                  <Image
                    src="/images/fertilizer.png"
                    alt="Estación Meteorológica"
                    width={200}
                    height={200}
                    className="object-contain h-full"
                  />
                </div>
              </div>
              <CardContent className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Estación Meteorológica</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-lg font-bold">$24.99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$39.99</span>
                  </div>
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
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-gray-500">© 2025 AgroMarket. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}
