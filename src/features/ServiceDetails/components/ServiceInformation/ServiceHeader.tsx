import React from 'react'
import { useNavigate } from 'react-router'

interface HeaderProps
{
  category: string
}

const ServiceHeader: React.FC<HeaderProps> = ({ category }) => 
{
    const navigate = useNavigate();

    const handleGoBack = () => 
    {
      navigate(-1);
    }
  return (
    <>
      <div className='flex justify-center items-center gap-40'>
        <button onClick={handleGoBack} className="cursor-pointer">
          <svg className='mt-1 h-7 w-7 fill-current text-white stroke-black stroke-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h2 className="font-bold text-center text-xl tracking-wider">Prestación de Servicio</h2>
        <p></p>
      </div>
      <h3 className="font-bold text-center text-md uppercase">{category}</h3>      
    </>
  )
}

export default ServiceHeader