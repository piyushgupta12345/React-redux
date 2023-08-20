import {createSlice}from '@reduxjs/toolkit'

export const incdecSlice = createSlice({
    name:'incdec',
    initialState: 20,
    reducers: {
        Inc: (state, action) => {
            return state += action.payload;
        },
        Dec: (state, action) => {
            return state -= action.payload;
        },
        Res: (state, action) => {
            return state = 0;
        }
    }
})

export const{Inc, Dec, Res} = incdecSlice.actions;
export default incdecSlice.reducer;