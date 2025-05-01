import { Link, useNavigate } from 'react-router'
import ImgHolder from '../../../../../../components/ImgHolder'
import { useAuthStore } from '../../../../../../stores/auth.store'
import { useRef, useState } from 'react';
import { getRolesForPath } from '../../../../../../config/constants';
import ConfirmationModal from '../../../../../../components/ConfirmationModal';
import CTAButtons from './CTAButtons';


const CTA = () => 
{
  const { isAuthenticated, hasAnyRole } = useAuthStore();
  const modalRef = useRef<HTMLDialogElement>(null);
  const navigate = useNavigate();

  const [ modalVisible, setModalVisible] = useState(false);
  const [pendingPath, setPendingPath] = useState<string | null>(null);


  const handleAccess = async ( targetPath: string )=> 
  {
    const isAuth = await isAuthenticated();

    if(!isAuth)
    {
      
      navigate("/login");
      return;
    }
    
    const requiredRoles = getRolesForPath(targetPath);

    if(requiredRoles && !hasAnyRole(requiredRoles))
    {
      setPendingPath(targetPath);
      setModalVisible(true);

      return;
    }

    navigate(targetPath);
  }

  const handleConfirmRoleChange = () =>
  {
    setModalVisible(false);
    navigate('/cambiar-rol');
  };

  const handleCancel = () => 
  {
    setModalVisible(false);
    setPendingPath(null);
  };
  
  return (
    <div>
        <ImgHolder imgPath={"./img/hero-subtitle-img.png"} customClass='w-2/4 mx-auto mt-20'/>
        <CTAButtons handleAccess={handleAccess} />
        <ConfirmationModal
          show={modalVisible}
          onConfirm={handleConfirmRoleChange}
          onCancel={handleCancel}
          onClickXSvg={handleCancel}
          title="Acceso restringido"
          message="Tu rol actual no tiene acceso a esta funcionalidad. ¿Deseas cambiar tu rol?"
          acceptText="Cambiar rol"
          declineText="Cancelar"
        />
    </div>
  )
}

export default CTA












