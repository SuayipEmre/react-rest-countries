import { useEffect } from "react"
import MainLayout from "./layouts/mainLayout"
import {  usePreferedTheme, useTheme } from "./store/features/theme/hooks"
import Header from "./components/header"
import FilterAndSearch from "./components/filterAndSearch";
import Countries from "./components/countries";


function App() {

  const theme = useTheme()
  const preferedTheme = usePreferedTheme()

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', theme[preferedTheme].primary)
    document.documentElement.style.setProperty('--secondary', theme[preferedTheme].secondary)
    document.documentElement.style.setProperty('--third', theme[preferedTheme].third)
    
    preferedTheme == 'lightTheme' && document.documentElement.style.setProperty('--inputColor', theme[preferedTheme].inputColor)
    
  }, [theme, preferedTheme])


  return (
    <div className="   min-h-screen flex items-center flex-col bg-third">
      <Header />

      <MainLayout>

        <FilterAndSearch />
        <Countries />

      </MainLayout>

    </div>
  )
}

export default App
