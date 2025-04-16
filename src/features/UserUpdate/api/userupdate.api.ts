import axios from "axios";
import { API_BASE_URL } from "../../../config/api";
import { useAuthStore } from "../../../stores/auth.store";

export const createServiceRequest = async (serviceData: any) => 
{
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