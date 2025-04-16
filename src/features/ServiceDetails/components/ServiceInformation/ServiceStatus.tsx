import React from 'react'

const ServiceStatus = ({ status, duration}: { status: string; duration: string }) => {
  return (
    <section className='w-full flex justify-between'>
      <p className={`capitalize text-sm ${status}`}> {status}</p>
      <p className='capitalize text-sm'>Tiempo estimado: {duration} </p>
    </section>
  )
}

export default ServiceStatus