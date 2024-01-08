import { useEffect } from "react"
import MainLayout from "./layouts/mainLayout"
import { usePrefered, useTheme } from "./store/features/theme/hooks"
import Header from "./components/header"
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import FilterAndSearch from "./components/filterAndSearch";
function App() {

  const theme = useTheme()
  const preferedTheme = usePrefered()

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', theme[preferedTheme].primary)
    document.documentElement.style.setProperty('--secondary', theme[preferedTheme].secondary)
    document.documentElement.style.setProperty('--third', theme[preferedTheme].third)
  }, [theme, preferedTheme])


  return (
    <div className="w-full min-h-screen flex items-center flex-col bg-third">
      <Header />
      <MainLayout>

       <FilterAndSearch />
      </MainLayout>

    </div>
  )
}

export default App
