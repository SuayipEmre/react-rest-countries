import { useSelector } from "react-redux";


export const useCountries = () => useSelector(state => state.countries.countries)
export const useFilterCountriesSearch = () => useSelector(state => state.countries.filterCountriesSearch)
export const useCountriesByRegion = () => useSelector(state => state.countries.countriesByRegion)
export const useCountriesStatus = () => useSelector(state => state.countries.countriesStatus)