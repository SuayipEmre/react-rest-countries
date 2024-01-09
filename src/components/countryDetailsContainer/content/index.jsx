import React from 'react'
import { useNavigate } from 'react-router-dom'

const CountryDetailContent = ({ state }) => {
    const navigate = useNavigate()
    const currencies = { ...Object.values(state.currencies) }[0].name
    const nativeName = { ...Object.values(state.name.nativeName) }[0].common
    const languages = Object.values(state.languages)

    return (
        <>
            {/*main container */}
            <div className='flex flex-col lg:flex-row  items-center justify-between mt-12 2xl:gap-16'>

                {/*left side (flag) */}
                <div className='flex-1 mb-4 md:my-0 '>
                    <img src={state.flags.png} className='w-full lg:w-[70%] 2xl:w-full' alt="" />
                </div>

                {/*right Side */}
                <div className='flex-1'>
                    {/*right Side top content */}
                    <div className='w-full '>
                        {/*title */}
                        <h1 className='font-bold text-[30px] mb-4 lg:mb-12'>{state?.name?.common}</h1>

                        {/*content*/}
                        <div className='flex w-full flex-col lg:flex-row justify-between '>

                            {/*left Side */}
                            <div className='flex  flex-col gap-3 mb-12 lg:mb-0'>
                                <p className='font-medium'>Native Name : <span className='font-light text-sm'>{nativeName}</span> </p>
                                <p className='font-medium'>Population :  <span className='font-light text-sm'>{state.population}</span> </p>
                                <p className='font-medium'>Region :   <span className='font-light text-sm'>{state.region}</span></p>
                                <p className='font-medium'>Sub region : <span className='font-light text-sm'>{state.subregion}</span>  </p>
                                <p className='font-medium'>Capital :   <span className='font-light text-sm'>{state.capital}</span></p>
                            </div>

                            {/*right Side */}
                            <div className='flex flex-col gap-4'>
                                <p className='font-medium'>Top Level Domain : <span className='font-light text-sm'> {state.tld}</span></p>
                                <p  className='font-medium'>Currencies:  <span className='font-light text-sm'> {currencies}</span> </p>
                                <p className=''>
                                    Languages : {languages.map((item, index) => (
                                        <span className='mx-2 font-light  text-sm xl:text-base' key={item}>
                                            {item}
                                            {index < languages.length - 1 && ','}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/*right Side bottom content */}
                    <div className='flex  items-center gap-4 mt-8 flex-wrap'>
                        <p className=''> Border Countries : </p>

                        <div className='flex items-center flex-wrap gap-4'>
                            {state.borders.map(item => <p key={item} className='bg-secondary font-light text-[14px] px-6 py-1 shadow '>{item}</p>)
                            }
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CountryDetailContent