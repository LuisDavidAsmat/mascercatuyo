// import { create } from "zustand";
// import { ProviderOffer } from "../types/OfferServiceTypes";
// import { createServiceOffer } from "../../../services/api.service";

// interface OfferState {
//   formData: ProviderOffer | null;
//   setFormData: (data: ProviderOffer) => void;

//   showEditReviewModal: boolean;
//   setShowEditReviewModal: (show: boolean) => void;

//   showOfferPreview: boolean;
//   setShowOfferPreview: (show: boolean) => void;

//   showConfirmationModal: boolean;
//   setShowConfirmationModal: (show: boolean) => void;

//   showSuccessModal: boolean;
//   setShowSuccessModal: (show: boolean) => void;

//   handleConfirmation: (confirmed: boolean, resetForm?: () => void) => Promise<void>; // Add resetForm as an optional parameter
//   reset: () => void; // Zustand reset function
// }

// export const useOfferStore = create<OfferState>((set, get) => ({
//   formData: null,
//   setFormData: (data) => set({ formData: data }),

//   showEditReviewModal: false,
//   setShowEditReviewModal: (show) => set({ showEditReviewModal: show }),

//   showOfferPreview: false,
//   setShowOfferPreview: (show) => set({ showOfferPreview: show }),

//   showConfirmationModal: false,
//   setShowConfirmationModal: (show) => set({ showConfirmationModal: show }),

//   showSuccessModal: false,
//   setShowSuccessModal: (show) => set({ showSuccessModal: show }),

//   handleConfirmation: async (confirmed, resetForm) => {
//     const { formData, setShowOfferPreview, setShowSuccessModal, reset } = get();

//     if (!confirmed || !formData) return;

//     try {
//       const clientId = localStorage.getItem("userId");
//       if (!clientId || !formData) return;

//       formData.idUsuario = parseInt(clientId);
//       await createServiceOffer(formData);

//       // Reset Zustand state
//       reset();

//       // Reset React Hook Form (if resetForm is provided)
//       if (resetForm) {
//         resetForm();
//       }

//       // Show success modal
//       setShowSuccessModal(true);
//     } catch (error) {
//       console.error("Error en el registro:", error);
//     }
//   },

//   // Zustand reset function
//   reset: () => {
//     set({
//       formData: null,
//       showEditReviewModal: false,
//       showOfferPreview: false,
//       showConfirmationModal: false,
//       showSuccessModal: false,
//     });
//   },
// }));

import { create } from "zustand";
import { ProviderOffer } from "../types/OfferServiceTypes";
import { createServiceOffer } from "../../../services/api.service";
import { useAuthStore } from "../../../stores/auth.store";


interface OfferState 
{
    formData: ProviderOffer | null;
    setFormData: (data: ProviderOffer) => void;

    showEditReviewModal: boolean;
    setShowEditReviewModal: (show: boolean) => void;

    showOfferPreview: boolean;
    setShowOfferPreview: (show: boolean) => void;

    showConfirmationModal: boolean;
    setShowConfirmationModal: (show: boolean) => void;

    showSuccessModal: boolean;
    setShowSuccessModal: (show: boolean) => void;

    handleConfirmation: (confirmed: boolean) => Promise<void>;
    
}

export const useOfferStore = create<OfferState>((set, get) => (
{
    formData: null,
    setFormData: (data) => set({ formData: data }),

    showEditReviewModal: false,
    setShowEditReviewModal: (show) => set({ showEditReviewModal: show }),

    showOfferPreview: false,
    setShowOfferPreview: (show) => set({ showOfferPreview: show }),

    showConfirmationModal: false,
    setShowConfirmationModal: (show) => set({ showConfirmationModal: show }),

    showSuccessModal: false,
    setShowSuccessModal: (show) => set({ showSuccessModal: show }),

    handleConfirmation: async (confirmed) => 
    {
        const { formData, setShowOfferPreview, setShowSuccessModal } = get();
        console.log(formData);
        
        if(!confirmed || !formData) return;

        try 
        {
            // const { userBasicInfo } = useAuthStore.getState();

            // if(!userBasicInfo?.userId || !formData) return;

            // formData.idUsuario = userBasicInfo.userId;

            await createServiceOffer(formData);
            // const clientId = localStorage.getItem("userId");
            // if(!clientId || !formData) return;
            //formData.idUsuario = parseInt(clientId);
        } 
        catch (error) 
        {
            console.error("Error en el registro:", error);
        }
    },
}));