import React, { useContext }from 'react'
import ThemeContext from '../context/ThemeContext'
import {BsSunFill} from '../../node_modules/react-icons/bs'
import {BsFillMoonFill} from '../../node_modules/react-icons/bs'





const ThemeSwitcher = () => {

    const {theme,toggleTheme}=useContext(ThemeContext)

    return <button onClick={toggleTheme}>
    {theme==='dark'? <span><BsSunFill/></span>: <span><BsFillMoonFill/></span>}
    </button>

}



export default ThemeSwitcher