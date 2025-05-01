import React, { useEffect, useState } from 'react'
import ServiceHeader from './ServiceHeader'
import ServiceOfferOwner from './ServiceOfferOwner'
import ServiceStatus from './ServiceStatus'
import ServiceCost from './ServiceCost'
import ServiceDescription from './ServiceDescription'
import { fetchServiceById } from '../../api/servicedetails.api'
import { estados, tiempos } from '../../../../config/constants'
import UserLocation from '../../../Home/components/Header/components/UserLocation/UserLocation'
import MapPopup from '../../../Home/components/Header/components/UserLocation/MapPopup'
import UserLocationMap from '../../../Home/components/Header/components/UserLocation/UserLocationMap'

interface ServiceInformationProps
{
  serviceId: string;
}


const ServiceInformation: React.FC<ServiceInformationProps> = ({ serviceId }) => 
{
  const [service, setService] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);

    

  useEffect(() => 
  {
    const fetchServices = async () => 
    {
      const parsedServiceId = parseInt(serviceId ?? '', 10);

      if (isNaN(parsedServiceId)) 
      {
        console.error('Invalid serviceId:', serviceId);
        return; 
      }
      
      try
      {
        const service = await fetchServiceById(parsedServiceId);
        setService(service);                    
      }
      catch (error)
      {
        console.error('Error fetching services', error);
      }
      finally
      {
        setIsLoading(false);
      }
    };
  
    fetchServices();
  }, [serviceId])

  if (isLoading) 
  {
      return <div>Loading...</div>;
  }
    
  if (!service) 
  {
    return <div>No service data found.</div>;
  }

  const statusInfo = estados.find(item => item.value === service.status);
  const durationInfo = tiempos.find(duration => duration.value === service.duration);



  return (
    <>
      <ServiceHeader category={service.category}/>
      <section className='sm:flex sm:gap-8 sm:px-64 mt-4 text-sm '>
        <section className='basis-2/4 flex flex-col justify-between space-y-4'>
          <ServiceOfferOwner />
                <ServiceStatus status={statusInfo?.label || ''} duration={durationInfo?.label || ''}/>
                <ServiceCost cost={service.cost}/>
        </section>
        <section className='basis-2/4 px-4 sm:space-y-2'>             
          <ServiceDescription description={service.description}/>

          <UserLocationMap 
            location={{ lat: service.latitude, lng: service.longitude }} 
            zoom={15}
            mapDimensions={'w-[21rem] h-[16rem]'}
          />

        </section>
      </section>
    </>
  )
}

export default ServiceInformation


          {/* <MapPopup 
            coordinates={{ lat: service.latitude, lng: service.longitude }}
            onClose={() => { } }
            onCoordinatesChange={() => {}}
            mapDimensions={'w-[21rem] h-[16rem]'}
            isFloating={false}
          /> */}