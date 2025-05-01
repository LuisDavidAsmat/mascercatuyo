import { statusClasses } from '../../../../config/constants';

const ServiceStatus = ({ status, duration}: { status: string; duration: string }) => 
{
  const statusClass = statusClasses[status.toLowerCase()] || 'text-gray-500 font-semibold';

  return (
    <section className='w-full flex justify-between'>
      <p className={`capitalize text-sm ${statusClass}`}> {status}</p>
      <p className='capitalize text-sm'>Tiempo estimado: {duration} </p>
    </section>
  )
}

export default ServiceStatus