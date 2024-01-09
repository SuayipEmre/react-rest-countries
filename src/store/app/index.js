import { configureStore } from "@reduxjs/toolkit";
import theme from "../features/theme";
import countries from "../features/countries";


export const store = configureStore({
    reducer : {
        theme,
        countries,
    }
})

