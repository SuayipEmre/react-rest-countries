import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    countries : [],
    filterCountriesSearch : '',
    countriesStatus : {
        isLoading : false,
        isError : false,
    }
}

export const _fetchCountries = createAsyncThunk('fetch countries', async() => {
  const {data} = await axios.get('https://restcountries.com/v3.1/all')
  return data
})

export const countries = createSlice({
    name :'countries',
    initialState,
    reducers: {
      _setSearchKeyword : (state, action) => {
        state.filterCountriesSearch = action.payload
      }
    },
    
    extraReducers  : (builder) => {
      builder

      .addCase(_fetchCountries.pending, (state) => {
        state.countriesStatus = {
            isError : false,
            isLoading : true
        }
      })

      .addCase(_fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload
        state.countriesStatus = {
            isError : false,
            isLoading : false
        }
      })

      .addCase(_fetchCountries.rejected, (state) => {
        state.countriesStatus = {
            isError : true,
            isLoading : false
        }
      })


    }
})

export const {_setSearchKeyword} = countries.actions
export default countries.reducer
