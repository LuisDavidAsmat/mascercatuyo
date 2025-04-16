import { useState } from "react";
import { switchUserRole } from "../../services/api.service"
import { useAuthStore } from "../../stores/auth.store"
import { MCTUserRole } from "../Auth/types/MCTUser";
import { useLocation, useNavigate } from "react-router";


const SwitchRole = () => 
{
  const [newRole, setNewRole] = useState<MCTUserRole>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { userBasicInfo, setAuth } = useAuthStore();
  
  const navigationState = location.state as 
  {
    from: Location,
    requiredRoles: MCTUserRole[]
  }

  const handleSubmit = async (e: React.FormEvent) => 
  {
    e.preventDefault();
    console.log(newRole);

    if (!newRole) {
      setError('Por favor selecciona un rol');
      return;
    }

    if (newRole === userBasicInfo?.userRole) {
      setError('Ya tienes este rol seleccionado');
      return;
    }
    
    try 
    {
      setIsLoading(true)
      setError(null);
      
      const response = await switchUserRole(newRole!);
      
      setAuth({
        token: response.token,
        refreshToken: response.refreshToken,
        userBasicInfo: {
          ...userBasicInfo!,
          userRole: newRole!
        }
      });
      
      if (navigationState?.from) 
      {
        // If coming from AuthLayout redirect
        navigate(navigationState.from.pathname, { replace: true });
      } 
      else if (navigationState?.requiredRoles) 
      {
        // If we have required roles, verify before redirecting
        if (navigationState.requiredRoles.includes(newRole)) 
        {
          navigate(navigationState.from.pathname, { replace: true });
        } 
        else 
        {
          // If the new role still doesn't have access, go to home
          navigate('/', { replace: true });
        }
      } 
      else {
        // Default fallback
        navigate('/', { replace: true });
      }
    } 
    catch (error) 
    {
      console.error('Error al cambiar rol:', error);
      setError('Error al cambiar el rol. Por favor intenta nuevamente.');
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="flex flex-col h-svh justify-center items-center text-black bg-white">
      <h1 className="my-4">
        Actualmente estas navegando como:{' '}
        {userBasicInfo?.userRole && (
            <span className="text-sm my-4">
              {userBasicInfo.userRole === 'ROLE_CLIENT' ? 'Cliente' : 'Proveedor'}
            </span>
          )}

      </h1>
      <form className="border border-2 rounded-md p-4 w-48 text-black" onSubmit={handleSubmit}>
        <fieldset className=" text-center" >
          <legend className="">Cambiar rol</legend>           
          
          {error && (
            <p className="text-red-500 text-xs mb-2">
              {error}
            </p>
          )}

         
          
          <select 
            className="mt-6 block w-full mx-auto select select-xs border border-2 border-gray-200
            bg-white dark:bg-white" 
            value={newRole}
            onChange={(e) => setNewRole(e.target.value as MCTUserRole)}
            disabled={isLoading}
          >
              <option value="">Selecciona un rol</option>
              <option value="ROLE_CLIENT">Cliente</option>
              <option value="ROLE_PROVIDER">Proveedor</option>
          </select>

          <button className="mt-16 border p-2" 
          type="submit"
          disabled={isLoading || !newRole}
          >
            {isLoading ? 'Cambiando...' : 'Cambiar rol'}
          </button>
        </fieldset>
      </form>
    </main>
  )
}

export default SwitchRole