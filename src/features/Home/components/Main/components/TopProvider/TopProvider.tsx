import React from 'react'

type Props = {}

const TopProvider = (props: Props) => {
  return (
    <section className='mt-16 flex gap-4 text-black'>
          <section className='flex justify-center items-center gap-4 pl-48'>
            <figure className=' w-16'>
              <img src="./img/prestador-destacado.png" alt="" className='w-full h-full'/>
            </figure>
            <section className='text-left'>
              <h2 className='text-xl font-bold'>Prestador(a) destacado(a)</h2>
              <p>¡Felicidades Nombre y apellido por su excelente servicio en Nombre del servicio!</p>
            </section>
          </section>
          <section className='flex items-center gap-4'>
            <figure className='h-full w-16 rounded-lg bg-neutral-300 border border-gray-400'>

            </figure>
            <section className='flex flex-col gap-1 text-black'>
              <button type="button" className='py-1 px-2 rounded-xl bg-orange-100 border border-emerald-900'>Ver Perfil</button>
              <button type="button" className='py-1 px-2 rounded-xl bg-red-100 border border-emerald-900'>Seguir</button>

            </section>
        </section>
    </section>
  )
}

export default TopProvider