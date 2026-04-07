import { data } from '../data.js'
import { MapPin, Clock, Phone } from 'lucide-react'

const Localizacao = ({ data }) => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/55${data.contato.whatsapp}`, '_blank')
  }

  return (
    <section id="localizacao" className="py-32 bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="section-title">
            Encontre-nos
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{animationDelay: '200ms'}}>
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-primary-500/10 transition-all">
              <MapPin className="w-12 h-12 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Localização</h3>
                <p className="opacity-90 font-semibold">{data.localizacao.cidade}</p>
                <p className="opacity-90">{data.localizacao.endereco}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-primary-500/10 transition-all">
              <Clock className="w-12 h-12 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Horário</h3>
                <p className="opacity-90">
                  Seg-Sex: {data.horario.semana}<br />
                  Sáb: {data.horario.sabado}<br />
                  Dom: {data.horario.domingo}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-primary-500/10 transition-all cursor-pointer" onClick={handleWhatsApp}>
              <Phone className="w-12 h-12 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Contato</h3>
                <p className="opacity-90 text-lg">Clique para falar no WhatsApp</p>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden border-2 border-white/20 animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.2795260373346!2d-47.96796042453219!3d-16.050978129326143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935981478a8b3c4b%3A0x1cfc9be88d70f0d9!2sAcademia%20Atlethica%20Unidade%201!5e0!3m2!1spt-BR!2sbr!4v1775605436767!5m2!1spt-BR!2sbr"
              className="w-full h-full"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Localizacao
