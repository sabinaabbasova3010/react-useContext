import React, { useContext } from 'react'
import Header from './Header'
import ThemeContext from '../context/ThemeContext'
// import ThemeSwitcher from './ThemeSwitcher'


const Appcontainer = () => {

    const {theme}=useContext (ThemeContext)

  return (
    <main className={`app ${theme === "dark" ? theme:"light"}`}>
    <Header/>
    <h1>Lorem, ipsum dolor.</h1>
   <h1>Lorem, ipsum dolor.</h1>
   <h1>Lorem, ipsum dolor.</h1>
   <h1>Lorem, ipsum dolor.</h1>
   <h1>Lorem, ipsum dolor.</h1>
   <h1>Lorem, ipsum dolor.</h1>
   <h1>Lorem, ipsum dolor.</h1>
   <h1>Lorem, ipsum dolor.</h1>
   <h1>Lorem, ipsum dolor.</h1>
   <h1>Lorem, ipsum dolor.</h1>

    </main>
  )
}

export default Appcontainer