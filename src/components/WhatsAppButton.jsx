import { Phone } from 'lucide-react'

const WhatsAppButton = ({ whatsapp }) => {
  const handleClick = () => {
    window.open(`https://wa.me/55${whatsapp}`, '_blank')
  }

  return (
    <button 
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-green-500/25 border-4 border-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95"
    >
      <Phone className="w-5 h-5" />
    </button>
  )
}

export default WhatsAppButton
