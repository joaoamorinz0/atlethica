import { data } from '../data.js'
import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Planos', href: '#planos' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Contato', href: '#contato' }
  ]

  const handleWhatsApp = () => {
    window.open(`https://wa.me/55${data.contato.whatsapp}`, '_blank')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="text-2xl font-black bg-gradient-to-r from-primary-500 to-neon bg-clip-text text-transparent hover:scale-105 transition-all">
              {data.nome}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            <div className="flex space-x-8 lg:space-x-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white/80 hover:text-white hover:bg-primary-500/20 px-4 py-2 rounded-xl transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <button 
              onClick={handleWhatsApp}
              className="ml-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 animate-fade-in-up">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-lg font-medium text-white hover:bg-primary-500/20 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={handleWhatsApp}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all mt-4 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Fale no WhatsApp
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
