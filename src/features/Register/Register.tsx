import Input from '../../components/Input';
import UploadPhoto from '../../components/UploadPhoto';
import { Link } from 'react-router';
import { IoIosArrowBack } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../services/api.service';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterSchema } from './types/RegisterSchema';
import { RegisterFormData } from './types/RegisterFormData';


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
      console.log(
        data.name,
        data.surname,
         data.username,
         data.email,
        data.password,
        fechaISO,
        data.activeRole

      );

      const response = await registerUser(
      {
        name: data.name,
        surname: data.surname,
        username: data.username,
        email: data.email,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
        birthDate: fechaISO,
        activeRole: data.activeRole
      })

      console.log('Registro exitoso:', response);
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };
  
    // const handleImageUpload = (imageUrl: string) => {
    //   setValue('image_url', imageUrl);
    // };
  
    return (
      <div className="bg-white text-black  flex justify-center items-center dark:text-white">
        
        <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full max-w-md p-4 gap-2">
          <div className="flex justify-center items-center mb-4">
            <Link to={"/"}>
              <IoIosArrowBack className="font-semibold text-4xl" />
            
            </Link>
            
            <h1 className="text-center text-4xl font-semibold mb-4 flex-1">Crear Cuenta</h1>
          </div>
  
          {/* <UploadPhoto onImageUpload={handleImageUpload} /> */}
  
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

            <div className="role-selection">
                <label>
                    <input
                        type="radio"
                        {...register('activeRole')}
                        value="ROLE_CLIENT"
                    /> Cliente
                </label>
                <label>
                    <input
                        type="radio"
                        {...register('activeRole')}
                        value="ROLE_PROVIDER"
                    /> Proveedor
                </label>
                {errors.activeRole && (
                    <p className="error">{errors.activeRole.message}</p>
                )}
            </div>

            <button type="submit">Registrarse</button>
          {/* <DevTool control={control} /> */}
        </form>
      </div>
    );
}

export default Register