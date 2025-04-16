import LoginForm from "./components/LoginForm";

const Login = () => 
{
  return (
    <div className="h-svh flex flex-col justify-center items-center bg-white text-black rounded-lg ">
      <h2 className="text-3xl font-bold  text-center">Iniciar Sesión</h2>
      <LoginForm />
    </div>
    );
}

export default Login