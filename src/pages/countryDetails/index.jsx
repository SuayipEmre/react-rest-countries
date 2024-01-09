import React from 'react'
import { useLocation } from 'react-router-dom'
import BackButton from '../../components/countryDetailsContainer/backButton'
import CountryDetailContent from '../../components/countryDetailsContainer/content'


const CountryDetails = () => {
    const { state } = useLocation()
  

    return (
        <div className='flex w-full flex-col my-12 px-12 xl:px-0 xl:mb-0  '>
            <BackButton />
           <CountryDetailContent state={state} />
           
        </div>
    )
}

export default CountryDetails