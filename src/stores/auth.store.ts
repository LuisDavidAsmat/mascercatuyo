import { create } from "zustand";
import { persist } from "zustand/middleware";
import { MCTUserBasicInfo, MCTUserRole } from "../types/UserTypes";



interface AuthState {
  token: string | null;
  refreshToken: string | null;
  userBasicInfo: MCTUserBasicInfo | null;
  isAuthenticated: () => boolean;
  setAuth: (data: { token: string; refreshToken: string; userBasicInfo: MCTUserBasicInfo }) => void;
  clearAuth: () => void;
  hasAnyRole: (roles: MCTUserRole[]) => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({ 
      token: null,
      refreshToken: null,
      userBasicInfo: null,
      //isAuthenticated: false,

      isAuthenticated: () => !!get().token,

      setAuth: (data) => set({
        token: data.token,
        refreshToken: data.refreshToken,
        userBasicInfo: data.userBasicInfo,
        //isAuthenticated: true,
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