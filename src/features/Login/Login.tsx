import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { LoginFormData } from './types/LoginFormData';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from './types/LoginSchema';
import { loginUser } from '../../services/api.service';
import Input from '../../components/Input';
import { useAuthStore } from '../../stores/auth.store';



const Login = () => 
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


      switch(userBasicInfo.userRole) {
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
      setError('root', {
        type: 'manual',
        message: 'Credenciales inválidas. Por favor, inténtelo de nuevo.'
      });
    }
  }

  return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {errors.root && (
          <div className="alert alert-error">
            <span>{errors.root.message}</span>
          </div>
        )}

        <Input
          label="Email"
          type="email"
          placeholder="tu@email.com"
          {...register('email')}
          error={errors.email?.message}
        />

        <Input
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          {...register('password')}
          error={errors.password?.message}
        />

        <div className="flex items-center justify-between">
          <a href="/forgot-password" className="text-sm text-primary hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full mt-4"
        >
          {isSubmitting ? 'Iniciando...' : 'Iniciar Sesión'}
        </button>

        <div className="text-center mt-4">
          <span className="text-sm">
            ¿No tienes cuenta?{' '}
            <a href="/register" className="text-primary hover:underline">
              Regístrate
            </a>
          </span>
        </div>
      </form>
    </div>
    );
}

export default Login