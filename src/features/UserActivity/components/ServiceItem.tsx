import React from 'react'
import { categories } from '../../../config/constants';

interface Props 
{
    time: string;
    date: string;
    service: string;
    provider: string;
    status: string;
    statusColorClass: string;
    statusTextColorClass: string;
}

const getCategoryIcon = (categoryName: string) => 
{
  return categories.find(cat => cat.label === categoryName)?.icon || '❓';
}

const ServiceItem: React.FC<Props> = ({time, date, service, provider, status, statusColorClass, statusTextColorClass}) => 
{

  return (
    <div className={`flex items-center border py-2 px-2 rounded-md bg-gray-50 
    transition-colors duration-200 hover:bg-orange-50`}>
      <div className="basis-1/4 px-1 font-medium flex flex-col text-sm text-center">
        <span className='font-bold'>{time}</span>
        <span className=''>{date}</span>
      </div>
      <div className="basis-3/4 flex flex-col items-center gap-2 border-l-2 px-2">
        <div className="flex items-center gap-1">
          <span className={`w-3 h-3 ${statusColorClass} rounded-full`}></span>
          <h3 className='text-md font-bold'>{service}</h3>
          <span className="text-xl">{getCategoryIcon(service)}</span>
        </div>
        <span className='text-sm'>Proveedor: {provider}</span>
        <div className="">
          <a href="/" className={`text-sm ${statusTextColorClass}`}>{status}</a>
          <a href="/" className={`ml-4 btn btn-xs bg-buttons hover:bg-btn-hover focus:bg-orange-400 rounded-lg border border-emerald-950 text-gray-700`}>Ver pedido</a>
        </div>
      </div>      
    </div>
  )
}

export default ServiceItem