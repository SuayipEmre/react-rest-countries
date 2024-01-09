import { useFilterCountriesSearch } from "../store/features/countries/hooks"



export const filterCountries = (countries) => {

    const filterCountriesSearch = useFilterCountriesSearch()

    let filteredCountries = []
    filteredCountries = countries

    if (filterCountriesSearch) {
        filteredCountries = countries.filter(item => item.name.common.toLowerCase().includes(filterCountriesSearch.toLowerCase()))
    }

    return filteredCountries

}