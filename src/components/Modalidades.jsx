import { data } from '../data.js'

const Modalidades = ({ data }) => {
  return (
    <section id="modalidades" className="py-32 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="section-title">
            Nossas Modalidades
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.modalidades.map((modalidade, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10 hover:bg-primary-500/10 hover:border-primary-400 transition-all duration-300 hover:-translate-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-neon rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300">
                {/* Icon placeholder */}
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center font-bold text-sm">
                  {modalidade.icone?.toUpperCase()}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-center">{modalidade.nome}</h3>
              <p className="text-lg opacity-90 text-center leading-relaxed">
                {modalidade.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modalidades
