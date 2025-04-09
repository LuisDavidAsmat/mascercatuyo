import React from 'react'
import { useOfferStore } from '../../stores/useOfferStore';
import { useOfferForm } from '../../hooks/useOfferForm';
import OfferForm from '../OfferForm/OfferForm';
import ConfirmationModal from '../../../../components/ConfirmationModal';
import FinalOfferModal from '../modals/FinalOfferModal';
import SuccessModal from '../../../../components/SuccessModal';


const OfferFlow = () => 
{
    const { control, handleSubmit, reset, reload, onSubmit, errors } = useOfferForm();

    const {
        showEditReviewModal,
        setShowEditReviewModal,
        showOfferPreview,
        setShowOfferPreview,
        showConfirmationModal,
        setShowConfirmationModal,
        showSuccessModal,
        setShowSuccessModal,
        formData,
        handleConfirmation,
    } = useOfferStore();


    console.log(showOfferPreview);
    
    return (
        <>
            <OfferForm
               control={control}
               handleSubmit={handleSubmit}
               onSubmit={onSubmit}
               errors={errors}
            />

            <ConfirmationModal
                show={showEditReviewModal}
                onConfirm={() => {
                    setShowEditReviewModal(false);
                    setShowOfferPreview(true);
                }}
                onCancel={() => {
                    handleConfirmation(true);
                    setShowEditReviewModal(false);
                    setShowOfferPreview(false);
                    setShowSuccessModal(true);
                    reset();
                    reload();
               
                }}
                onClickXSvg={() => setShowEditReviewModal(false)}
                title="Revisar oferta"
                message="¿Deseas revisar tu oferta antes de publicar?"
                acceptText="Sí, revisar"
                declineText="No, publicar"
            />

            <FinalOfferModal
                show={showOfferPreview}
                formData={formData}
                setShowConfirmationModal={setShowConfirmationModal}
                setShowOfferPreview={setShowOfferPreview}
            />

            <ConfirmationModal
                show={showConfirmationModal}
                onConfirm={() => {
                    handleConfirmation(true);
                    setShowConfirmationModal(false);
                    setShowOfferPreview(false);
                    setShowSuccessModal(true);
                    reset();
                    reload()
                }}
                onClickXSvg={() => setShowConfirmationModal(false)}
                onCancel={() => setShowConfirmationModal(false)}
                title="Confirmar Publicación"
                message="¿Estás seguro de que deseas publicar esta oferta?"
                acceptText="Sí, publicar"
                declineText="No, cancelar"
            />

            {showSuccessModal && (
                <SuccessModal
                    isOpen={showSuccessModal}
                    onClose={() => setShowSuccessModal(false)}
                    message="Se ha publicado con éxito"
                />
            )} 
        </>
    );
}

export default OfferFlow