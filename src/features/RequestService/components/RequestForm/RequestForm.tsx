import { ClientRequestService } from '../../types/RequestServiceTypes';
import SelectField from '../../../../components/SelectField';
import { categories, plazos } from '../../../../config/constants';
import Carousel from '../../../../components/Carousel';
import UserProfileInfo from '../../../../components/UserProfileInfo';
import TextAreaField from '../../../../components/TextAreaField ';
import ConfirmationModal from '../../../../components/ConfirmationModal';
import SuccessModal from '../../../../components/SuccessModal';
import useRequestStore from '../../stores/useRequestStore';
import UserLocation from '../../../Home/components/Header/components/UserLocation/UserLocation';
import InfoIcon from '../../../../components/InfoIcon';
import { useState } from 'react';

type Props = {
  control: any;
  handleSubmit: any;
  onSubmit: (data: ClientRequestService) => void;
  errors: any;
};

const RequestForm = ({
  control,
  handleSubmit,
  onSubmit,
  errors,
}: Props) => 
{
  const { showConfirmationModal, setShowConfirmationModal, showSuccessModal, setShowSuccessModal, handleConfirmation } = useRequestStore();

  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);

  const handleCoordinatesChange = (newCoordinates: { lat: number; lng: number }) => {
    setCoordinates(newCoordinates);
  };

  const handleFormSubmit = ( data : ClientRequestService ) => 
  {
    if (coordinates) {
      data.latitude = coordinates.lat;
      data.longitude = coordinates.lng;
    }
    onSubmit(data);
  }

  return (

    <>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='mt-6 gap-8 py-8'>
        <div className="w-full flex flex-col justify-center items-center">
          <SelectField
            name='category'
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
          
              <section className='basis-2/4 flex flex-col justify-between'>
              <section className='basis-3/4 '>
                  <Carousel/>
              </section>
              <section  className='basis-1/4'>
                  <UserProfileInfo userName={'Pedro Perez'} rating={4} showContactButtons={false}/>
              </section>
              </section>
    
              <section className='basis-2/4  px-4 space-y-2'>
                <TextAreaField
                    name='description'
                    control={control}
                    defaultValue=''
                    rules={{ required: 'Descripción es requerida' }}
                    label='Descripción del Servicio'
                    error={errors.description}
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                      <p className="text-lg sm:text-md">Ubicación</p>
                      <InfoIcon />
                  </div>
                  <UserLocation 
                    mapDimensions={'w-[21rem] h-[16rem]'} 
                    isFloating={false} 
                    isPopup={false}
                    onCoordinatesChange={handleCoordinatesChange}
                  />
                  
                </div>
                
                    
                <SelectField 
                    name='priority'
                    showLabel={true}
                    label='Estado'
                    control={control}
                    defaultValue=''
                    rules={{ required: 'Estado es requerido' }}
                    options={plazos}
                    firstOption='Urgente/3 días de espera/1 semana de espera/Sin plazo de espera'
                    error={errors.priority}
                />         
              </section>
  
          </section> 
  
          <button type='submit' 
          className='mt-8 p-2 flex items-center gap-6 mx-auto text-xs text-black 
          bg-buttons rounded-lg border border-emerald-950 
          hover:bg-btn-hover active:bg-orange-400
          text-sm sm:text-xs
          dark:text-white dark:bg-orange-400 dark:hover:bg-orange-500 dark:active:bg-orange-600          
          '>
            <svg className='h-3 w-3 fill-current text-emerald-950 dark:text-white' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" ><path d="m14.83 9.5-2.14-3.12a.82.82 0 0 0-1.38 0L9.17 9.5a1 1 0 0 0 .69 1.5H11v10a1 1 0 0 0 2 0V11h1.14a1 1 0 0 0 .69-1.5Z"/><path d="M20 8a1 1 0 0 1-1-1V4H5v3a1 1 0 0 1-2 0V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1Z" /></svg>
            <span className='uppercase'>publicar y buscar</span>
            <svg className=" w-3 h-3 text-emerald-950 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
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
          
      {
        showConfirmationModal && (
          <ConfirmationModal 
          show={showConfirmationModal} 
          onConfirm={() => handleConfirmation(true)} 
          onCancel={() => setShowConfirmationModal(false)} 
          onClickXSvg={() => setShowConfirmationModal(false)}
          title={'Publicar tu solicitud'} 
          message={'¿Estás seguro(a)?'} 
          acceptText={'Sí, Enviar'} 
          declineText={'Cancelar'} 
          />
        )
      }
          
      {
        showSuccessModal && <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)}
        message='Se ha publicado con éxito. A continuación se presentan resultados de tu busqueda'
        />
      }
    </>
  )
}

export default RequestForm