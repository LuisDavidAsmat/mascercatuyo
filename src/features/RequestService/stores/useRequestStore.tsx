
import { createServiceRequest } from '../../../services/api.service';
import { ClientRequestService } from '../types/RequestServiceTypes'
import { create } from 'zustand';

interface RequestState 
{
    formData: ClientRequestService | null;
    setFormData: (data: ClientRequestService) => void;

    showConfirmationModal: boolean;
    setShowConfirmationModal: (show: boolean) => void;

    showSuccessModal: boolean;
    setShowSuccessModal: (show: boolean) => void;

    handleConfirmation: (confirmed: boolean) => Promise<void>;
}

export const useRequestStore = create<RequestState>((set, get) => (
{
    formData: null,
    setFormData: (data) => set({ formData: data }),

    showConfirmationModal: false,
    setShowConfirmationModal: (show) => set({ showConfirmationModal: show }),

    showSuccessModal: false,
    setShowSuccessModal: (show) => set({ showSuccessModal: show }),

    handleConfirmation: async (confirmed) => 
    {
        const { formData, setShowConfirmationModal, setShowSuccessModal } = get();
        
        if (!confirmed || !formData) return;
        
        try 
        {
            console.log(formData);
            
            // const clientId = localStorage.getItem("userId");
            
            // if (clientId !== null) {
            //     formData.solicitanteId = parseInt(clientId);
            // } else {
            //     return;
            // }
            // console.log('y sc');

            const response = await createServiceRequest(formData);
            console.log("Registro exitoso:", response);

            setShowConfirmationModal(false);
            setShowSuccessModal(true);


            setTimeout(() => {
                window.location.href = `/servicios/${formData.categoria}`;
              
            }, 2000);    
        } 
        catch (error) 
        {
            console.error("Error en el registro:", error);
            alert("Hubo un error al enviar la solicitud");
        }
    },

}));

export default useRequestStore