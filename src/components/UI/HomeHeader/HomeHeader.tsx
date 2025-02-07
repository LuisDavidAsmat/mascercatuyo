
import Map from "../../CustomHooks/Map/Map";
import useGeoLocation from "../../CustomHooks/UseGeoLocation/useGeoLocation";
import Profile from "../HeaderUserSection/HeaderUserSection";

import { useState } from 'react';

function HomeHeader() {
    const [userLocation, setUserLocation] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showLocationPopup, setShowLocationPopup] = useState(true);

    const { location } = useGeoLocation();

    const getLocation = () => 
    {
        console.log('sdfsfsd');
        if (navigator.geolocation) {
            
            
            setIsLoading(true);
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
                        const data = await response.json();
                        const { city, state, country } = data.address;
                        setUserLocation(`${city}, ${state}, ${country}`);
                        setError('');
                    } catch (error) {
                        setError('Error al obtener la ubicación. Inténtalo de nuevo.');
                        setUserLocation('');
                    } finally {
                        setIsLoading(false);
                    }
                },
                (error) => {
                    setError(`Error al obtener la ubicación: ${error.message}`);
                    setUserLocation('');
                    setIsLoading(false);
                }
            );
        } else {
            setError('Geolocalización no disponible en este navegador.');
            setUserLocation('');
            setIsLoading(false);
        }
    };

    const handleLocationClick = () => {
        if (!userLocation && !isLoading) {
            getLocation();
        }
    };

    return (
        <div>
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
                    {isLoading ? (
                        <span className="font-semibold">Cargando ubicación...</span>
                    ) : error ? (
                        <span className="font-semibold text-red-500">{error}</span>
                    ) : userLocation ? (
                        <span className="font-semibold underline">{userLocation}</span>
                    ) : (
                        <span className="font-semibold underline cursor-pointer" onClick={handleLocationClick}>
                            Activar mi ubicación
                        </span>
                    )}

                    {showLocationPopup &&  userLocation && 
                    <div className="p-4 h-3/4 w-1/4 absolute right-5 top-16 bg-white border  rounded-xl">
                        <button type='button' className=" py-2 w-full flex justify-end ">
                            <svg
                                className="h-5 w-5 stroke-black stroke-2 bg-transparent cursor-pointer fill-none"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => setShowLocationPopup(false)} 
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="m14.5 9.5-5 5m0-5 5 5" strokeLinecap="round" />
                            </svg>
                        </button>
                        <h2 className="font-bold tracking-wide text-xl">Mi Ubicación</h2>
                        <p>Tu ubicación para recibir sugerencias personalizadas</p>
                        <Map location={location} zoom={15}/>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;

// import { useEffect, useState } from "react";
// function HomeHeader() {

//     const [location, setLocation] = useState('');


//     const getLocation = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 async (position) => {
//                     const { latitude, longitude } = position.coords;
//                     try {
//                         const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
//                         const data = await response.json();
//                         const { city, state, country } = data.address;
//                         setLocation(`${city}, ${state}, ${country}`);
//                     } catch (error) {
//                         setLocation(`Error al obtener la ubicación: ${(error as Error).message}`);
//                     }
//                 },
//                 (error) => {
//                     setLocation(`Error al obtener la ubicación: ${error.message}`);
//                 }
//             );
//         } else {
//             setLocation('Geolocalización no disponible en este navegador.');
//         }
//     };

//     useEffect(() => {
//         getLocation();
//     }, []);

//     return (
//         <div >
//             <div className="px-8 sm:px-14 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-center py-2 bg-white dark:bg-neutral-900 text-black dark:text-white">
//                 <section className="flex justify-between gap-10">
//                     <figure className="w-14">
//                         <img src="svg/logo.svg" alt="logo" className="w-full h-full" />
//                     </figure>
//                     <Profile />

//                 </section>

            
//                 <div className="flex justify-center sm:justify-start items-center">
//                     <svg className="h-4 w-4 fill-current text-orange-500 stroke-2 stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8Z" strokeLinecap="round" strokeLinejoin="round"/>
//                         <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                     first this
//                     <span className="font-semibold underline">Activar mi ubicación</span> if click here then activate location and 

//                     show this span
//                     <span className="font-semibold underline">{location}</span>
//                 </div>

                
//             </div>
//         </div>
        
//     )
// }

// export default HomeHeader;