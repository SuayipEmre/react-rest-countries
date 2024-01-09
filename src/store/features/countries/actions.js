import { _fetchCountries, _setSearchKeyword } from ".";
import { store } from "../../app";

export const fetchCountries = async() => await store.dispatch(_fetchCountries())
export const setSearchKeyword = (keyword) =>  store.dispatch(_setSearchKeyword(keyword))