import { Button } from "@/components/ui/button";
import InteractiveMap from "@/components/InteractiveMap";

export default function HartiPage() {
  return (
    <div className="min-h-screen bg-[#f5f5dc]">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#2c3e50] mb-4">Hărți de Pescuit</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explorează cele mai bune locații de pescuit din România</p>
        </div>

        {/* Map Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-[#4a7c59] mb-6">Harta Interactivă</h2>
          <InteractiveMap />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#4a7c59] mb-4">Filtre</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-[#2c3e50] font-medium mb-2">Tip de Pește</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4a7c59]">
                  <option>Toate speciile</option>
                  <option>Șalău</option>
                  <option>Caras</option>
                  <option>Biban</option>
                  <option>Păstrăv</option>
                </select>
              </div>
              <div>
                <label className="block text-[#2c3e50] font-medium mb-2">Regiune</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4a7c59]">
                  <option>Toate regiunile</option>
                  <option>Muntenia</option>
                  <option>Moldova</option>
                  <option>Transilvania</option>
                  <option>Dobrogea</option>
                </select>
              </div>
              <div>
                <label className="block text-[#2c3e50] font-medium mb-2">Tip de Apă</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4a7c59]">
                  <option>Toate tipurile</option>
                  <option>Râu</option>
                  <option>Lac</option>
                  <option>Balta</option>
                  <option>Mare</option>
                </select>
              </div>
              <Button className="w-full bg-[#4a7c59] hover:bg-[#3a6c49] text-white">Aplică Filtrele</Button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#4a7c59] mb-4">Locații Recomandate</h2>
            <p className="text-gray-700 mb-6">Găsește cele mai populare locații de pescuit recomandate de comunitatea noastră.</p>
            <Button className="bg-[#4a7c59] hover:bg-[#3a6c49] text-white">Explorează Locații</Button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-8 text-center">Locații Populare</h2>
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
      </div>
    </div>
  );
}
