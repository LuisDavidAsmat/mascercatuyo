import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ConsentStore {
    hasConsent: boolean;
    setHasConsent: (consent: boolean) => void;
}

export const useConsentStore = create<ConsentStore>()(
    persist(
        (set) => ({
            hasConsent: false, // Default to no consent
            setHasConsent: (consent) => set({ hasConsent: consent }),
        }),
        {
            name: 'user-consent', 
        }
    )
);