import { useEffect, useState } from 'react';
import useGeoLocation from '../../../../../../hooks/UseGeoLocation/useGeoLocation';
import { useConsentStore } from '../../../../stores/useConsentStore';
import MapPopup from './MapPopup';
import useUserCoordinates from './useUserCoordinates';
import LocationButton from './LocationButton';
import { useCoordinatesStore } from '../../../../../../stores/useCoordinatesStore';

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

    const { hasConsent, setHasConsent } = useConsentStore();
    const { userCoordinates: initialCoordinates } = useGeoLocation();

    const { locationInfo, isLoading, error, fetchLocationDetails } = useUserCoordinates(userCoordinates, hasConsent)

    const { setCoordinates } = useCoordinatesStore();

    useEffect(() => 
    {
        if(initialCoordinates)
        {   
            setUserCoordinates(initialCoordinates);
            if (onCoordinatesChange) {
                onCoordinatesChange(initialCoordinates); // Pass initial coordinates back to parent
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