import { FC } from 'react'
import UserLocationMap from './UserLocationMap';

interface MapPopupProps 
{
    coordinates: { lat: number; lng:number} | null;
    onClose?: () => void;
    onCoordinatesChange: (newLocation: { lat: number; lng: number }) => void;
    mapDimensions: string;
    isFloating: boolean;
}

const MapPopup: FC<MapPopupProps> = ({ coordinates, onClose, onCoordinatesChange, mapDimensions, isFloating }) => 
{
    let popupPosition = isFloating === true ? 'absolute' : '';
  return (
    <div className={`p-4 ${popupPosition} right-5 top-16 bg-white border rounded-xl dark:bg-neutral-600 dark:border-none dark:text-black`}>
        {popupPosition === 'absolute' ? (
            <>
                <button type='button' className=" py-1 w-full flex justify-end ">
                    <svg
                        className="h-5 w-5 stroke-black stroke-2 bg-transparent cursor-pointer fill-none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={onClose} 
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m14.5 9.5-5 5m0-5 5 5" strokeLinecap="round" />
                    </svg>
                </button>
                <h2 className="font-bold tracking-wide text-xl">Mi Ubicación</h2>
                <p>Tu ubicación para recibir sugerencias personalizadas</p>            
            </>            
        ) : ('')}

        <UserLocationMap 
            location={coordinates} 
            zoom={15}
            onMarkerDragEnd={onCoordinatesChange}
            mapDimensions={mapDimensions}
            isMarkerDraggable={true}
        />
    </div>
  )
}

export default MapPopup