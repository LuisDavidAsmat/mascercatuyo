import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { ClientRequestService } from './types/RequestServiceTypes';
import RequestHeader from './components/RequestHeader/RequestHeader';
import RequestForm from './components/RequestForm/RequestForm';
import useRequestStore from './stores/useRequestStore';



const RequestService = () => 
  {
      const { control, handleSubmit, reset, formState: { errors } } = useForm<ClientRequestService>();
    
      const {
        setFormData,
        setShowConfirmationModal,
        showSuccessModal,
        setShowSuccessModal,
      } = useRequestStore();
    
      const onSubmit = (data: ClientRequestService) => 
      {     
        console.log(data);
        
        setFormData(data); 
        setShowConfirmationModal(true);
      };
    
      useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === "Escape") {
            setShowSuccessModal(false);
          }
        };
      
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, [showSuccessModal]);
    
      return (
        <main className="px-4 sm:px-20 bg-white text-black dark:bg-neutral-800 dark:text-white">
          <RequestHeader 
            title='¡Atención!'
            message={`Usuario necesita el siguiente servicio en su hogar`}
          />
          <RequestForm 
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            errors={errors}
          />
        </main>
      )
  }

export default RequestService