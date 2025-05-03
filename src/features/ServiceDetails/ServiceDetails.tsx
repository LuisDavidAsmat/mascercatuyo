import { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import OtherPosts from './components/OtherPosts';
import ServiceInformation from './components/ServiceInformation/ServiceInformation';
import HireServiceOfferFlow from './components/HireServiceOfferFlow';


export interface RequestedService 
{
  
  idUsuario: number | null;
  idServicio: number;
  status: string;
  fecha: string;
}

const ServiceDetails = () => 
{  
  const { servicioId } = useParams();

  

  return(
    <div className="fixed inset-0 bg-white text-black bg-white flex justify-center items-center z-50 overflow-y-auto dark:bg-stone-800">
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg h-screen w-full">
        <ServiceInformation serviceId={servicioId!}/>
        {/* <OtherPosts /> */}
        <HireServiceOfferFlow serviceId={servicioId!}/>            
      </div>
    </div>
  )
}

export default ServiceDetails;