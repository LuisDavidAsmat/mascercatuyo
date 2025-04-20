import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "../../stores/auth.store";

const AuthLayout = () => 
{
    const location = useLocation();
    const { isAuthenticated  } = useAuthStore();

    if (!isAuthenticated()){
        
        return <Navigate to={"/login"} state={{ from: location }} replace />;
    }

    return (<Outlet />)
}

export default AuthLayout