import React from 'react'
import Search from './search'
import SelectRegion from './selectRegion'

const FilterAndSearch = () => {


    return (
        <div className="flex mx-4 lg:mx-0 lg:items-center gap-6   lg:gap-0 justify-between flex-col lg:flex-row mt-12">

            <Search />
            <SelectRegion />

        </div>
    )
}

export default FilterAndSearch