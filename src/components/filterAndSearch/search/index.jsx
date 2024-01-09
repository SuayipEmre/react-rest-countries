import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { useFilterCountriesSearch } from '../../../store/features/countries/hooks'
import { setSearchKeyword } from '../../../store/features/countries/actions'
import classNames from 'classnames'
import {  usePreferedTheme } from '../../../store/features/theme/hooks'

const Search = () => {
  const filterCountriesSearch = useFilterCountriesSearch()
  const theme = usePreferedTheme()

  const handleChange = (e) => setSearchKeyword(e.target.value)
  return (
    <div className='bg-secondary   justify-center shadow-lg    flex  items-center px-4 gap-4 lg:px-6  rounded-md'>
      <IoIosSearch size={20} />
      <input
        value={filterCountriesSearch}
        onChange={handleChange}
        type="text" className={classNames('bg-transparent  text-inputColor placeholder:font-light placeholder:text-[13px]   outline-none  border-none none w-[90%] md:w-[150px] lg:w-[400px] h-[50px] font-light',{
          'text-inputColor' : theme == 'lightTheme'
        })} placeholder="Search for a country... " />
    </div>
  )
}

export default Search