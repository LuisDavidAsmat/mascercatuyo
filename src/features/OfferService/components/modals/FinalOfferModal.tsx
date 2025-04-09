import { ProviderOffer } from '../../types/OfferServiceTypes';
import { categories } from '../../../../config/constants';
import ModalHeaderProps from '../OfferPreviewDetails/PreviewHeader';
import PreviewDetails from '../OfferPreviewDetails/PreviewBasicInfo';
import PreviewDescription from '../OfferPreviewDetails/PreviewDescription';
import ActionButtons from '../OfferPreviewDetails/ActionButtons';


interface FinalOfferModalProps 
{
    show: boolean,
    formData: ProviderOffer | null;
    setShowConfirmationModal: (value: boolean) => void;
    setShowOfferPreview: (value: boolean) => void;
}

const FinalOfferModal = ({ show, formData, setShowConfirmationModal, setShowOfferPreview }: FinalOfferModalProps) => 
{
    if (!show || !formData) return null;

  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50 overflow-y-auto">
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg h-screen w-full">
            <ModalHeaderProps 
                title='Prestación de Servicio'
                subtitle={categories.find((category) => category.value === formData.categoria)?.label || ""}
            />

            <div className="sm:flex sm:gap-8 sm:px-64 mt-4 text-sm">
                <PreviewDetails status={formData.estado} estimatedTime={formData.tiempoEstimado} cost={formData.costo}/>                
                <PreviewDescription description={formData.descripcion}/>                
            </div>

            <ActionButtons onEdit={() => setShowOfferPreview(false)} onPublish={() => setShowConfirmationModal(true)}/>
        </div>
    </div>
  )
}

export default FinalOfferModal