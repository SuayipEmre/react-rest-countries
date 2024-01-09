import React from 'react'
import TextItem from './text'

const CountryDetailContent = ({ state }) => {
    const currencies = { ...Object.values(state.currencies) }[0].name
    const nativeName = { ...Object.values(state.name.nativeName) }[0].common
    const languages = Object.values(state.languages)

    return (
        <>
            {/*main container */}
            <div className='flex flex-col lg:flex-row  items-center justify-between mt-12 2xl:gap-16'>

                {/*left side (flag) */}
                <div className='flex-1 mb-4 md:my-0 '>
                    <img src={state.flags.png} className='w-full lg:w-[70%] 2xl:w-full' alt={nativeName + 'flag'} />
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
                                <TextItem title='Native Name' text={nativeName} />
                                <TextItem title='Population ' text={state.population} />
                                <TextItem title='Region' text={state.region} />
                                <TextItem title='Sub region' text={state.subregion} />
                                <TextItem title='Capital' text={state.capital} />
                            </div>

                            {/*right Side */}
                            <div className='flex flex-col gap-4'>
                            <TextItem title='Top Level Domain ' text={state.tld} />
                            <TextItem title='Currencies' text={currencies} />
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
                        <p > Border Countries : </p>

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