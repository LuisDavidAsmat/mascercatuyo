import React, { useEffect, useState } from 'react'
import ServiceHeader from './ServiceHeader'
import ServiceOfferOwner from './ServiceOfferOwner'
import ServiceStatus from './ServiceStatus'
import ServiceCost from './ServiceCost'
import ServiceDescription from './ServiceDescription'
import { fetchServiceById } from '../../api/servicedetails.api'

interface ServiceInformationProps
{
    serviceId: string;
}


interface Location {
    lat: number;
    lng: number;
  }
  

const ServiceInformation: React.FC<ServiceInformationProps> = ({ serviceId }) => 
{
    const [service, setService] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [userLocation, setUserLocation] = useState<Location>({ lat: 0, lng: 0 });


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

            // setUserLocation({ lat: service.latitude, lng: service.longitude });

            setService(service);        

            
            console.log("\n\n \n", service.id)
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


  return (
    <>
        <ServiceHeader category={service.category}/>
                  
        <section className='sm:flex sm:gap-8 sm:px-64 mt-4 text-sm '>
          <section className='basis-2/4 flex flex-col justify-between space-y-4'>
            <ServiceOfferOwner />
      
            <ServiceStatus status={service.status} duration={service.duration}/>
      
            <ServiceCost cost={service.cost}/>
          </section>
      
      
          <section className='basis-2/4 px-4 sm:space-y-2'>             
            <ServiceDescription description={service.description}/>
      
            {/* <LocationFormSection userLatitude={service.latitude} userLongitude={service.longitude} locationInfo={userLocation}/> */}
          </section>
        </section>
      
    </>
  )
}

export default ServiceInformation