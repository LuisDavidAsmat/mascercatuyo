import { Link, useLocation } from "react-router";
import LoginForm from "./components/LoginForm";

const Login = () => 
{
  const location = useLocation();
  const expired = new URLSearchParams(location.search).get("expired");


  return (
    <div className="h-svh flex flex-col justify-center items-center bg-white text-black rounded-lg ">
      {expired && (
        <p style={{ color: "red", fontWeight: "bold" }}>
          Your session has expired. Please log in again.
        </p>
      )}
      <section className="flex justify-between w-4/12">
        <Link
          to="/"
          className=""
        >
          <svg className='mt-1 h-7 w-7 fill-current text-white stroke-black stroke-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m15 6-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>    
        <h2 className="text-2xl font-bold  text-center">Inicia Sesión</h2>
        <p></p>
      </section>
        <p className="mt-6">Para mejorar tu experiencia en la plataforma</p>
      <LoginForm />
    </div>
    );
}

export default Login