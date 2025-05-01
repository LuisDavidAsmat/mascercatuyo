import { useEffect, useState } from "react"


const useInitialUserLocation  = () =>
{
    const [userInitialCoordinates, setUserInitialCoordinates] = useState<{ lat: number; lng: number} | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => 
    {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(
                (position) => 
                {
                    setUserInitialCoordinates(
                    {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => 
                {
                    setError(error.message);
                }
            );
        }
        else
        {
            setError('Error with geolocation.');
        }
    }, [])

    return { userInitialCoordinates, error }
}
export default useInitialUserLocation ;