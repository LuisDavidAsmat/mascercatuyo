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
        const { formData } = get();
        console.log(formData);
        
        if(!confirmed || !formData) return;

        try 
        {
            const { userBasicInfo } = useAuthStore.getState();

            if(!userBasicInfo?.userId || !formData) return;

            formData.userId = userBasicInfo.userId;

            await createServiceOffer(formData);
        } 
        catch (error) 
        {
            console.error("Error en el registro:", error);
        }
    },
}));