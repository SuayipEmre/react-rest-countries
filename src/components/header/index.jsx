import React from 'react'
import { FaMoon } from "react-icons/fa";
import { usePrefered } from '../../store/features/theme/hooks';
import { IoMoonOutline } from "react-icons/io5";
import { setTheme } from '../../store/features/theme/actions';
<IoMoonOutline />
const Header = () => {
    const preferedTheme = usePrefered()

    const handleSetTheme = () => {
        if (preferedTheme == 'darkTheme') {
    
          return setTheme('lightTheme')
        }
    
        setTheme('darkTheme')
    
      }
    return (
        <div className='bg-secondary py-6 flex items-center justify-center w-full'>

            <div className='w-[1440px] px-4 lg:px-0 flex items-center justify-between '>
                <h1 className='font-[600]  lg:font-extrabold lg:text-[30px]'>Where in the world</h1>
                <div className='flex items-center gap-2' onClick={handleSetTheme}>
                    {
                        preferedTheme == 'darkTheme' ? 
                            <>
                                <FaMoon />
                                <p>Dark Mode</p>
                            </>
                         : 

                            <>
                                <IoMoonOutline />
                                <p>Light Mode</p>
                            </>

                        
                    }
                </div>
            </div>


        </div>
    )
}
//<i class="fa-regular fa-moon"></i>
export default Header