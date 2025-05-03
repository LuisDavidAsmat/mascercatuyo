import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MCTUserBasicInfo, MCTUserRole } from "../types/UserTypes";



interface AuthState {
  token: string | null;
  refreshToken: string | null;
  userBasicInfo: MCTUserBasicInfo | null;
  // isAuthenticated: () => boolean;

  lastValidation: number | null; // Timestamp of last validation
  isSessionValid : boolean | null; // Cached validation result



  isAuthenticated: () => Promise<boolean>;
  setAuth: (data: { token: string; refreshToken: string; userBasicInfo: MCTUserBasicInfo }) => void;
  clearAuth: () => void;
  hasAnyRole: (roles: MCTUserRole[]) => boolean

  validateToken: () => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({ 
      token: null,
      refreshToken: null,
      userBasicInfo: null,
      lastValidation: null,
      isSessionValid : null,

      //isAuthenticated: false,
      // isAuthenticated: () => !!get().token,
      
      isAuthenticated: async () => 
      {
        //return get().validateToken();
        const { isSessionValid , lastValidation, validateToken } = get();

        if (isSessionValid !== null && lastValidation && Date.now() - lastValidation < 300000)
        {
          return isSessionValid ;
        }

        return validateToken();
      },

      validateToken: async () => 
      {
        const { token } = get();
        if (!token) 
        {
          set({ isSessionValid : false, lastValidation: Date.now() });

          return false;
        }
          
        try 
        {
          if (!token.match(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/)) {      
            throw new Error('Invalid token format');
          }

          const payload = JSON.parse(atob(token.split('.')[1]));
          
          if (payload.exp * 1000 < Date.now()) 
          {
            console.log('yas');
            throw new Error('Token expired');
          }

          set({ isSessionValid : true, lastValidation: Date.now() })

          return true;
        } 
        catch (error) 
        {
          console.error('Token validation failed:', error);
          get().clearAuth();
          return false;
        }

        return true;
      },

      setAuth: (data) => set({
        token: data.token,
        refreshToken: data.refreshToken,
        userBasicInfo: data.userBasicInfo,
        //isAuthenticated: true,

        // new
        isSessionValid: true,
        lastValidation: Date.now()
      }),
      clearAuth: () => set({
        token: null,
        refreshToken: null,
        userBasicInfo: null,
        //isAuthenticated: false  
      }),

      hasAnyRole: (roles) =>
      {
        const { userBasicInfo } = get();
        if (!userBasicInfo) return false;

        return userBasicInfo ? roles.includes(userBasicInfo?.userRole) : false;

      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        token: state.token,
        userBasicInfo: state.userBasicInfo, // Persist only necessary data
      }),
    }
  )
);