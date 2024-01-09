import { _fetchCountries } from ".";
import { store } from "../../app";

export const fetchCountries = async() => await store.dispatch(_fetchCountries())