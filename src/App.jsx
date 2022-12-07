import React from 'react'
import Appcontainer from './components/AppContainer'
import "../src/App.css"


import { ThemeProvider } from './context/ThemeContext'
// import ThemeSwitcher from './components/ThemeSwitcher'  

const App = () => {
  return (
    <>
    <ThemeProvider>
      {/* <ThemeSwitcher/> */}
     <Appcontainer/>
    </ThemeProvider>
    </>
  )
}

export default App

