import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { useFilterCountriesSearch } from '../../../store/features/countries/hooks'
import { setSearchKeyword } from '../../../store/features/countries/actions'
import classNames from 'classnames'
import {  usePreferedTheme } from '../../../store/features/theme/hooks'

const Search = () => {
  const filterCountriesSearch = useFilterCountriesSearch()
  const theme = usePreferedTheme()
  console.log(filterCountriesSearch);

  const handleChange = (e) => setSearchKeyword(e.target.value)
  return (
    <div className={classNames('bg-secondary  shadow-sm  justify-center    flex  items-center px-4 gap-4 lg:px-6  rounded-md', {
      'border  border-inputColor': theme == 'lightTheme'
    })}>
      <IoIosSearch size={20} />
      <input
        value={filterCountriesSearch}
        onChange={handleChange}
        type="text" className="bg-transparent  text-inputColor   outline-none  border-none none w-[90%] md:w-[150px] lg:w-[400px] h-[50px] font-light" placeholder="Search for a country... " />
    </div>
  )
}

export default Search