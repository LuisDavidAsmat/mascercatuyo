import React from 'react'
import { categories } from '../../../../config/constants'

interface HeaderProps
{
  category: string
}

const ServiceHeader: React.FC<HeaderProps> = ({ category }) => 
{
    
  return (
    <>
        <h2 className="font-bold text-center text-xl tracking-wider">Prestación de Servicio</h2>
        <h3 className="font-bold text-center text-md uppercase">{category}</h3>      
    </>
  )
}

export default ServiceHeader