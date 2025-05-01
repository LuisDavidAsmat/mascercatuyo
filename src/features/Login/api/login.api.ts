import axios from "axios";
import { MCTUserBasicInfo, MCTUserRole } from "../../../types/UserTypes";
import { LoginFormData } from "../types/LoginFormData";
import apiClient from "../../../services/apiClient";


export const loginUser = async (loginRequest: LoginFormData): Promise<
{
    token: string;
    refreshToken: string;
    userBasicInfo: MCTUserBasicInfo;
}> => 
  {
    try 
    {
      const response = await apiClient.post<{
        token: string;
        refreshToken: string;
        userId: number;
        username: string;
        email: string;
        userRole: MCTUserRole;
      }>(
        `/login`, 
        loginRequest,
      );
  
      const userBasicInfo: MCTUserBasicInfo = 
      {
        userId: response.data.userId,
        username: response.data.username,
        email: response.data.email,
        userRole: response.data.userRole
      }
  
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