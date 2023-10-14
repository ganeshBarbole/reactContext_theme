import { ThemeProvider } from './Context/themeContext'
import './App.css'
import { useEffect, useState } from 'react'
import ThemeBtn from './Components/Themebtn'
import Card from './Components/Card'

function App() {
  const [themeMode,setTheme] = useState("light")

  const darkMode = () => {
    setTheme("dark")
  }
  const lightMode = () => {
    setTheme("light")
  }

  useEffect(() => {
   const a = document.querySelector("html").classList
   a.remove("light","dark")
   a.add(themeMode)
  } ,[themeMode])

  return (
   
     <ThemeProvider value={{themeMode,darkMode,lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center ">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
     </ThemeProvider>
   
  )
}

export default App
