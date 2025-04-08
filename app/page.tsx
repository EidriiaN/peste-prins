import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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
    </div>
  );
}
