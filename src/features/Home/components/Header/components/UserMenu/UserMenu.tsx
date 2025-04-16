import { useState } from "react";
import FloatingMenu from "../FloatingMenu/FloatingMenu";
import { useAuthStore } from "../../../../../../stores/auth.store";
import { useNavigate } from "react-router";
import { useConsentStore } from "../../../../stores/useConsentStore";


const UserMenu = () => 
{
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const { userBasicInfo, isAuthenticated, clearAuth } = useAuthStore();
    const { setHasConsent } = useConsentStore();
    const navigate = useNavigate(); 

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }

    const getMenuOptions = () => 
    {
        const baseOptions = [];

        if(isAuthenticated())
        {
            baseOptions.push(
                { 
                    text: 'Mi cuenta', 
                    link: `/account/${userBasicInfo?.username}`,
                    icon: <AccountIcon />,
                    onClick: () => navigate('/account')
                },
                { 
                    text: 'Cerrar sesión', 
                    link: '/',
                    icon: <LogoutIcon />,
                    onClick: () => {
                        clearAuth();
                        setHasConsent(false);
                        window.location.reload();
                    }
                }
            )
        }
        else 
        {
            baseOptions.push(
                { 
                    text: 'Iniciar sesión', 
                    link: '/login',
                    icon: <LoginIcon />,
                    onClick: () => navigate('/login')
                },
                { 
                    text: 'Registrarse', 
                    link: '/register',
                    icon: <RegisterIcon />,
                    onClick: () => navigate('/register')
                }
            );
        }
        return baseOptions;
    }


    return (
        <div className="relative py-2 rounded-md flex justify-between items-center gap-6 text-black dark:text-white group" >
            <div className="flex gap-2">
                <svg className="h-10 w-10 stroke-black stroke-1
                dark:stroke-white
                " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="9" r="3"/><circle cx="12" cy="12" r="10" /><path d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"strokeLinecap="round"/></svg>
                <div className="flex flex-col items-start text-sm" >
                    <h3 className="text-xs">¡Hola!</h3>
                    <p className="underline font-semibold">
                        {isAuthenticated()? userBasicInfo?.username : 'Invitado' }
                    </p>
                </div>                
            </div>
            <button id="btn-opciones-perfil" onClick={toggleMenu}>
                <svg className={`h-5 w-5 stroke-black stroke-2
                transform transition-transform duration-300 ${isMenuVisible ? '-rotate-180' : 'rotate-0'}
                dark:stroke-white
                `} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 9l-6 6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>      
            </button>    
            
            <FloatingMenu
                isVisible={isMenuVisible}
                options={getMenuOptions()}
                background="bg-[#FCE5DA]"
                onClose={() => setIsMenuVisible(false)}
            />                
        </div>
    )
}

export default UserMenu


const AccountIcon = () => (
    <svg className="w-5 h-5 dark:fill-neutral-200 " xmlns="http://www.w3.org/2000/svg"><path d="M9 10c.967 0 1.792-.342 2.475-1.025A3.372 3.372 0 0 0 12.5 6.5c0-.967-.342-1.792-1.025-2.475A3.372 3.372 0 0 0 9 3c-.967 0-1.792.342-2.475 1.025A3.372 3.372 0 0 0 5.5 6.5c0 .967.342 1.792 1.025 2.475A3.372 3.372 0 0 0 9 10Zm-7 8c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 0 16V2C0 1.45.196.98.588.587A1.926 1.926 0 0 1 2 0h14c.55 0 1.02.196 1.413.588C17.803.979 18 1.45 18 2v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 16 18H2Zm0-2h14v-1.15a10.08 10.08 0 0 0-3.137-2.088C11.67 12.255 10.383 12 9 12s-2.67.254-3.862.762A10.08 10.08 0 0 0 2 14.85V16Z"/></svg>
);

const LogoutIcon = () => (
    <svg className="w-5 h-5 dark:fill-neutral-200 " viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19 23h-8a1 1 0 1 1 0-2h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-8a1 1 0 1 1 0-2h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3Z" /><path fillRule="evenodd" clipRule="evenodd" d="M2.489 13.31a2 2 0 0 1 0-2.62l4.176-4.82c1.213-1.398 3.512-.54 3.512 1.31V9h6a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-6v1.82c0 1.85-2.3 2.708-3.512 1.31L2.49 13.31Zm2.079-1.965a1 1 0 0 0 0 1.31l3.609 4.164V14.5a1.5 1.5 0 0 1 1.5-1.5h6.5v-2h-6.5a1.5 1.5 0 0 1-1.5-1.5V7.18l-3.61 4.165Z" /></svg>
);

const LoginIcon = () => (
    <svg className="w-6 h-6 dark:fill-neutral-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 7H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z"/><path d="M0 0h24v24H0Z" fill="none"/></svg>
);

const RegisterIcon = () => (
    <svg className="w-5 h-5 dark:fill-neutral-300"  xmlns="http://www.w3.org/2000/svg"><path d="M13 20c-1.383 0-2.563-.488-3.537-1.462C8.488 17.562 8 16.383 8 15s.488-2.563 1.463-3.537C10.438 10.488 11.617 10 13 10s2.563.488 3.538 1.463C17.512 12.438 18 13.617 18 15s-.488 2.563-1.462 3.538C15.562 19.512 14.383 20 13 20Zm-5 0c-2.317-.583-4.23-1.913-5.737-3.988C.754 13.938 0 11.633 0 9.1V3l8-3 8 3v5.675a6.157 6.157 0 0 0-1.463-.5A7.313 7.313 0 0 0 13 8c-1.933 0-3.583.683-4.95 2.05C6.683 11.417 6 13.067 6 15c0 1.033.196 1.967.588 2.8a7.919 7.919 0 0 0 1.487 2.175c-.017 0-.03.004-.037.012-.009.009-.021.013-.038.013Zm5-5c.417 0 .77-.146 1.063-.438.291-.291.437-.645.437-1.062 0-.417-.146-.77-.438-1.063A1.446 1.446 0 0 0 13 12c-.417 0-.77.146-1.063.438A1.446 1.446 0 0 0 11.5 13.5c0 .417.146.77.438 1.063.291.291.645.437 1.062.437Zm0 3c.517 0 .992-.12 1.425-.363a2.993 2.993 0 0 0 1.05-.962 4.892 4.892 0 0 0-1.175-.5A4.798 4.798 0 0 0 13 16c-.45 0-.883.058-1.3.175a4.892 4.892 0 0 0-1.175.5c.267.4.617.72 1.05.962.433.242.908.363 1.425.363Z"/></svg>
);