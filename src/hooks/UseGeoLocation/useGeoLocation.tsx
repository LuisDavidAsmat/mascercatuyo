import { useEffect, useState } from "react"


const useGeoLocation = () => 
{
    const [userCoordinates, setUserCoordinates] = useState<{ lat: number; lng: number} | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => 
    {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(
                (position) => 
                {
                    setUserCoordinates(
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

    return { userCoordinates, error }
}
export default useGeoLocation;