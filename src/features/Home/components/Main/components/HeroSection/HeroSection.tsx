import React from 'react'
import ImgHolder from '../../../../../../components/ImgHolder'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <>
        <h1 className='mt-8 text-left text-5xl font-bold tracking-wide'>Un servicio <span className='text-orange-500'>M</span>ás Cerca Tuyo</h1>
        <h2 className='mt-14 text-left text-xl font-semibold'>Encuentra, visualiza y conecta</h2>
        <p className='mt-2 text-left text-sm max-w-md'>Con trabajadores o clientes locales y accede rápidamente a los servicios para el hogar o aumenta tus oportunidades laborales</p>
        <ImgHolder imgPath={"./img/hero-img-nobg.png"} customClass='w-2/4 mx-auto mt-16'/>
    </>
  )
}

export default HeroSection