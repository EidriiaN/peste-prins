import Image from "next/image";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="bg-[#4a7c59] shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo & App Name */}
          <div className="flex items-center space-x-4 group">
            <div className="logo-container p-2">
              <Image
                className="rounded-lg border-2 border-[#f8f8f2]/20 hover:border-[#2c3e50] transition-all duration-300 hover:scale-105 w-24 h-16 object-cover"
                src="/peste-prins-logo.png"
                alt="Peste Prins Logo"
                width={96}
                height={64}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#f8f8f2] text-2xl font-bold group-hover:text-[#2c3e50] transition-colors duration-300">Peste Prins</h1>
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
                <NavigationMenuLink href="/harti" className="nav-link">
                  Hărți
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="nav-link">
                  Meteo
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
          <button className="md:hidden text-[#f8f8f2] hover:text-[#2c3e50] transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
