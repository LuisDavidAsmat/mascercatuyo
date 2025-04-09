import { create } from "zustand";

interface CoordinatesState 
{
    userLat: number | null;
    userLng: number | null;
    setCoordinates: (lat: number, lng: number) => void;

}



export const useCoordinatesStore = create<CoordinatesState>((set) => (
{
    userLat: null, 
    userLng: null, 
    setCoordinates: (lat, lng) => set({ userLat: lat, userLng: lng }),
}));