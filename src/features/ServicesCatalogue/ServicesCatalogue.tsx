import React from 'react'
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { categories } from '../../config/constants';
import { fetchAllServicesByCategoryAndProximity } from '../../services/api.service';
import { useCoordinatesStore } from '../../stores/useCoordinatesStore';
import ServiceCard from './components/ServiceCard';
import CategoryHeader from './components/CategoryHeader';
import ShowMoreButton from './components/ShowMoreButton';


const ServicesCatalogue = () => 
{
    const { category } = useParams();
    const [services, setServices] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [visibleCount, setVisibleCount] = useState(8);
    const { userLat, userLng } = useCoordinatesStore();

    const categoryLabel = categories.find(cat => cat.value === category)?.label || ''; 

    const handleShowMore = () => 
    {
        setVisibleCount((prevCount) => prevCount + 8);
    }

    useEffect(() => {
        const fetchServices = async () => {
            setIsLoading(true);
    
            if (!category) {
                console.error('Category is undefined');
                return;
            }
    
            try 
            {
                let fetchedservices = [];
            
                if( userLat !== null && userLng !== null)
                {   console.log('missing');
                
                    fetchedservices = await fetchAllServicesByCategoryAndProximity(category, userLat, userLng, 100);   
                }

                setServices(fetchedservices);
            } 
            catch(error)
            {
                console.error('Error fetching services:', error);
                setServices([]);
            }
            finally 
            {
                setIsLoading(false); 
            }
        };

        fetchServices();
        
    }, [category, userLat, userLng]); 

    if (isLoading)
    {
        return <p>Loading results...</p>
    }

    return (
        
        <main className="h-svh px-4 sm:px-48 bg-white dark:bg-neutral-900">
            <CategoryHeader categoryLabel={categoryLabel} resultsCounter={services.length}/>  
            <ul className="mt-4 pt-14 pb-28 sm:px-10 grid grid-cols-2 sm:grid-cols-4 gap-y-2 ">
                {services.length > 0 ?
                    (services.slice(0, visibleCount).map((service, index) => (
                        <li key={index}>
                            <ServiceCard service={service} currentCategory={category} />
                        </li>
                    ))) : (
                        <p className="w-96 mx-auto text-center text-black">Aún no hay servicios ofrecidos para esta categoría.</p>
                    )}
                {services.length > visibleCount && ( <ShowMoreButton onClick={handleShowMore} /> )}               
            </ul>
        </main>
    )
}

export default ServicesCatalogue