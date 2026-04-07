import { Dumbbell, Activity, Zap, MapPin, Phone, Clock } from 'lucide-react'
import { data } from '../data.js'

const Atalhos = ({ data }) => {
  const atalhos = [
    {
      icone: Dumbbell,
      titulo: 'Musculação',
      descricao: 'Equipamentos profissionais'
    },
    {
      icone: Activity,
      titulo: 'Funcional',
      descricao: 'Treino HIIT'
    },
    {
      icone: Zap,
      titulo: 'Crossfit',
      descricao: 'Funcional avançado'
    },
    {
      icone: MapPin,
      titulo: 'Localização',
      descricao: data.localizacao.cidade
    },
    {
      icone: Phone,
      titulo: 'WhatsApp',
      descricao: 'Fale agora'
    },
    {
      icone: Clock,
      titulo: 'Horário',
      descricao: data.horario.semana
    }
  ]

  const handleWhatsApp = () => {
    window.open(`https://wa.me/55${data.contato.whatsapp}`, '_blank')
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {atalhos.map((atalho, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl hover:bg-primary-500/20 border border-white/10 hover:border-primary-400 transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={atalho.titulo === 'WhatsApp' ? handleWhatsApp : undefined}
            >
              <atalho.icone className="w-12 h-12 text-primary-400 group-hover:text-neon mb-4 group-hover:scale-110 transition-all duration-300" />
              <h3 className="font-bold text-lg mb-2 text-center">{atalho.titulo}</h3>
              <p className="text-sm opacity-75 text-center">{atalho.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Atalhos
