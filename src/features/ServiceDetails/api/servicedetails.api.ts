import axios from "axios";
import { API_BASE_URL } from "../../../config/api";
import { useAuthStore } from "../../../stores/auth.store";
import { HireServiceRequestData } from "../components/HireServiceOfferFlow";


export const fetchServiceById = async (serviceId: number) => 
{
  try 
  {
    const {token} = useAuthStore.getState();
    const response = await axios.get<any>(`${API_BASE_URL}/v1/services/offer/details/${serviceId}`, 
      {
        headers: {
          'Authorization': `Bearer ${token}`,
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

interface HireServiceResponse {
  success: boolean;
  message: string;
  hiringRequestId?: number; // Optional, as it might not always be present
  error?: string;
}

export const hireServiceRequest  = async (requestedService: HireServiceRequestData) => 
  {
    try 
    {
      const {token} = useAuthStore.getState();
      const response = await axios.post<HireServiceResponse>(`${API_BASE_URL}/v1/hiring`, requestedService,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }
      ); 
  
      return response.data;
    } 
    catch (error) 
    {
      console.error('Error hiring services', error);
      throw new Error('Error hiring services');
    }
  }