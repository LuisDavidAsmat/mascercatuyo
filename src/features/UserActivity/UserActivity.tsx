import ServiceItem from "./components/ServiceItem";


const services = [
  {
    time: '12:00 PM',
    date: 'April, 2025',
    service: 'Alimentación',
    provider: 'Pepito Perez',
    status: 'Pendiente',
    statusColorClass: 'bg-amber-400',
    statusTextColorClass: 'text-amber-500',
  },
  {
    time: '12:00 PM',
    date: 'April, 2025',
    service: 'Cerrajero',
    provider: 'Carlos Fernandez',
    status: 'Aceptado',
    statusColorClass: 'bg-green-400',
    statusTextColorClass: 'text-green-500',
  },
  {
    time: '12:00 PM',
    date: 'April, 2025',
    service: 'Jardinería',
    provider: 'Xuan Zhanle',
    status: 'Completado',
    statusColorClass: 'bg-blue-400',
    statusTextColorClass: 'text-blue-500',
  },
  {
    time: '12:00 PM',
    date: 'April, 2025',
    service: 'Mecánica',
    provider: 'Ollie Martinez',
    status: 'Cancelado',
    statusColorClass: 'bg-red-400',
    statusTextColorClass: 'text-red-500',
  },
  {
    time: '12:00 PM',
    date: 'April, 2025',
    service: 'Jardinería',
    provider: 'Xuan Zhanle',
    status: 'Completado',
    statusColorClass: 'bg-blue-400',
    statusTextColorClass: 'text-blue-500',
  },
];


const UserActivity = () => {
  return (
    <div className="py-4">
      <h2 className='text-xl font-semibold text-gray-600'>Servicios Contratados</h2>
      <div className="mt-4 grid grid-cols-3 gap-4 ">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service}/>
        ))}
        <div className="flex justify-center items-center text-sm text-gray-600   ">
          <div className="group flex flex-col items-center cursor-pointer">
            <a href={`/categorias`} className='bg-buttons text-white rounded p-2 group transition-all duration-150
            group-hover:bg-orange-400 '>
              <svg className='w-6 h-6 stroke-black stroke-2
                group-hover:stroke-white
                ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12h12m-6-6v12" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href={`/categorias`} className="mt-1 font-medium group-hover:text-orange-500 cursor-pointer">Ver más</a>
          </div>
        </div>
      </div>

      
      <h2 className="mt-8 text-xl font-semibold text-gray-600">Servicios Ofrecidos</h2>
      <div className="overflow-x-auto">
        <table className="mt-6 border w-full">
          <thead className="border ">
            <tr className="">
              <th className="tracking-wide py-2 px-4 font-semibold text-gray-600 ">Categoría</th>
              <th className="font-semibold text-gray-600 ">Fecha de Creación</th>
              <th className="font-semibold text-gray-600 ">Estado</th>
              <th className="font-semibold text-gray-600 ">Ciudad</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="text-center border-b hover:bg-gray-100">
              <td className="p-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="avatar">
                    <div className="mask mask-squircle h-11 w-11">
                      <img
                        src="/img/servicesImgs/actividadFisica.png"
                        alt="category Avatar" />
                    </div>
                  </div>
                  <span>Actividad física</span>
                </div>
              </td>
              <td className="text-sm">
                12:00 PM 04 April, 2025
              </td>
              <td className="">
                <span className="px-2 py-1 text-xs font-medium bg-green-200 text-green-800 rounded-full">
                  Disponible
                </span>
                </td>
              <td>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Paris
                </span>
              </td>
              <td>
                <button className="btn btn-xs bg-buttons hover:bg-btn-hover focus:bg-orange-400 rounded-lg border border-emerald-950 text-gray-700">Ver detalles</button>
              </td>
            </tr>
            <tr className="text-center border-b hover:bg-gray-100 ">
              <td className="p-2">
                <div className="flex items-center justify-center gap-2">
                  <div className="avatar">
                    <div className="mask mask-squircle h-11 w-11">
                      <img
                        src="/img/servicesImgs/jardineria.png"
                        alt="category Avatar" />
                    </div>
                  </div>
                  <span>Jardinería</span>
                </div>
              </td>
              <td className="text-sm">
                12:00 PM 04 April, 2025
              </td>
              <td className="">
                <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-yellow-800 rounded-full">
                  Ocupado
                </span>
                </td>
              <td>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Paris
                </span>
              </td>
              <td>
                <button className="btn btn-xs bg-buttons hover:bg-btn-hover focus:bg-orange-400 rounded-lg border border-emerald-950 text-gray-700">Ver detalles</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      
        

      
    </div>
  )
}

export default UserActivity