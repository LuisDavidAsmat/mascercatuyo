import axios from 'axios';
import { RequestedService } from '../components/pages/ServiceDetails/ServiceDetails';
import { LoginFormData, LoginResponse } from '../features/Login/types/LoginFormData';
import { MCTUserLoginInfo, MCTUserRole } from '../features/Auth/types/MCTUser';
import { MCTUserBasicInfo, useAuthStore } from '../stores/auth.store';

const API_KEY_IMG = import.meta.env.VITE_API_KEY_IMG;
const API_BASE_URL = import.meta.env.VITE_API_URL;

//export const loginUser = async (loginRequest: LoginFormData) => 
export const loginUser = async (loginRequest: LoginFormData): Promise<{
  token: string;
  refreshToken: string;
  userBasicInfo: MCTUserBasicInfo;
}> => 
{
  try 
  {
    
    const response = await axios.post<{
      token: string;
      refreshToken: string;
      userId: number;
      username: string;
      email: string;
      userRole: MCTUserRole;
    }>(
      `${API_BASE_URL}/v1/login`, 
      loginRequest,
      {
        headers: 
        {
          'Content-Type': 'application/json',
        },
      }
    );

    const userBasicInfo: MCTUserBasicInfo = 
    {
      userId: response.data.userId,
      username: response.data.username,
      email: response.data.email,
      userRole: response.data.userRole
    }

    // if (response.data.token) 
    // {
    //   axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    //   localStorage.setItem('token', response.data.token);
    // }

    //return response.data;
    return {
      token: response.data.token,
      refreshToken: response.data.refreshToken,
      userBasicInfo
      
    }
  } 
  catch (error) 
  {
    if (axios.isAxiosError(error)) 
    {
      
      if (error.response) 
      {
        switch (error.response.status) 
        {
          case 401:
            throw new Error('Credenciales inválidas');
          case 403:
            throw new Error('Cuenta no verificada');
          case 429:
            throw new Error('Demasiados intentos. Intente más tarde');
          default:
            throw new Error('Error en el servidor');
        }
      } 
      else if (error.request) {
        throw new Error('No se pudo conectar al servidor');
      }
    }
    throw new Error('Error desconocido al iniciar sesión');
  }
}



export const switchUserRole = async (newRole: string): Promise<LoginResponse> => 
{
  try 
  {
    const { token } = useAuthStore.getState();
    
    const response = await axios.post(
      `${API_BASE_URL}/v1/user/switch-role`, 
      null,
      {
        params: { newRole },
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data as LoginResponse;
  } 
  catch (error) 
  {
    console.error("Error en el registro:", error);
    throw new Error("No se pudo registrar el usuario");
  }
};


export const createServiceOffer = async (serviceData: any) => {
  try 
  {
    const { token } = useAuthStore.getState();

    const response = await axios.post(
      `${API_BASE_URL}/v1/services/offer`, 
      serviceData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
      
    );
    return response.data;
  } catch (error) {
    console.error("Error creating service request:", error);
    throw new Error("No se pudo crear la solicitud de servicio");
  }
};

export const createServiceRequest = async (serviceData: any) => {
  try 
  {
    const { token } = useAuthStore.getState();

    const response = await axios.post(
      `${API_BASE_URL}/v1/services/request`, 
      serviceData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating service request:", error);
    throw new Error("No se pudo crear la solicitud de servicio");
  }
};


export const registerUser = async (userData: any) => 
  {
    try 
    {
      const response = await axios.post(`${API_BASE_URL}/v1/register`, userData);
      return response.data;
    } 
    catch (error) 
    {
      console.error("Error en el registro:", error);
      throw new Error("No se pudo registrar el usuario");
    }
  };

export const uploadPhoto = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);

  try 
  {
    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${API_KEY_IMG}`, formData);
    return response.data.data.url;
  } 
  catch (error) 
  {
    console.error('Error uploading the image:', error);
    throw new Error('Error uploading the image');
  }
};

export const fetchAllServicesByCategoryAndProximity = async (
  category: string,
  userLat: number,
  userLng: number,
  radius: number
) => 

{
  try 
  {
    const { token } = useAuthStore.getState();

    const response = await axios.get<any[]>(
      `${API_BASE_URL}/v1/services/offer/all-nearby/${category}`,
      {
        params: {
          userLat,
          userLng,
          radius,
        },
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    ); 

    return response.data;
  } 
  catch (error) 
  {
    console.error('Error fetching services', error);
    throw new Error('Error fetching services');
  }
}














export const fetchAllServicesByCategory = async (category: string) => 
{
  try 
  {
    const response = await axios.get<any[]>(`${API_BASE_URL}/serviciosGeo/categoriaGeo/${category}`); 

    return response.data;
  } 
  catch (error) 
  {
    console.error('Error fetching services', error);
    throw new Error('Error fetching services');
  }
}



export const fetchServiceById = async (serviceId: number) => 
  {

    

    try 
    {
      const {token} = useAuthStore.getState();
      const response = await axios.get<any>(`${API_BASE_URL}/v1/services/offer/details/${serviceId}`, 
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      ); 
  
      return response.data;
    } 
    catch (error) 
    {
      console.error('Error fetching services', error);
      throw new Error('Error fetching services');
    }
  }
  
export const hireServiceRequest  = async (requestedService: RequestedService) => 
{
  try 
  {
    const response = await axios.post<RequestedService>(`${API_BASE_URL}/serviciosSolicitados`, requestedService); 

    return response.data;
  } 
  catch (error) 
  {
    console.error('Error hiring services', error);
    throw new Error('Error hiring services');
  }
}


export const fetchUserById = async (userId: number) => 
  {
    try 
    {
      const response = await axios.get<any>(`${API_BASE_URL}/usuarios/${userId}`); 
  
      return response.data;
    } 
    catch (error) 
    {
      console.error('Error fetching services', error);
      throw new Error('Error fetching services');
    }
  }


