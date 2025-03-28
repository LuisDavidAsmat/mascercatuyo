import { useEffect, useRef, useState } from "react";
import FloatingMenu from "../FloatingMenu/FloatingMenu";
import { fetchUserById } from "../../../../../../services/api.service";





type Props = {}

const UserMenu = (props: Props) => {
    const [nombre, setNombre] = useState('');
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    
    useEffect(() => 
    {
        const fetchUserData = async () => {
          const userId = localStorage.getItem("userId");
    
        if (!userId) 
        {
            setNombre('Invitado'); // Set to 'Invitado' if no userId
        } 
        else 
        {
            try 
            {
                let parseUserId = parseInt(userId);

                const response = await fetchUserById(parseUserId); 
                
                setNombre(response.nombreApellido); 
            } 
            catch (error) 
            {
              console.error('Error fetching user data:', error);
              setNombre('Invitado'); // Fallback to 'Invitado' if there's an error
            }
          }
        };
    
        fetchUserData(); // Call the async function
      }, []);

    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    }
    

    const opcionesMenu = [
        { text: 'Iniciar Sesión', link: '/login' },
        { text: 'Registrarse', link: '/register' }
        
    ];

    useEffect(() => 
        {
  
         const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsMenuVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef, buttonRef]);

 

    return (
        <div className=" py-2 rounded-md flex justify-between items-center gap-6 text-black dark:text-white" >
            <div className="flex gap-2">
                <svg className="h-10 w-10 stroke-black stroke-1
                dark:stroke-white
                " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="9" r="3"/><circle cx="12" cy="12" r="10" /><path d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"strokeLinecap="round"/></svg>
                <div className="flex flex-col items-start text-sm" >
                    <h3 className="text-xs">¡Hola!</h3>
                    <p className="underline font-semibold">{nombre}</p>
                </div>                
            </div>
            <button
                id="btn-opciones-perfil"
                onClick={toggleMenu}
                ref={buttonRef}
                >
                    <svg className="h-5 w-5 stroke-black stroke-1
                    dark:stroke-white
                    " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="m12 13.94 5.47-5.47 1.06 1.06L12 16.06 5.47 9.53l1.06-1.06L12 13.94Z"/></svg>
            </button>
            
            
            {isMenuVisible && (
                <div className="absolute">
                    <FloatingMenu
                        options={opcionesMenu}
                        background="bg-red-100"
                        onClose={() => setIsMenuVisible(false)}
                    />
                </div>
            )}
        </div>
    )
}

export default UserMenu