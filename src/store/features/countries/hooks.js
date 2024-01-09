import { useSelector } from "react-redux";


export const useCountries = () => useSelector(state => state.countries.countries)
export const useCountriesStatus = () => useSelector(state => state.countries.countriesStatus)