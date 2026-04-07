import { data } from '../data.js'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Planos = ({ data }) => {
  const handleWhatsApp = (plano) => {
    const message = `Olá! Gostaria de mais informações sobre o plano ${plano.nome}`
    window.open(`https://wa.me/55${data.contato.whatsapp}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section id="planos" className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="section-title">
            Nossos Planos
          </h2>
          <p className="text-xl mt-4 opacity-90 max-w-2xl mx-auto">
            Escolha o plano perfeito para você e comece sua transformação hoje mesmo!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {data.planos.map((plano, index) => (
            <div 
              key={index}
              className={`relative p-10 rounded-3xl border-2 transition-all duration-300 cursor-pointer group hover:scale-105 hover:-translate-y-2 animate-fade-in-up ${plano.destaque ? 'bg-gradient-to-br from-primary-500 to-neon border-primary-400 shadow-2xl shadow-primary-500/25 scale-105 border-4' : 'bg-white/5 border-white/10 hover:border-primary-400 hover:bg-primary-500/5'}`}
              style={{ animationDelay: `${index * 150 + 200}ms` }}
              onClick={() => handleWhatsApp(plano)}
            >
              {plano.destaque && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                  Mais Popular
                </div>
              )}
              
              <div className="text-center">
<h3 className="text-2xl md:text-3xl font-black mb-6 bg-gradient-to-r from-white via-primary-300 to-neon bg-clip-text text-transparent">
                  {plano.nome}
                </h3>
                
                <div className="text-4xl md:text-5xl font-black text-white mb-3">
                  {plano.preco}
                  <span className="text-xl font-normal text-gray-400 block">/Mês</span>
                </div>
                
                <div className="bg-black/30 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/20 mb-8">
                  <p className="font-bold text-lg text-primary-300">
                    {plano.descricao}
                  </p>
                </div>
                
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center justify-center gap-3 text-lg">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    Acesso ilimitado
                  </li>
                  <li className="flex items-center justify-center gap-3 text-lg">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    Todas as modalidades
                  </li>
                  <li className="flex items-center justify-center gap-3 text-lg">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    Avaliação física grátis
                  </li>
                 
                </ul>
                
                <button 
                  className={`w-full py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 group-hover:scale-110 ${plano.destaque ? 'bg-white text-primary-700 hover:bg-primary-100 shadow-2xl' : 'bg-gradient-to-r from-primary-500 to-neon hover:from-primary-600 hover:to-primary-400 text-white border-2 border-transparent hover:border-white/50'}`}
                >
                  Escolher Plano
                  <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
     ))}
        </div>
      </div>
    </section>
  )
}

export default Planos
