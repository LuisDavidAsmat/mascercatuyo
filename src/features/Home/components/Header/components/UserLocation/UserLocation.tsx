import { useEffect, useState } from 'react';
import useGeoLocation from '../../../../../../hooks/UseGeoLocation/useGeoLocation';
import { useConsentStore } from '../../../../stores/useConsentStore';
import MapPopup from './MapPopup';
import useUserCoordinates from './useUserCoordinates';
import LocationButton from './LocationButton';
import { useCoordinatesStore } from '../../../../../../stores/useCoordinatesStore';
import { useAuthStore } from '../../../../../../stores/auth.store';
import { Link } from 'react-router';

interface UserLocationProps 
{
    mapDimensions: string;
    isFloating: boolean;
    isPopup: boolean;
    onCoordinatesChange?: (coordinates: { lat: number; lng: number }) => void;
}

const UserLocation: React.FC<UserLocationProps> = ({ mapDimensions, isFloating, isPopup, onCoordinatesChange }) => 
{
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [userCoordinates, setUserCoordinates] = useState<{ lat: number; lng: number } | null>(null);
    const { isAuthenticated } = useAuthStore.getState();

    const { hasConsent, setHasConsent } = useConsentStore();
    const { userCoordinates: initialCoordinates } = useGeoLocation();

    const { locationInfo, isLoading, error, fetchLocationDetails } = useUserCoordinates(userCoordinates, hasConsent)

    const { setCoordinates } = useCoordinatesStore();

    if (!isAuthenticated()) 
    {
        return(
        <div className='flex gap-1 items-center'>
             <svg className="h-4 w-4 fill-current text-orange-500 stroke-2 stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-semibold underline cursor-pointer">
                <Link to="/login">
                    Ingresa tu ubicación
                </Link>
            </span>
        
        </div>)
        
    };

    useEffect(() => 
    {
        if(initialCoordinates)
        {   
            setUserCoordinates(initialCoordinates);
            if (onCoordinatesChange) {
                onCoordinatesChange(initialCoordinates); // Passes initial coordinates back to parent
            }
            console.log(initialCoordinates.lat, initialCoordinates.lng);
            setCoordinates(initialCoordinates.lat, initialCoordinates.lng); // store
            console.log(initialCoordinates.lat, initialCoordinates.lng);
        }

    }, [initialCoordinates])

    const handleLocationClick = () => 
    {
        setHasConsent(true);
        setPopupVisible(true);
        if (!locationInfo && !isLoading && userCoordinates) 
        {
            fetchLocationDetails(userCoordinates.lat, userCoordinates.lng)

            if (onCoordinatesChange) {
                onCoordinatesChange(userCoordinates); 
            }

            setCoordinates(userCoordinates.lat, userCoordinates.lng); // store
            console.log(userCoordinates.lat, userCoordinates.lng);
            
        }
    };

    const handleCoordinatesChange = (newCoordinates: { lat: number; lng: number }) => 
    {
        setUserCoordinates(newCoordinates);
        console.log("lat", newCoordinates.lat, "lng", newCoordinates.lng);
        if (onCoordinatesChange) {
            onCoordinatesChange(newCoordinates);
        }
        fetchLocationDetails(newCoordinates.lat, newCoordinates.lng);
        setCoordinates(newCoordinates.lat, newCoordinates.lng); // store
    }
    
    return (
        <div className="flex flex-col gap-1 justify-center sm:justify-start items-center">
            <LocationButton 
                isLoading={isLoading}
                error={error}
                locationInfo={locationInfo}
                onClick={handleLocationClick}
            />
    
            {(!isPopup || isPopupVisible) &&  locationInfo && 
                <MapPopup 
                    coordinates={userCoordinates} 
                    onClose={() => setPopupVisible(false)} 
                    onCoordinatesChange={handleCoordinatesChange}
                    mapDimensions={mapDimensions}
                    isFloating={isFloating}
                />

            }
        </div>
      )
    }
    
export default UserLocation