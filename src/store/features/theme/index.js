
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    prefered : 'darkTheme',

    darkTheme : {
        
        /*(Dark Mode Text)  ffffff*/
        primary : '#ffffff',

        /*(Dark Mode elements) */
        secondary : '#2b3945',

        /*(Dark Mode Background) */
        third : '#202c37'
    },

    lightTheme : {
        /*(Light Mode Text)*/
        primary : '#111517',
        
        /*(Light Mode elements) */
        secondary : '#ffffff',

        /* (Light Mode Background) */
        third : '#fafafa',

        /* (Light Mode Input) */
        inputColor: '#858585'
    }

}

//texts = primary
//elements = secondary
//bg third
/*

dark mode
elements : #2b3945
text : #ffffff
background : 202c37

light mode
elements : #ffffff
text : #111517
backgorund :#fafafa
input : 858585


*/

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