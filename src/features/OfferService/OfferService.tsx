import RequestHeader from '../RequestService/components/RequestHeader/RequestHeader';
import OfferFlow from './components/OfferFlow/OfferFlow';
import { useOfferStore } from './stores/useOfferStore';


const OfferService = () => 
{
  const { showOfferPreview } = useOfferStore();

  return(
    <main className={`px-4 sm:px-20 bg-white text-black dark:bg-neutral-800 dark:text-white ${showOfferPreview? 'h-screen overflow-hidden': ''} `}>
      <RequestHeader title='Publicar Prestación de Servicio'/>  
      <OfferFlow />
      
    </main>
  )
}

export default OfferService