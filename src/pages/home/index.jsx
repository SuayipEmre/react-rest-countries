import React from 'react'
import Countries from '../../components/countries'
import FilterAndSearch from '../../components/filterAndSearch'
const Home = () => {
    return (
        <div className=''>
            <FilterAndSearch />
            <Countries />
        </div>
    )
}

export default Home