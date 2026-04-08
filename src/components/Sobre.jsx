import { data } from '../data.js'

const Sobre = ({ data }) => {
  return (
    <section id="sobre" className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="section-title">
            Sobre a {data.nome}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{animationDelay: '200ms'}}>
          <div>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              {data.descricao}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary-500 mb-2">05h-22h</div>
                <p className="text-primary-400">Seg-Sex</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-500 mb-2">07h-16h</div>
                <p className="text-primary-400">Sábado</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-500 mb-2">07h-12h</div>
                <p className="text-primary-400">Domingo</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <div className="bg-gradient-to-br from-primary-600/20 to-neon/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
                Estrutura Premium
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                  Equipamentos importados
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                  Professores qualificados
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                  Ambiente climatizado
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon rounded-full"></div>
                  Estacionamento privativo
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
