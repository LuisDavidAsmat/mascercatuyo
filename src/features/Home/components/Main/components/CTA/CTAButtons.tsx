import React from 'react'

type CTAButtonsProps =
{
    handleAccess: (path: string) => void;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({ handleAccess }) => {
  return (
    <section className='mt-24 flex flex-col justify-center gap-8'>
        <button 
        onClick={() => handleAccess('/servicio-solicitar')}
          className="w-3/12 mx-auto py-2 rounded-xl uppercase text-black text-center bg-orange-100 border border-emerald-950
          hover:bg-btn-hover active:bg-orange-400
          ">
          Solicitar servicio
        </button>

        <button 
        onClick={() => handleAccess('/servicio-ofrecer')}
          className="w-4/12 mx-auto text-center py-2 rounded-xl uppercase text-black bg-orange-100 border border-emerald-950
          hover:bg-btn-hover active:bg-orange-400            
          ">
          Ofrecer servicio
        </button>
    </section>
  )
}

export default CTAButtons