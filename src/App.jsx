import { useEffect } from "react"
import MainLayout from "./layouts/mainLayout"
import { usePrefered, useTheme } from "./store/features/theme/hooks"
import { setTheme } from "./store/features/theme/actions"
import Header from "./components/header"


function App() {

  const theme = useTheme()
  const preferedTheme = usePrefered()

  const handleSetTheme = () => {
    if (preferedTheme == 'darkTheme') {

      return setTheme('lightTheme')
    }

    setTheme('darkTheme')

  }

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', theme[preferedTheme].primary)
    document.documentElement.style.setProperty('--secondary', theme[preferedTheme].secondary)
    document.documentElement.style.setProperty('--third', theme[preferedTheme].third)
  }, [theme, preferedTheme])


  return (
    <div className="w-full min-h-screen flex items-center flex-col bg-third">
      <Header />
      <MainLayout>

      </MainLayout>

    </div>
  )
}

export default App
