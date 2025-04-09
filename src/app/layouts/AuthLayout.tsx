import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "../../stores/auth.store";
import { MCTUserRole } from "../../features/Auth/types/MCTUser";
import { getRolesForPath } from "../../config/constants";

interface AuthLayoutProps 
{
    allowedRoles?: MCTUserRole[];
}

const AuthLayout = ({ allowedRoles }: AuthLayoutProps) => 
{
    const location = useLocation();
    const { isAuthenticated, hasAnyRole, userBasicInfo  } = useAuthStore();

    if (!isAuthenticated()){
        
        return <Navigate to={"/login"} state={{ from: location }} replace />;
    }

    const currentPath = location.pathname;        
    const pathRequiredRoles = allowedRoles || getRolesForPath(currentPath);

    if (pathRequiredRoles && !hasAnyRole(pathRequiredRoles) && isAuthenticated())
    {
        if (userBasicInfo?.userRole)
        {
            return <Navigate 
            to={"/cambiar-rol"} 
            state={
            {
                from: location,
                requiredRoles: pathRequiredRoles
            }}
            replace
            />
        }

        return <Navigate to="/login" replace />;
    }

    return (<Outlet />)
}

export default AuthLayout