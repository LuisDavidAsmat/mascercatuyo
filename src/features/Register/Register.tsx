import Input from '../../components/Input';
import { Link } from 'react-router';
import { IoIosArrowBack } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from './types/RegisterSchema';
import { RegisterFormData, RegisterUserDto } from './types/RegisterTypes';
import { registerUser } from './api/register.api';


const Register = () => 
{
  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: yupResolver(RegisterSchema),
    defaultValues: 
    {
      activeRole: 'ROLE_CLIENT'
    }
  });

  const onSubmit = async (data: RegisterFormData) => 
  {
    try 
    {
      const fechaISO = new Date(data.birthDate).toISOString();

      const registerPayload: RegisterUserDto = 
      {
        name: data.name,
        surname: data.surname,
        username: data.username,
        email: data.email,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
        birthDate: fechaISO,
        activeRole: data.activeRole as 'ROLE_CLIENT' | 'ROLE_PROVIDER'
      }

      const response = await registerUser(registerPayload);
     
      console.log('Registro exitoso:', response);
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };
  
  return (
    <div className="h-svh text-black bg-white flex justify-center items-center
     dark:text-white">
      
      <form onSubmit={handleSubmit(onSubmit)} className=" form-control w-full max-w-2xl p-4 gap-2">
        <div className="my-2 flex justify-between items-center">
          <Link to="/">
            <IoIosArrowBack className="font-semibold text-lg" />
          </Link>
          
          <h1 className="text-center text-2xl font-semibold flex-1">Crear Cuenta</h1>
          <p></p>
        </div>

        <div className="flex justify-between gap-8">
          <div className="w-full">
            <Input
            label="Nombre"
            placeholder="Ingrese su nombre"
            type="text"
            {...register('name')}
            error={errors.name?.message}
            />

            <Input
              label="Apellido" 
              placeholder="Ingrese su apellido"
              type="text"
              {...register('surname')}
              error={errors.surname?.message}
            />

            <Input
              label="Nombre de usuario"
              placeholder="Cree un nombre de usuario"
              type="text"
              {...register('username')}
              error={errors.username?.message}
            />

            <Input
              label="Email"
              placeholder="ejemplo@correo.com" 
              type="email"
              {...register('email')}
              error={errors.email?.message}
            />

          </div>

          <div className="w-full">
            

            <Input
              label="Contraseña"
              placeholder="Mínimo 6 caracteres con números"
              type="password"
              {...register('password')}
              error={errors.password?.message}
            />

            <Input
              label="Confirmar contraseña" 
              placeholder="Repita su contraseña"
              type="password"
              {...register('passwordConfirmation')}
              error={errors.passwordConfirmation?.message}
            />

            <Input
              label="Fecha de nacimiento"
              type="date"
              {...register('birthDate')}
              error={errors.birthDate?.message}
            />
            <div className="role-selection mt-4">
              <span className="font-medium text-sm mb-2 block">Selecciona un rol:</span>

              <div className="flex gap-4">
                <label className="cursor-pointer w-full">
                  <input
                    type="radio"
                    {...register('activeRole')}
                    value="ROLE_CLIENT"
                    className="peer hidden"
                  />
                  <div className="w-full px-4 py-2 border rounded-lg text-center transition 
                  peer-checked:border-green-600   
                  peer-checked:bg-green-100 
                  peer-checked:text-green-800 
                  hover:border-green-400"
                  >
                    Cliente
                  </div>
                </label>

                <label className="cursor-pointer w-full">
                  <input
                    type="radio"
                    {...register('activeRole')}
                    value="ROLE_PROVIDER"
                    className="peer hidden"
                  />
                  <div className="w-full px-4 py-2 border rounded-lg text-center transition 
                  peer-checked:border-green-600   
                  peer-checked:bg-green-100 
                  peer-checked:text-green-800 
                  hover:border-green-400"
                  >
                    Proveedor
                  </div>
                </label>
              </div>
            </div>

          </div>
        </div>
        

        

          <button type="submit" className='my-6 text-black btn bg-buttons  hover:bg-orange-200 active:bg-orange-300'>Registrarse</button>
        
      </form>
      
    </div>
  );
}

export default Register