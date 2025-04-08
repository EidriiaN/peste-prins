export default function Footer() {
  return (
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
                <a href="/" className="text-[#f8f8f2]/80 hover:text-[#2c3e50] transition-colors duration-300">
                  Acasă
                </a>
              </li>
              <li>
                <a href="/harti" className="text-[#f8f8f2]/80 hover:text-[#2c3e50] transition-colors duration-300">
                  Hărți
                </a>
              </li>
              <li>
                <a href="#" className="text-[#f8f8f2]/80 hover:text-[#2c3e50] transition-colors duration-300">
                  Meteo
                </a>
              </li>
              <li>
                <a href="#" className="text-[#f8f8f2]/80 hover:text-[#2c3e50] transition-colors duration-300">
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
              <a href="#" className="text-[#f8f8f2]/80 hover:text-[#2c3e50] transition-colors duration-300">
                Facebook
              </a>
              <a href="#" className="text-[#f8f8f2]/80 hover:text-[#2c3e50] transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-[#f8f8f2]/80 hover:text-[#2c3e50] transition-colors duration-300">
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
  );
}
