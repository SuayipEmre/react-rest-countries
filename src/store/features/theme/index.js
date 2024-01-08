
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    prefered : 'darkTheme',

    darkTheme : {
        /*(Dark Mode Elements) */
        primary : '#2b3945',

        /*(Dark Mode Text & Light Mode Elements) */
        secondary : '#ffffff',

        /*(Dark Mode Background) */
        third : '#202c37'
    },

    lightTheme : {
        /*(Light Mode Text)*/
        primary : '#111517',
        
        /*(Light Mode Input) */
        secondary : '#858585',

        /* (Light Mode Background) */
        third : '#fafafa'
    }

}

export const theme  = createSlice({
    name : 'theme',
    initialState,
    reducers : {
        _setTheme : (state, action) => {
          state.prefered = action.payload
        }
    }
})


export const {_setTheme} = theme.actions
export default theme.reducer