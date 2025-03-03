import React from 'react'
import { Link } from 'react-router'
import ImgHolder from '../../../../../../components/ImgHolder'

type Props = {}

const CTA = (props: Props) => {
  return (
    <div>
        <ImgHolder imgPath={"./img/hero-subtitle-img.png"} customClass='w-2/4 mx-auto mt-20'/>
        <section className='mt-24 flex flex-col justify-center gap-8'>
          <Link to={"servicio-solicitar"} className="w-3/12 mx-auto py-2 rounded-xl uppercase text-black text-center bg-orange-100 border border-emerald-950
            dark:text-white">
            Solicitar servicio
          </Link>

          <Link to={"servicio-ofrecer"} className="w-4/12 mx-auto px-24 py-2 rounded-xl uppercase text-black  bg-orange-100 border border-emerald-950
            dark:text-white">
            Ofrecer servicio
          </Link>
        </section>
    </div>
  )
}

export default CTA












