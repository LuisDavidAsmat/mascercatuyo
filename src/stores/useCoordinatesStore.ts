import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CoordinatesState 
{
    userLat: number | null;
    userLng: number | null;
    setCoordinates: (lat: number, lng: number) => void;

}

export const useCoordinatesStore = create<CoordinatesState>()(
    persist(
        (set) => (
        {
            userLat: null, 
            userLng: null, 
            setCoordinates: (lat, lng) => set({ userLat: lat, userLng: lng }),
        }),
        {
            name: "coordinates-storage",
        }
    )
);

// export const useCoordinatesStore = create<CoordinatesState>((set) => (
// {
//     userLat: null, 
//     userLng: null, 
//     setCoordinates: (lat, lng) => set({ userLat: lat, userLng: lng }),
// }));