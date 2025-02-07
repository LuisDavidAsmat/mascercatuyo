/* eslint-disable @typescript-eslint/no-unused-vars */

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import '../../../App.css';
import { auth } from '../../../firebase/firebase';
import axios from 'axios';
import { Link, useNavigate } from 'react-router';

function Login() {

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  const validatePassword = (pwd: string) => 
  {
    const regex = /^(?=.*[A-Z])(?=.*[@._\-+!*]).{8,}$/;
    return regex.test(pwd);
  };

  const handleSubmit = async (e: React.FormEvent) => 
  {
    e.preventDefault();
    
    if (!validatePassword(password)) 
    {
      setError('La contraseña debe tener 8 carácteres como máximo, incluya una letra mayuscula y contenga @, ., _, or - symbols.');

      return;
    }
    
    try 
    {
      
      const response = await axios.post(`${API_BASE_URL}/login`,
      {
        correo: email,
        contrasena: password,
      });
      
      if(response.data.mensaje === 'Login exitoso')
      {
        const encodedEmail = encodeURIComponent(email);

        try
        {
          const userResponse = await axios.get<any>(`${API_BASE_URL}/usuarios/info/${encodedEmail}`); 

          const userId = userResponse.data.id
          const userEmail = userResponse.data.correo

          localStorage.clear();

          localStorage.setItem('userId', userId.toString()); 
          localStorage.setItem('userEmail', userEmail);                
          
        }
        catch(error)
        {
          console.error('Error fetching user information ', error)
        }

        navigate("/");
      }
      setError('');
    } 
    catch (error) 
    {
      if(axios.isAxiosError(error))
      {
        setError(error.response?.data.error || 'Error al intentar iniciar sesión');
      }
      else 
      {
        setError('Error al registrarse con el servidor.');
      }
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Handle successful Google sign-in
    } catch (error) {
      setError('Error al registrarse con Google.');
    }
  };

  return (
    <div className='bg-white pb-20'>
      <img src="/svg/logo.svg" alt="logo" className='pt-8 mx-auto'/>
      
      <div className="flex items-center justify-center gap-2">
        <h3 className="text-3xl font-bold text-center mt-5 text-black ">¡Bienvenido(a)!</h3>
        <img src="/img/ola.png" className="mt-4 w-8 h-8"></img>
      </div>
      <h3 className="mt-8 text-black font-medium text-3xl text-center tracking-wide">Inicia sesión</h3>
      <form className='flex flex-col mt-5 card p-10 sm:px-64 sm:space-y-4 text-black text-left' name="login" id="login">
        <label htmlFor="Email" className='place-items-start' >Correo Electrónico</label>
        <input type='email' id='Email' placeholder='Ingresa tu Correo' required 
        className='w-1/2 p-2 border border-gray-300 rounded mb-4 bg-white text-black' style={{ width: '100%' }} onChange={(e) => setEmail(e.target.value)} />
        
        <label htmlFor='Password'>Contraseña</label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id='Password'
            placeholder='Contraseña'
            required
            className='w-full w-1/2 p-2 border border-gray-300 text-black rounded mb-4 bg-white'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 "
          >
            {showPassword ? <img className="w-6 h-6" src="/img/visible.png" alt="Show" /> : <img className="w-6 h-6" src="/img/esconder.png" alt="Hide" />}
          </button>
        </div>

        <a href="#" className="text-right underline" >¿Olvidaste tu contraseña?</a>

        <button type="submit" className='mt-4 bg-orange-100 py-2 rounded-lg text-xl font-medium uppercase
        border border-emerald-950' onClick={handleSubmit}>Iniciar Sesión</button>
      </form>
      
      <section className='flex justify-around items-center px-72'>
        <hr className='mt-4 border w-2/6'/>
        <p className="w-2/5 text-xl text-center mt-5 text-black">O Inicia Sesión con</p>
        <hr className='mt-4 border w-2/6'/>
      </section>

      <form className="mt-5 p-6 w-2/4 mx-auto">
        {error && <p className="error">{error}</p>}
          <button
            type="button"
            className="py-4 px-12 border border-gray-400 rounded-lg"
            onClick={handleGoogleSignIn}
          >
            <img src="/img/google-logo.png" alt="google" className='w-8' />
          </button>
        
      </form>

      <p className='text-black'>¿No tienes cuenta?</p>
      <Link to={'/register'} className='block mt-8 w-36 mx-auto rounded-md p-2 text-black bg-orange-100 border border-emerald-950'>Crear Cuenta</Link>
    </div>
  );
}

export default Login;