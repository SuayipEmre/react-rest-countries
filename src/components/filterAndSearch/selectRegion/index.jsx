import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { regions } from '../constant'
import classNames from 'classnames'

const SelectRegion = () => {
    const [isSelectVisible, setIsSelectVisible] = useState(false)

    return (
        <div className="w-[200px] relative   ">

            <div className="flex items-center gap-2  shadow mb-2 bg-secondary px-4 py-4 rounded-md cursor-pointer" onClick={() => setIsSelectVisible(!isSelectVisible)}>
                <p className="w-full px-2">Filter By Region</p>
                <IoIosArrowDown />
            </div>

            <div className={classNames('bg-secondary shadow px-4  hidden rounded-md', {
                ' !block !absolute !right-0 !left-0 ': isSelectVisible
            })}>
                {
                    regions.map(item => (
                        <div key={item.id} className='my-2 cursor-pointer'>{item.region}</div>
                    ))
                }

            </div>


        </div>

    )
}

export default SelectRegion