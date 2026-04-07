import { data } from '../data.js'
import { Mail, Instagram, Phone } from 'lucide-react'

const Contato = ({ data }) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/55${data.contato.whatsapp}`, '_blank')
  }

  const handleInstagram = () => {
    window.open(`https://instagram.com/${data.contato.instagram.replace('@', '')}`, '_blank')
  }

  return (
    <section className="py-32 bg-gradient-to-t from-black via-gray-900 to-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon/10 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 animate-fade-in-up">
        <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-primary-400 to-neon bg-clip-text text-transparent drop-shadow-2xl">
          Pronto para transformar 
          <br className="md:hidden" />
          <span className="text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text"> seu corpo?</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Fale conosco agora mesmo e receba uma 
          <span className="font-bold text-green-400"> avaliação física GRATUITA</span>
          + <span className="font-bold text-green-400">1 semana FREE</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button 
            onClick={handleWhatsApp}
            className="btn-whatsapp text-xl px-16 py-6 shadow-2xl text-lg"
          >
            <Phone className="w-6 h-6 inline mr-2" />
            Falar no WhatsApp
          </button>
          
          <a 
            href={`mailto:contato@${data.contato.instagram.replace('@', '')}.com`}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 p-1 rounded-full transition-all group"
          >
            <div className="bg-black/80 hover:bg-transparent group-hover:bg-white/20 px-10 py-6 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3">
              <Mail className="w-6 h-6" />
              Enviar Email
            </div>
          </a>
        </div>
        
        <div className="flex items-center gap-8 justify-center flex-wrap">
          <a 
            href={`https://instagram.com/${data.contato.instagram.replace('@', '')}`}
            onClick={(e) => { e.preventDefault(); handleInstagram(); }}
            className="group flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-primary-500/20 border border-white/10 hover:border-primary-400 transition-all duration-300"
          >
            <Instagram className="w-8 h-8 group-hover:text-neon transition-colors" />
            <span className="font-bold">{data.contato.instagram}</span>
          </a>
          
          <div className="text-sm opacity-75">
            © 2026 João Amorim. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
