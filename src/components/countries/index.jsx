import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../../store/features/countries/actions'
import { useCountries } from '../../store/features/countries/hooks'
import { filterCountries } from '../../helpers/searchCountries'

const Countries = () => {
    const countries = useCountries()
    const filteredContries = filterCountries(countries)

    useEffect(() => {
        fetchCountries()
    }, [])

    return (
        <div className='grid grid-cols-4 gap-y-20 gap-x-12 mt-12'>
            {
                filteredContries?.map(item => (
                    <div key={item.name.official} className='col-span-4 md:col-span-2 lg:col-span-1 bg-secondary shadow-lg rounded-md'>
                        <img className='w-full h-40 object-cover rounded-md ' src={item.flags.png} />

                        <div className='my-4 px-6'>
                            <p className='mb-4 font-extrabold'>{item.name.common}</p>
                            <p>Population {item.population}</p>
                            <p>Region {item.region}</p>
                            <p>Capital {item.capital}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Countries