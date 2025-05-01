import { useEffect, useState } from 'react';
import useInitialUserLocation from '../../../../../../hooks/UserInitialLocation/useInitialUserLocation';
import { useConsentStore } from '../../../../stores/useConsentStore';
import MapPopup from './MapPopup';
import useUserLocationDetails from './useUserLocationDetails';
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
    // Authentication and consent
    const { isAuthenticated } = useAuthStore.getState();
    const { hasConsent, setHasConsent } = useConsentStore();

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
            </div>
        )  
    };

    // Appeareance
    const [isPopupVisible, setPopupVisible] = useState(false);

    // Access coordinates from the store
    // To set coordinates in local storage
    const { getCoordinates: getStoredCoordinates, setCoordinates } = useCoordinatesStore();

    // User initial and possible location
    const { userInitialCoordinates: initialCoordinates } = useInitialUserLocation();

    useEffect(() => 
    {
        const storedCoordinates = getStoredCoordinates();

        if (storedCoordinates) {
            setUserCoordinates(storedCoordinates);
            if (onCoordinatesChange) {
                onCoordinatesChange(storedCoordinates);
            }
        } 
        else if(initialCoordinates && hasConsent)
        {   
            setUserCoordinates(initialCoordinates);

            if (onCoordinatesChange) {
                onCoordinatesChange(initialCoordinates); // Passes initial coordinates back to parent
            }

            setCoordinates(initialCoordinates.lat, initialCoordinates.lng); // store
            
        }
    }, [initialCoordinates])
    

    
    
    // User coordinates to pass to map popup
    const [userCoordinates, setUserCoordinates] = useState<{ lat: number; lng: number } | null>(null);   
    
    // Uses 'userCoordinates' state to get user info details
    const { locationInfo, isLoading, error, fetchLocationDetails } = useUserLocationDetails(userCoordinates, hasConsent)
    
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
        }
    };
            
    const handleCoordinatesChange = (newCoordinates: { lat: number; lng: number }) => 
    {
        setUserCoordinates(newCoordinates);
        
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