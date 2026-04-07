import { useEffect, useState } from 'react'
import { data } from './data.js'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Atalhos from './components/Atalhos'
import Sobre from './components/Sobre'
import Modalidades from './components/Modalidades'
import Planos from './components/Planos'
import Depoimentos from './components/Depoimentos'
import Localizacao from './components/Localizacao'
import Contato from './components/Contato'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Navbar />
      <div className="pt-20 lg:pt-24 min-h-screen">
        <Hero data={data} />
        <Atalhos data={data} />
        <Sobre data={data} />
        <Modalidades data={data} />
        <Planos data={data} />
        <Localizacao data={data} />
        <Contato data={data} />
        <WhatsAppButton whatsapp={data.contato.whatsapp} />
      </div>
    </>
  )
}

export default App
