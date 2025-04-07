import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#4a7c59] shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo & App Name */}
            <div className="flex items-center space-x-4 group">
              <div className="logo-container p-2">
                <img
                  className="rounded-lg border-2 border-[#f8f8f2]/20 hover:border-[#2c3e50] transition-all duration-300 hover:scale-105 w-24 h-16 object-cover"
                  src="/peste-prins-logo.png"
                  alt="Peste Prins Logo"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#f8f8f2] text-2xl font-bold group-hover:text-[#d4af37] transition-colors duration-300">Peste Prins</h1>
                <span className="text-[#f8f8f2]/80 text-sm">Platforma de pescuit</span>
              </div>
            </div>

            {/* Navigation Menu */}
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="nav-link">
                    Acasă
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="nav-link">
                    Hărți
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="nav-link">
                    Meteo12ssss31323
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="nav-link">
                    Jurnal
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#" className="nav-link">
                    Comunitate
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-[#f8f8f2] hover:text-[#d4af37] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/fishing_hero.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#4a7c59]/95 via-[#4a7c59]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-[#f8f8f2] mb-6 leading-tight">
              Bine ai venit la
              <br />
              <span className="text-[#d4af37]">Peste Prins</span>
            </h1>
            <p className="text-xl text-[#f8f8f2]/90 mb-8 leading-relaxed">
              Platforma ta de pescuit în România. Descoperă cele mai bune locații, verifică vremea și conectează-te cu alți pescari.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#8b5a2b] hover:bg-[#6b4421] text-[#f8f8f2] text-lg px-8 py-6 shadow-lg transition-all duration-300">
                Începe Aventura
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#f8f8f2] text-gray-800 text-lg px-8 py-6 shadow-lg hover:bg-[#f8f8f2]/10 transition-all duration-300"
              >
                Află Mai Multe
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f5dc] to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f5f5dc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c3e50] mb-4">Caracteristici</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descoperă toate funcționalitățile care te ajută să ai o experiență de pescuit de neuitat
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🗺️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#4a7c59]">Hărți Interactive</h3>
              <p className="text-gray-700">Descoperă cele mai bune locații de pescuit din România cu hărțile noastre interactive.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌤️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#4a7c59]">Prognoze Meteo</h3>
              <p className="text-gray-700">Verifică condițiile meteo perfecte pentru pescuit în timp real.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-[#4a7c59]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#4a7c59]">Comunitate</h3>
              <p className="text-gray-700">Conectează-te cu alți pescari, împărtășește experiențe și sfaturi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Locations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2c3e50] mb-4">Locații Populare</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explorează cele mai populare locații de pescuit din România</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-[url('/balta_lilieci.jpg')] bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-[#f8f8f2] text-3xl font-bold mb-2">Balta Lilieci Ialomița</h3>
                <p className="text-[#f8f8f2]/80">O locație excelentă pentru pescuit cu numeroase specii de pești</p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-[url('/lacul_tancabesti.jpg')] bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-[#f8f8f2] text-3xl font-bold mb-2">Lacul Tancăbești</h3>
                <p className="text-[#f8f8f2]/80">Un lac pitoresc cu pești mari și peisaje spectaculoase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4a7c59] text-[#f8f8f2] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Peste Prins</h4>
              <p className="text-[#f8f8f2]/80">Platforma ta de pescuit în România.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Link-uri Rapide</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-[#f8f8f2]/80 hover:text-[#d4af37] transition-colors duration-300">
                    Acasă
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#f8f8f2]/80 hover:text-[#d4af37] transition-colors duration-300">
                    Hărți
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#f8f8f2]/80 hover:text-[#d4af37] transition-colors duration-300">
                    Meteo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#f8f8f2]/80 hover:text-[#d4af37] transition-colors duration-300">
                    Jurnal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-[#f8f8f2]/80">Email: contact@pesteprins.ro</li>
                <li className="text-[#f8f8f2]/80">Telefon: +40 123 456 789</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Urmărește-ne</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-[#f8f8f2]/80 hover:text-[#d4af37] transition-colors duration-300">
                  Facebook
                </a>
                <a href="#" className="text-[#f8f8f2]/80 hover:text-[#d4af37] transition-colors duration-300">
                  Instagram
                </a>
                <a href="#" className="text-[#f8f8f2]/80 hover:text-[#d4af37] transition-colors duration-300">
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#f8f8f2]/20 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} Peste Prins - Toate drepturile rezervate</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
