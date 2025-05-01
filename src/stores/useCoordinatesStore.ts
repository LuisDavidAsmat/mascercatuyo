import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CoordinatesState 
{
    userLat: number | null;
    userLng: number | null;
    setCoordinates: (lat: number, lng: number) => void;
    getCoordinates: () => { lat: number , lng: number } | null;

}

export const useCoordinatesStore = create<CoordinatesState>()(
    persist(
        (set, get) => (
        {
            userLat: null, 
            userLng: null, 
            setCoordinates: (lat, lng) => set({ userLat: lat, userLng: lng }),
            getCoordinates: () => 
            {
                const { userLat, userLng } = get();
                return (userLat && userLng) ? { lat: userLat, lng: userLng } : null;
            }
        }),
        {
            name: "coordinates-storage",
        }
    )
);