import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const Search = () => {
  return (
    <div className="bg-secondary flex items-center gap-4 px-6  rounded-md">
      <IoIosSearch size={20} />
      <input type="text" className="bg-transparent outline-none border-none none w-[400px] h-[50px] font-light" placeholder="Search for a country... " />
    </div>
  )
}

export default Search