import axios from 'axios';
import { LoginResponse } from '../features/Login/types/LoginFormData';
import { useAuthStore } from '../stores/auth.store';

const API_KEY_IMG = import.meta.env.VITE_API_KEY_IMG;
const API_BASE_URL = import.meta.env.VITE_API_URL;



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


export const fetchUserDetails = async (email: string | undefined) =>
{
  try 
  {
    const { token } = useAuthStore.getState();

    const response = await axios.get(
      `${API_BASE_URL}/v1/user/details`, 
     
      {
        params: { email, },
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }
    );
    return response.data;
  } catch (error) 
  {
    console.error("Error fetching user details:", error);

    // Provide a more specific error message
    if (axios.isAxiosError(error)) 
    {
      throw new Error(
        error.response?.data?.message || "Failed to fetch user details"
      );
    }
    throw new Error("An unexpected error occurred");
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
  
// export const hireServiceRequest  = async (requestedService: RequestedService) => 
// {
//   try 
//   {
//     const response = await axios.post<RequestedService>(`${API_BASE_URL}/serviciosSolicitados`, requestedService); 

//     return response.data;
//   } 
//   catch (error) 
//   {
//     console.error('Error hiring services', error);
//     throw new Error('Error hiring services');
//   }
// }


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


