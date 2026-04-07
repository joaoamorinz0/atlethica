import { data } from '../data.js'
import { Star } from 'lucide-react'

const Depoimentos = ({ data }) => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="section-title">
            O que dizem nossos alunos
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {data.depoimentos.map((depoimento, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <div className="flex gap-1 mb-6 justify-center">
                {[1,2,3,4,5].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-xl leading-relaxed mb-8 italic opacity-95 text-center">
                "{depoimento.texto}"
              </p>
              
              <div className="text-center">
                <div className="font-bold text-lg bg-gradient-to-r from-primary-400 to-neon bg-clip-text text-transparent">
                  {depoimento.autor}
                </div>
                <p className="text-primary-400">Aluno VIP</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos
