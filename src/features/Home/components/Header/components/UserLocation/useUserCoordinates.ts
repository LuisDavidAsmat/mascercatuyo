import { useCallback, useEffect, useState } from 'react';


const useUserCoordinates = (userCoordinates: { lat: number; lng: number } | null, hasConsent: boolean) => 
{
    const [locationInfo, setLocationInfo] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchLocationDetails = useCallback (async (lat: number, lng: number) => 
    {
        setIsLoading(true);

        try 
        {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);

            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            const address = data.address;

            let locationName = address.city || address.town || address.suburb || address.village || address.hamlet || "Unknown Location"; 
            const state = address.state || "Unknown State";
            const country = address.country || "Unknown Country";
    
            setLocationInfo(`${locationName}, ${state}, ${country}`);

            setError('');

        } 
        catch (error) 
        {
            setError('Error al obtener la ubicación. Inténtalo de nuevo.');
            setLocationInfo('');
        } 
        finally {
            setIsLoading(false);
        }
    }, []);

        useEffect(() => 
        {
            if(userCoordinates && !locationInfo && !isLoading && hasConsent) {
                fetchLocationDetails(userCoordinates.lat, userCoordinates.lng);
            }
        }, [userCoordinates, locationInfo, isLoading, hasConsent, fetchLocationDetails]);
    
    
    return { locationInfo, isLoading, error, fetchLocationDetails };
}
    
export default useUserCoordinates

