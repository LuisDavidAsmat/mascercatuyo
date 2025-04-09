import React from 'react';

interface LocationButtonProps
{
    isLoading: boolean;
    error: string;
    locationInfo: string;
    onClick: () => void;
}


const LocationButton: React.FC<LocationButtonProps> = ({ isLoading, error, locationInfo, onClick }) => 
{
  return (
    <div className="w-full flex justify-start sm:justify-start items-center">
            <svg className="h-4 w-4 fill-current text-orange-500 stroke-2 stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {isLoading ? (
                <span className="font-semibold">Cargando ubicación...</span>
            ) : error ? (
                <span className="font-semibold text-red-500">{error}</span>
            ) : locationInfo ? (
                <span className="font-semibold ">
                    <button type='button' onClick={onClick} className='underline'>
                        {locationInfo}
                    </button>
                </span>
            ) : (
                <span className="font-semibold underline cursor-pointer" onClick={onClick}>
                    Ingresa tu ubicación
                </span>
            )}
        </div>
  )
}

export default LocationButton