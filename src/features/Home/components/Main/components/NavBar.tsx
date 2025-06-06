import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import ThemeSelect from '../../../../../components/ThemeSelect';


interface ButtonNav {
    label: string;
    icon?: React.ReactNode;
    extraIcon?: React.ReactNode;
    dropdown?: React.ReactNode;
    onClick?: () => void;
  }

function NavBar() 
{
  const [dropdownVisibility, setDropdownVisibility] = useState<{ [key: string]: boolean }>({
    // Categorias: false,
    // "Quiénes somos": false,
    Soporte: false,
  });
  
  const toggleDropdown = (label: string) => {
    setDropdownVisibility((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };
    
  const navigate = useNavigate();
    
  const buttons: ButtonNav[] = [
    {
      label: "Categorias",
      icon: (
        <svg
          className="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 460.054 460.054"
          xmlSpace="preserve"
        >
          <path d="M40.003 69.679C17.914 69.679 0 87.592 0 109.697c0 22.089 17.914 39.987 40.003 39.987s40.003-17.898 40.003-39.987c0-22.105-17.914-40.018-40.003-40.018zM40.003 190.032C17.914 190.032 0 207.93 0 230.035c0 22.089 17.914 40.002 40.003 40.002s40.003-17.913 40.003-40.002c0-22.105-17.914-40.003-40.003-40.003zM40.003 310.37C17.914 310.37 0 328.283 0 350.372c0 22.089 17.914 40.003 40.003 40.003s40.003-17.914 40.003-40.003-17.914-40.002-40.003-40.002zM429.973 79.601H145.419c-16.611 0-30.081 13.47-30.081 30.096 0 16.612 13.469 30.081 30.081 30.081h284.554c16.61 0 30.081-13.469 30.081-30.081 0-16.626-13.471-30.096-30.081-30.096zM429.973 199.939H145.419c-16.611 0-30.081 13.469-30.081 30.096 0 16.612 13.469 30.081 30.081 30.081h284.554c16.61 0 30.081-13.469 30.081-30.081 0-16.627-13.471-30.096-30.081-30.096zM429.973 320.291H145.419c-16.611 0-30.081 13.469-30.081 30.081 0 16.611 13.469 30.08 30.081 30.08h284.554c16.61 0 30.081-13.469 30.081-30.08 0-16.613-13.471-30.081-30.081-30.081z"/>
        </svg>
      ),
      onClick: () => {navigate("/categorias")}
      // dropdown: (
      //   <div className="absolute top-12 sm:left-0 left-[-7rem] gradient-background-navbar text-black p-4 rounded shadow-lg">
      //     <ul className="w-72 sm:w-[40rem] flex gap-4 flex-wrap text-xs">
      //       {categories.map((category, index) => (
      //         <li className="py-2 bg-orange-100 p-2 rounded-lg border-2 border-white" key={index} >
      //           <Link to={`/servicios/${category.value}`}>{category.label}</Link>
      //         </li>
      //       ))}
      //     </ul>
      //   </div>
      // ),
    },
    {
      label: "Quiénes somos",
      icon: (
        <svg  className="-mt-1 h-6 w-6 fill-current " viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.2793 23.6389C5.44596 23.6389 4.73763 23.3472 4.1543 22.7639C3.57096 22.1806 3.2793 21.4722 3.2793 20.6389C3.2793 19.8056 3.57096 19.0972 4.1543 18.5139C4.73763 17.9306 5.44596 17.6389 6.2793 17.6389C6.51263 17.6389 6.7293 17.6639 6.9293 17.7139C7.1293 17.7639 7.32096 17.8306 7.5043 17.9139L8.9293 16.1389C8.46263 15.6222 8.13763 15.0389 7.9543 14.3889C7.77096 13.7389 7.7293 13.0889 7.8293 12.4389L5.8043 11.7639C5.52096 12.1806 5.16263 12.5139 4.7293 12.7639C4.29596 13.0139 3.81263 13.1389 3.2793 13.1389C2.44596 13.1389 1.73763 12.8472 1.1543 12.2639C0.570964 11.6806 0.279297 10.9722 0.279297 10.1389C0.279297 9.30558 0.570964 8.59725 1.1543 8.01392C1.73763 7.43058 2.44596 7.13892 3.2793 7.13892C4.11263 7.13892 4.82096 7.43058 5.4043 8.01392C5.98763 8.59725 6.2793 9.30558 6.2793 10.1389V10.3389L8.3043 11.0389C8.63763 10.4389 9.08346 9.93058 9.6418 9.51392C10.2001 9.09725 10.8293 8.83058 11.5293 8.71392V6.53892C10.8793 6.35558 10.3418 6.00142 9.9168 5.47642C9.4918 4.95142 9.2793 4.33892 9.2793 3.63892C9.2793 2.80558 9.57096 2.09725 10.1543 1.51392C10.7376 0.930583 11.446 0.638916 12.2793 0.638916C13.1126 0.638916 13.821 0.930583 14.4043 1.51392C14.9876 2.09725 15.2793 2.80558 15.2793 3.63892C15.2793 4.33892 15.0626 4.95142 14.6293 5.47642C14.196 6.00142 13.6626 6.35558 13.0293 6.53892V8.71392C13.7293 8.83058 14.3585 9.09725 14.9168 9.51392C15.4751 9.93058 15.921 10.4389 16.2543 11.0389L18.2793 10.3389V10.1389C18.2793 9.30558 18.571 8.59725 19.1543 8.01392C19.7376 7.43058 20.446 7.13892 21.2793 7.13892C22.1126 7.13892 22.821 7.43058 23.4043 8.01392C23.9876 8.59725 24.2793 9.30558 24.2793 10.1389C24.2793 10.9722 23.9876 11.6806 23.4043 12.2639C22.821 12.8472 22.1126 13.1389 21.2793 13.1389C20.746 13.1389 20.2585 13.0139 19.8168 12.7639C19.3751 12.5139 19.021 12.1806 18.7543 11.7639L16.7293 12.4389C16.8293 13.0889 16.7876 13.7347 16.6043 14.3764C16.421 15.0181 16.096 15.6056 15.6293 16.1389L17.0543 17.8889C17.2376 17.8056 17.4293 17.7431 17.6293 17.7014C17.8293 17.6597 18.046 17.6389 18.2793 17.6389C19.1126 17.6389 19.821 17.9306 20.4043 18.5139C20.9876 19.0972 21.2793 19.8056 21.2793 20.6389C21.2793 21.4722 20.9876 22.1806 20.4043 22.7639C19.821 23.3472 19.1126 23.6389 18.2793 23.6389C17.446 23.6389 16.7376 23.3472 16.1543 22.7639C15.571 22.1806 15.2793 21.4722 15.2793 20.6389C15.2793 20.3056 15.3335 19.9847 15.4418 19.6764C15.5501 19.3681 15.696 19.0889 15.8793 18.8389L14.4543 17.0639C13.771 17.4473 13.0418 17.6389 12.2668 17.6389C11.4918 17.6389 10.7626 17.4473 10.0793 17.0639L8.6793 18.8389C8.86263 19.0889 9.00846 19.3681 9.1168 19.6764C9.22513 19.9847 9.2793 20.3056 9.2793 20.6389C9.2793 21.4722 8.98763 22.1806 8.4043 22.7639C7.82096 23.3472 7.11263 23.6389 6.2793 23.6389ZM3.2793 11.1389C3.56263 11.1389 3.80013 11.0431 3.9918 10.8514C4.18346 10.6597 4.2793 10.4222 4.2793 10.1389C4.2793 9.85558 4.18346 9.61808 3.9918 9.42642C3.80013 9.23475 3.56263 9.13892 3.2793 9.13892C2.99596 9.13892 2.75846 9.23475 2.5668 9.42642C2.37513 9.61808 2.2793 9.85558 2.2793 10.1389C2.2793 10.4222 2.37513 10.6597 2.5668 10.8514C2.75846 11.0431 2.99596 11.1389 3.2793 11.1389ZM6.2793 21.6389C6.56263 21.6389 6.80013 21.5431 6.9918 21.3514C7.18346 21.1597 7.2793 20.9222 7.2793 20.6389C7.2793 20.3556 7.18346 20.1181 6.9918 19.9264C6.80013 19.7347 6.56263 19.6389 6.2793 19.6389C5.99596 19.6389 5.75846 19.7347 5.5668 19.9264C5.37513 20.1181 5.2793 20.3556 5.2793 20.6389C5.2793 20.9222 5.37513 21.1597 5.5668 21.3514C5.75846 21.5431 5.99596 21.6389 6.2793 21.6389ZM12.2793 4.63892C12.5626 4.63892 12.8001 4.54308 12.9918 4.35142C13.1835 4.15975 13.2793 3.92225 13.2793 3.63892C13.2793 3.35558 13.1835 3.11808 12.9918 2.92642C12.8001 2.73475 12.5626 2.63892 12.2793 2.63892C11.996 2.63892 11.7585 2.73475 11.5668 2.92642C11.3751 3.11808 11.2793 3.35558 11.2793 3.63892C11.2793 3.92225 11.3751 4.15975 11.5668 4.35142C11.7585 4.54308 11.996 4.63892 12.2793 4.63892ZM12.2793 15.6389C12.9793 15.6389 13.571 15.3973 14.0543 14.9139C14.5376 14.4306 14.7793 13.8389 14.7793 13.1389C14.7793 12.4389 14.5376 11.8472 14.0543 11.3639C13.571 10.8806 12.9793 10.6389 12.2793 10.6389C11.5793 10.6389 10.9876 10.8806 10.5043 11.3639C10.021 11.8472 9.7793 12.4389 9.7793 13.1389C9.7793 13.8389 10.021 14.4306 10.5043 14.9139C10.9876 15.3973 11.5793 15.6389 12.2793 15.6389ZM18.2793 21.6389C18.5626 21.6389 18.8001 21.5431 18.9918 21.3514C19.1835 21.1597 19.2793 20.9222 19.2793 20.6389C19.2793 20.3556 19.1835 20.1181 18.9918 19.9264C18.8001 19.7347 18.5626 19.6389 18.2793 19.6389C17.996 19.6389 17.7585 19.7347 17.5668 19.9264C17.3751 20.1181 17.2793 20.3556 17.2793 20.6389C17.2793 20.9222 17.3751 21.1597 17.5668 21.3514C17.7585 21.5431 17.996 21.6389 18.2793 21.6389ZM21.2793 11.1389C21.5626 11.1389 21.8001 11.0431 21.9918 10.8514C22.1835 10.6597 22.2793 10.4222 22.2793 10.1389C22.2793 9.85558 22.1835 9.61808 21.9918 9.42642C21.8001 9.23475 21.5626 9.13892 21.2793 9.13892C20.996 9.13892 20.7585 9.23475 20.5668 9.42642C20.3751 9.61808 20.2793 9.85558 20.2793 10.1389C20.2793 10.4222 20.3751 10.6597 20.5668 10.8514C20.7585 11.0431 20.996 11.1389 21.2793 11.1389Z"/>
        </svg>
        
      ),
         dropdown: (
           <div className="absolute w-80 sm:w-[30rem] top-12 z-50 sm:left-0 left-[-7rem] bg-white text-black p-4 rounded shadow-lg bg-gradient-to-b from-white via-orange-300 to-orange-600">
             <p>En Más Cerca Tuyo, creemos en el poder de la comunidad y la cercanía. Nacimos con la misión de conectar a quienes necesitan un servicio para su hogar con los trabajadores locales formales e informales que pueden ofrecerlo, de manera rápida, confiable y dentro de la misma localidad.
    Nuestra plataforma surge como respuesta a la dificultad de encontrar de manera rápida y accesible a profesionales confiables en el sector de servicios esenciales para el hogar y la necesidad de dar mayor visibilidad a trabajadores independientes. Más que una webapp, somos un espacio digital de encuentro, donde cada conexión impulsa la economía local y fortalece los lazos comunitarios.
    Si buscas un servicio o quieres ofrecer tu talento, estás en el lugar indicado. ¡Conectemos juntos! 🚀</p>
           </div>
         ),
    },
    {
      label: "Testimonios de la comunidad",
      icon: (
        <svg
          className="h-5 w-5 fill-current"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.78 13.639c.55 0 1.02-.196 1.412-.588.392-.391.587-.862.587-1.412 0-.55-.195-1.02-.587-1.413a1.926 1.926 0 0 0-1.413-.587c-.25 0-.487.046-.712.137-.225.092-.43.213-.613.363L8.78 8.789v-.3l2.675-1.35c.184.15.388.27.613.362.225.092.462.138.712.138.55 0 1.021-.196 1.413-.588.392-.391.587-.862.587-1.412 0-.55-.195-1.02-.587-1.413a1.926 1.926 0 0 0-1.413-.587c-.55 0-1.02.196-1.412.587a1.926 1.926 0 0 0-.588 1.413v.15l-2.675 1.35a2.377 2.377 0 0 0-.612-.363 1.87 1.87 0 0 0-.713-.137c-.55 0-1.02.196-1.412.587a1.926 1.926 0 0 0-.588 1.413c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588.25 0 .488-.046.713-.138.225-.091.429-.212.612-.362l2.675 1.35v.15c0 .55.196 1.02.588 1.412.391.392.862.588 1.412.588Zm-12.5 7v-18c0-.55.195-1.02.587-1.413A1.926 1.926 0 0 1 2.279.64h16c.55 0 1.021.196 1.413.587.392.392.587.863.587 1.413v12c0 .55-.195 1.02-.587 1.412a1.926 1.926 0 0 1-1.413.588h-14l-4 4Zm3.15-6h14.85v-12h-16v13.125l1.15-1.125Z" />
        </svg>
      ),
      onClick: () => 
      {
        const testimoniosSection = document.getElementById("testimonios");
        if (testimoniosSection) {
          testimoniosSection.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    {
      label: "Soporte",
      icon: (
        <svg className=" h-5 w-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0 2.625 2.625 0 1 1 4.508 1.829c-.092.095-.18.183-.264.267-.216.215-.405.404-.571.617-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583.229-.294.516-.58.75-.814.07-.07.136-.135.193-.194A1.125 1.125 0 0 0 12 7.75ZM12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        </svg>
      ),
      extraIcon: (
        <svg className="h-4 w-4 stroke-white stroke-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="m12 13.94 5.47-5.47 1.06 1.06L12 16.06 5.47 9.53l1.06-1.06L12 13.94Z" />
        </svg>
      ),
      dropdown: (
        <div className={` w-48 absolute left-0 top-10 flex flex-col flex-start z-50 gap-4 rounded-md shadow-lg p-4  bg-white border`}>
          <button type="button" className={`py-2 w-full rounded-md text-sm text-black flex flex-col gap-2`}  >
            <span className="bg-red-100 w-full py-2 px-3 rounded-lg">FAQs</span>
            <span className="bg-red-100 w-full py-2 px-3 rounded-lg">Ayuda</span>
            <span className="bg-red-100 w-full py-2 px-3 rounded-lg">Términos y condiciones</span> 
          </button>
      </div>
      ),
    },
  ];


  return (
    
    <div  className="py-4 flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-8 text-white font-monserrat-nav">
      <div className="flex flex-col items-center sm:items-start sm:flex-row gap-8">
      {buttons.map((button, index) => 
      (
        <div key={index} className="relative" >
          <button 
          type="button"  
          className="flex items-center justify-center gap-2 text-sm"
          onClick={() => 
          {
            if(button.onClick)
            {
              button.onClick();
            } else if (button.dropdown) 
            {
              toggleDropdown(button.label);
            }    
          }}
          >
            {button.icon}
            <span>{button.label}</span>
            {button.icon && button.extraIcon}
          </button>
          {button.dropdown && dropdownVisibility[button.label]  && button.dropdown}
        </div>
      ))}

      </div>
      
      <div className="">
        <ThemeSelect displayType='toggle'/>

      </div>
    </div>
  );
  
}

export default NavBar