import SelectField from '../../../../components/SelectField';
import Carousel from '../../../../components/Carousel';
import UserProfileInfo from '../../../../components/UserProfileInfo';
import { Controller, useForm } from 'react-hook-form';
import TextAreaField from '../../../../components/TextAreaField ';
import { ProviderOffer } from '../../types/OfferServiceTypes';
import { categories, estados, tiempos } from '../../../../config/constants';
import UserLocation from '../../../Home/components/Header/components/UserLocation/UserLocation';
import { useState } from 'react';
import useUserCoordinates from '../../../Home/components/Header/components/UserLocation/useUserCoordinates';
import { useConsentStore } from '../../../Home/stores/useConsentStore';

type OfferFormProps = 
{
  control: any;
  handleSubmit: any;
  onSubmit: (data: ProviderOffer) => void;
  errors: any;
};


const OfferForm = ({  
  control,
  handleSubmit,
  onSubmit,
  errors,
}: OfferFormProps ) => 
{
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);

  const handleCoordinatesChange = (newCoordinates: { lat: number; lng: number }) => {
    setCoordinates(newCoordinates);
  };

  const { hasConsent } = useConsentStore.getState();
  const { locationInfo } = useUserCoordinates(coordinates, hasConsent);  

  const handleFormSubmit = ( data : ProviderOffer ) => 
  {
    if (coordinates) {
      data.latitude = coordinates.lat;
      data.longitude = coordinates.lng;

      const locationDetails = locationInfo.split(',').map(detail => detail.trim());

      data.city = locationDetails[0] || 'Ciudad desconocida';
      data.state = locationDetails[1] || 'Estado desconocido';

   
    }
    onSubmit(data);
  }


  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='mt-6 sm:gap-8 '>
        <div className="w-full flex flex-col justify-center items-center">
          <SelectField 
            name={'category'}
            showLabel={false}
            control={control}
            defaultValue=''
            rules={{ required: 'Categoría es requerida' }}
            options={categories}
            firstOption='Selecciona la categoria'
            error={errors.category}
          />          
        </div>
          <section className='sm:flex gap-8 sm:px-48 mt-4 text-sm '>
            <section className='basis-2/4 flex flex-col justify-between space-y-4'>
              <Carousel/>
              <UserProfileInfo userName={'Pedro Perez'} rating={4} showContactButtons={false}/>
              <SelectField 
                name='status'
                showLabel={true}
                label='Estado'
                control={control}
                defaultValue=''
                rules={{ required: 'Estado es requerido' }}
                options={estados}
                firstOption='Disponible/Ocupado/Inactivo'
                error={errors.status}
              />
  
              <section className=''>
                <section className='flex items-center gap-2'>
                  <label htmlFor="costo">Valor</label>
                  <svg className="mt-1 h-4 w-4 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0 2.625 2.625 0 1 1 4.508 1.829c-.092.095-.18.183-.264.267-.216.215-.405.404-.571.617-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583.229-.294.516-.58.75-.814.07-.07.136-.135.193-.194A1.125 1.125 0 0 0 12 7.75ZM12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
                </section>
                <Controller 
                  name='cost'
                  control={control}
                  defaultValue={0}
                  rules={{ 
                    required: 'El costo del servicio es requerido', 
                    validate: (cost) => 
                    {
                      const numericValue = cost;
                     
                      if (isNaN(numericValue)) 
                      {
                        return 'El costo debe ser un número válido';
                      }
                      if (numericValue < 0) 
                      {
                        return 'El costo no puede ser negativo';
                      }
                      return true; 
                    }
                  }}
                  render={({ field }) => (
                    <input 
                      id="cost"
                      { ...field }
                      placeholder='$XXXX'
                      className='input input-bordered w-full input-sm bg-white dark:bg-neutral-700'
                    />                    
                  )}
                />
                {errors.cost && <p className='text-red-500 font-semibold'>{errors.cost.message}</p>}
              </section>
            </section>
  
            <section className='basis-2/4  sm:px-4 space-y-2'>
              <TextAreaField
                name='description'
                control={control}
                defaultValue=''
                rules={{ required: 'Descripción es requerida' }}
                label='Descripción del Servicio'
                error={errors.description}
              />
              <UserLocation mapDimensions={'w-[21rem] h-[16rem]'} isFloating={false} isPopup={false} onCoordinatesChange={handleCoordinatesChange}/>
              <SelectField 
                name='duration'
                showLabel={true}
                label='Tiempo Estimado'
                control={control}
                defaultValue=''
                rules={{ required: 'El tiempo estimado del servicio es requerido' }}
                options={tiempos}
                firstOption='Urgente/3 días de espera/1 semana de espera/Sin plazo de espera'
                error={errors.duration}
              />
            </section>
          </section>
  
          <button type='submit' 
          className='mt-8 p-2 flex items-center gap-2 mx-auto text-xs text-black 
          bg-orange-100 rounded-lg border border-emerald-950
          hover:bg-btn-hover active:bg-orange-400
          dark:text-white dark:bg-orange-400 dark:hover:bg-orange-500 dark:active:bg-orange-600         
          '>
            <svg className='h-4 w-4 fill-current stroke-1 dark:text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve"><path d="M12 7h1v2h2v2H3v2h12v2h-2v2h-1v2h3v-2h2v-2h2v-1h1v-1h1v-2h-1v-1h-1V9h-2V7h-2V5h-3z"/></svg>
            <span className='uppercase'>Siguiente</span>
          </button>
  
          <div className="flex justify-center">
            <a href="" className='mt-8 mb-6 p-2 inline-flex justify-center items-center gap-1 uppercase text-center text-xs
            bg-stone-300 rounded-lg border border-emerald-950 hover:bg-stone-400 active:bg-stone-500
            dark:text-white dark:bg-red-400 dark:hover:bg-red-500 dark:active:bg-red-600
            '>
              <svg className='h-4 w-4 fill-current stroke-black text-transparent dark:stroke-white' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3 5.5 2-2m16 2-2-2m-7 5v4l2 2m6-2a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}/></svg>  
              <span>continuar después</span>
            </a>
          </div>
      </form>
    </>
  )
}

export default OfferForm;