import { useEffect, useState } from "react";

import Profile from "../HeaderUserSection/HeaderUserSection";

function HomeHeader() {

    const [location, setLocation] = useState('');


    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
                        const data = await response.json();
                        const { city, state, country } = data.address;
                        setLocation(`${city}, ${state}, ${country}`);
                    } catch (error) {
                        setLocation(`Error al obtener la ubicación: ${(error as Error).message}`);
                    }
                },
                (error) => {
                    setLocation(`Error al obtener la ubicación: ${error.message}`);
                }
            );
        } else {
            setLocation('Geolocalización no disponible en este navegador.');
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <div >
            <div className="px-8 sm:px-14 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center py-2 bg-white dark:bg-neutral-900 text-black dark:text-white">
                <section className="flex justify-between gap-10">
                    <figure className="w-14">
                        <img src="svg/logo.svg" alt="logo" className="w-full h-full" />
                    </figure>
                    <Profile />

                </section>

            
                <div className="flex justify-center sm:justify-start items-center">
                    <svg className="h-4 w-4 fill-current text-orange-500 stroke-2 stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8Z" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-semibold underline">{location}</span>
                </div>

                
            </div>
        </div>
        
    )
}

export default HomeHeader;