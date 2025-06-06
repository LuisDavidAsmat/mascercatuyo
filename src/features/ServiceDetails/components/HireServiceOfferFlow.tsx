import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import ConfirmationModal from '../../../components/ConfirmationModal';
import SuccessModal from '../../../components/SuccessModal';
import { useAuthStore } from '../../../stores/auth.store';
import { hireServiceRequest } from '../api/servicedetails.api';


interface HireServiceOfferFlowProps
{
    serviceId: string;
}

export interface HireServiceRequestData 
{
  userId: number;
  serviceOfferId: number;
  hireStatus: string;
}

const HireServiceOfferFlow: React.FC<HireServiceOfferFlowProps> = ({ serviceId }) => 
{
  const navigate = useNavigate();
  const [confirmHireModal, setConfirmHireModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { userBasicInfo } = useAuthStore.getState();
    
  const handleConfirmation = (confirmed: boolean) => 
  {
    if(confirmed)
    {
      handleHire();
    }
    else 
    {
      handleCancel();
    }
  }

  const handleHire = async () =>
  {
    try 
    {
      const requestedService: HireServiceRequestData  = {
        userId: userBasicInfo?.userId!,
        serviceOfferId: parseInt(serviceId, 10), 
        hireStatus: "PENDING",
      };
      
      const response = await hireServiceRequest(requestedService);
      if (response.success) { 
        setShowSuccessModal(true);
        
      } else {
        console.error("Hire service request failed:", response.error);
        
      }
      setConfirmHireModal(false);
      
    } 
    catch (error) 
    {
      console.error('Failed to create hiring request:', error);
    }      
  }

  const handleCancel = () => {
    setConfirmHireModal(false)
  }
    
  return (
    <div className='pb-8'>
      <section className="mt-4 sm:mt-14 py-8 flex justify-center gap-8 ">
      {userBasicInfo?.userRole !== 'ROLE_PROVIDER' ? (
          <button type='submit' 
          className='py-2 px-4 flex justify-between items-center gap-2 bg-orange-100 rounded-lg border border-emerald-950'
          onClick={() => setConfirmHireModal(true)}
          >
            <svg className='h-4 w-4 fill-current stroke-black stroke-2 text-transparent' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 15.255a7.001 7.001 0 0 0-10.955 4.947c-.028.246-.042.37.007.49.04.097.128.194.22.245.113.063.251.063.528.063h5.145M14 19.286 15.8 21l4.2-4M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className='uppercase text-sm'>Contratar</span>
          </button>

          
      ) : ('')}
          <button type='button' className='py-2 px-3 flex justify-between items-center gap-2  bg-stone-300 rounded-lg border border-emerald-950 '
          onClick={() => navigate(-1)}
          >
            <svg className='h-3 w-3 fill-current stroke-black stroke-2 text-transparent' viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m3 21.32 18-18M3 3.32l18 18" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Regresar</span>
          </button>
      </section>
      

      {confirmHireModal && (          
        <ConfirmationModal
          show={confirmHireModal}
          onConfirm={() => {
            handleConfirmation(true); 
            setShowSuccessModal(true)
          }}
          onClickXSvg={() => handleConfirmation(false)}
          onCancel={() => handleConfirmation(false)}
          title="Contratar servicio" 
          message="¿Estás seguro(a)?"
          acceptText="Sí, Enviar"
          declineText="Cancelar"
        />
      )}
          
      {showSuccessModal && 
        <SuccessModal 
          isOpen={showSuccessModal} 
          onClose={() => {setShowSuccessModal(false); navigate("/");}} 
          message={'Se ha contratado el servicio con éxito'} 
        />      
      }
    </div>
  )
}

export default HireServiceOfferFlow