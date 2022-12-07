import { createContext, useState } from "react"

const ThemeContext=createContext()

export const ThemeProvider= ({ children })=> {
    const [theme,setTheme]=useState(localStorage.getItem("theme")||"light");

    const toggleTheme=() => {
        localStorage.setItem("theme",theme);
        if (theme === 'light') { 
            setTheme ('dark')
        } else {
            setTheme('light')
        }
     
    }
    const values ={
        theme,
        toggleTheme
    }
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export default ThemeContext