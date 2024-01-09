import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme, usePreferedTheme } from '../store/features/theme/hooks'
import Header from '../components/header'

const MainLayout = () => {

  const theme = useTheme()
  const preferedTheme = usePreferedTheme()

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', theme[preferedTheme].primary)
    document.documentElement.style.setProperty('--secondary', theme[preferedTheme].secondary)
    document.documentElement.style.setProperty('--third', theme[preferedTheme].third)

    preferedTheme == 'lightTheme' && document.documentElement.style.setProperty('--inputColor', theme[preferedTheme].inputColor)

  }, [theme, preferedTheme])


  return (
    <div className='min-h-screen   flex items-center flex-col bg-third '>
      <Header />
      <div className='w-[375px] md:w-full 2xl:w-[1440px] '>
        <Outlet />
      </div>

    </div>
  )
}

export default MainLayout