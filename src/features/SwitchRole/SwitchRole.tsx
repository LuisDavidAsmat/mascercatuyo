import { useState } from "react";
import { switchUserRole } from "../../services/api.service"
import { useAuthStore } from "../../stores/auth.store"
import { useLocation, useNavigate } from "react-router";
import { MCTUserRole } from "../../types/UserTypes";


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
      setError('Por favor selecciona un rol.');
      return;
    }

    if (newRole === userBasicInfo?.userRole) {
      setError('Ya cuentas con este rol.');
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
        // Default
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
    <main className="flex flex-col h-svh justify-center items-center space-y-6
    text-black bg-white inverse-gradient-background text-white 
    
    ">
      <h1 className="text-3xl font-bold">Cambiar Rol</h1>
      
      <form className="border border-2 rounded-md p-4 w-full max-w-xs text-black bg-white" onSubmit={handleSubmit}>
        <fieldset className=" text-center " >
          <legend className="sr-only">Cambiar rol</legend>     
          <h2 className="my-4">
            Actualmente estas navegando como:{' '}
            {userBasicInfo?.userRole && (
                <span className="text-sm my-4">
                  {userBasicInfo.userRole === 'ROLE_CLIENT' ? 'Cliente' : 'Proveedor'}
                </span>
              )}

          </h2>      
          
          {error && (
            <p className="text-red-500 text-sm mb-4">
              {error}
            </p>
          )}        
          
          <select 
            className=" block w-full mx-auto select select-sm border border-2 border-gray-200 focus:outline-none 
            bg-white dark:bg-white" 
            value={newRole}
            onChange={(e) => setNewRole(e.target.value as MCTUserRole)}
            disabled={isLoading}
          >
              <option value="">Selecciona el nuevo rol</option>
              <option value="ROLE_CLIENT">Cliente</option>
              <option value="ROLE_PROVIDER">Proveedor</option>
          </select>

          <a href="/" className="btn bg-stone-300 hover:bg-stone-400 rounded-lg border border-emerald-950 text-gray-700"  
          type="submit"
          
          >
            Regresar
          </a>
          <button className="ml-4 mt-16 p-2 border btn bg-buttons hover:bg-btn-hover focus:bg-orange-400 rounded-lg border border-emerald-950 text-gray-700"  
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