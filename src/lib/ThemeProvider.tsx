import { ReactNode, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const getInitialTheme = (): string =>
{
    if(typeof window === "undefined") return "light";

    const storedTheme = localStorage.getItem("theme");

    if(storedTheme) return storedTheme;

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)
    {
        return "dark";
    }

    return "light";
}

interface ThemeProviderProps 
{
    children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => 
{
    const [theme, setTheme] = useState<string>(getInitialTheme);

    useEffect(() => 
    {
        localStorage.setItem("theme", theme);

        if(theme=== "dark")
        {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
          }


        //document.documentElement.dataset.theme = theme;
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider;