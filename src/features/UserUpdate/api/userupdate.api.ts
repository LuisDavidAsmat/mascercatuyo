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

export const uploadProfileImage = async (formData: FormData, userId: number) => 
{
  try 
  {
    const { token } = useAuthStore.getState();
    const response = await axios.post(
      `${API_BASE_URL}/user/img/${userId}/avatar`, 
      formData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading profile image:", error);
    throw error;
  }
};


export const uploadServiceImages = async (formData: FormData, userId: number) => 
  {
    try 
    {
      const { token } = useAuthStore.getState();
      const response = await axios.post(
        `${API_BASE_URL}/user/img/${userId}/services`, 
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error uploading profile image:", error);
      throw error;
    }
  };