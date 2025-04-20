import { useForm } from "react-hook-form";
import { LoginFormData } from "../types/LoginFormData";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../types/LoginSchema";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../../stores/auth.store";

import Input from "../../../components/Input";
import { loginUser } from "../api/login.api";

type LoginFormProps = 
{
    onSuccess?: () => void;
    onError?: (error: string) => void;
};


export const LoginForm: React.FC = ({ onSuccess, onError }: LoginFormProps) => 
{
  const 
  {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError
  } = useForm<LoginFormData>(
  {
      resolver: yupResolver(LoginSchema)
  });

  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth) 

  const onSubmit = async (data:LoginFormData) => 
  {
    try 
    {
      const { token, refreshToken, userBasicInfo } = await loginUser(data);

      setAuth(
      {
          token,
          refreshToken,
          userBasicInfo        
      });

      switch(userBasicInfo.userRole) 
      {
        case 'ROLE_CLIENT':
          navigate('/servicio-solicitar');
          break;
        case 'ROLE_PROVIDER':
          navigate('/servicio-ofrecer');
          break;
        case 'ROLE_ADMIN':
          navigate('/admin');
          break;
        default:
          navigate('/');
      }
    } 
    catch (error) 
    {
      const errorMessage = 'Credenciales inválidas. Por favor, inténtelo de nuevo.';
      if (onError) {
        onError(errorMessage);
      } 
      else 
      {
        // Default error behavior
        setError('root', {
        type: 'manual',
        message: errorMessage,
        });
      }
    }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[30rem] flex flex-col card p-10 ">
      {errors.root && (
        <div className="alert alert-error">
          <span>{errors.root.message}</span>
        </div>
      )}

      <Input
        label="Correo electrónico"
        type="email"
        placeholder="correoejemplo@gmail.com"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        label="Contraseña"
        type="password"
        placeholder="••••••••••"
        {...register('password')}
        error={errors.password?.message}
      />

      <div className="mt-2 flex items-center justify-end">
        <a href="/forgot-password" className=" text-sm text-gray-500 hover:underline">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn bg-buttons w-full mt-4 text-black uppercase text-sm hover:bg-btn-hover active:bg-orange-400"
      >
        {isSubmitting ? 'Iniciando...' : 'Iniciar Sesión'}
      </button>

      <div className="text-center mt-4">
        <span className="text-sm">
          ¿No tienes cuenta?{' '}
          <a href="/register" className="text-gray-500 hover:underline">
            Regístrate
          </a>
        </span>
      </div>
    </form>
  )
}

export default LoginForm