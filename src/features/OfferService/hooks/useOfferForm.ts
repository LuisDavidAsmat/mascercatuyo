import { useForm } from 'react-hook-form'
import { ProviderOffer } from '../types/OfferServiceTypes'
import { useOfferStore } from '../stores/useOfferStore'
import { useNavigate } from 'react-router'


export const useOfferForm = () => 
{
    const navigate = useNavigate();

    const reload = () => 
    {
        setTimeout(() => {
            window.location.reload();
          }, 2000);
    }

    const {
        setFormData,
        setShowEditReviewModal,
    } = useOfferStore();

    const {
        control,
        handleSubmit,
        reset,
        formState : { errors },
    } = useForm<ProviderOffer> ();

    const onSubmit =  (data: ProviderOffer) => 
    {

        setFormData(data);
        setShowEditReviewModal(true);
    }
    return {
        control,
        handleSubmit,
        reset,
        onSubmit,
        errors,
        reload
    }
}
