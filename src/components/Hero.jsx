import { ArrowRight, MapPin } from 'lucide-react'
import { data } from '../data.js'

const Hero = ({ data }) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/55${data.contato.whatsapp}`, '_blank')
  }

  return (
    <section 
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/80 to-primary-900/80" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-neon bg-clip-text text-transparent drop-shadow-2xl">
          TREINE COMO 
          <br />
          <span className="text-primary-400">UM ATLETA</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          {data.slogan}
        </p>
        
        <div className="space-y-4 md:space-y-6 mb-12">
          <div className="flex items-center justify-center gap-2 text-lg opacity-90">
            <MapPin className="w-5 h-5" />
            <span>{data.localizacao.cidade}</span>
          </div>
          
          <div className="text-3xl md:text-4xl font-bold text-green-400">
            Planos a partir de {data.planos[0].preco}/mês
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <button 
            onClick={handleWhatsApp}
            className="btn-whatsapp text-xl px-12 py-5 shadow-2xl"
          >
            Falar no WhatsApp
            <ArrowRight className="w-6 h-6 ml-2" />
          </button>
          
          <a 
            href="#planos" 
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 text-white font-bold px-12 py-5 rounded-full transition-all duration-300 hover:scale-105"
          >
            Ver Planos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
