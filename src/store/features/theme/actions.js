import { _setTheme } from ".";
import { store } from "../../app";


export const setTheme = (theme) => store.dispatch(_setTheme(theme))