import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='w-[375px] md:w-full xl:w-[1440px] '>
        {
            children
        }
    </div>
  )
}

export default MainLayout