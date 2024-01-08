import { useEffect } from "react"
import MainLayout from "./layouts/mainLayout"
import { usePrefered, useTheme } from "./store/features/theme/hooks"
import { setTheme } from "./store/features/theme/actions"


function App() {

  const theme = useTheme()
  const preferedTheme = usePrefered()

  const handleSetTheme = () => {
    if(preferedTheme == 'darkTheme'){

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
    <div className="w-full min-h-screen">
      <MainLayout>
        <p className="bg-primary  text-third"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas excepturi labore. Neque, incidunt, perspiciatis deleniti odit expedita delectus beatae aliquid ea cupiditate eveniet <p className="text-secondary">secondary</p> tempore labore explicabo at. Libero architecto sapiente explicabo. Veritatis dolorum iure recusandae ipsam odit corrupti error pariatur, excepturi similique totam rem dolor velit optio quis ex!</p>
      </MainLayout>

      <button onClick={handleSetTheme}>set theme</button>
    </div>
  )
}

export default App
