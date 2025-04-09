

export interface LoginFormData {
    email: string;
    password: string;
  }


export interface LoginResponse 
{ 
  token: string;
  refreshToken: string;
  expiresIn?: number;
  userId: number;
  username: string;
  email: string,
  userRole: string
}