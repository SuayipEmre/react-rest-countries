import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Search from './search'
import { regions } from './constant'
import classNames from 'classnames'

const FilterAndSearch = () => {

    const [isSelectVisible, setIsSelectVisible] = useState(false)

    return (
        <div className="flex mx-4 lg:mx-0 lg:items-center gap-6 lg:gap-0 justify-between flex-col lg:flex-row mt-12">

            <Search />

            <div className="w-[200px] relative  ">

                <div className="flex items-center gap-2 mb-2 bg-secondary px-4 py-4 rounded-md cursor-pointer" onClick={() => setIsSelectVisible(!isSelectVisible)}>
                    <p className="w-full px-2">Filter By Region</p>
                    <IoIosArrowDown />
                </div>

                <div className={classNames('bg-secondary px-4  hidden rounded-md',{
                    ' !block !absolute !right-0 !left-0 ' : isSelectVisible
                })}>
                    {
                        regions.map(item => (
                            <div key={item.id} className='my-2 cursor-pointer'>{item.region}</div>
                        ))
                    }

                </div>


            </div>

        </div>
    )
}

export default FilterAndSearch