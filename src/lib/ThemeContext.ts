import { createContext } from "react";

export interface ThemeContextType 
{
    theme: string,
    setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;