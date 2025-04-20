import axios from "axios";
import { API_BASE_URL } from "../../../config/api";
import { RegisterUserDto } from "../types/RegisterTypes";

export const registerUser = async (userData: RegisterUserDto) => 
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