import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}
export const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        addBalance: (state, active) => {
            state.value += active.payload
        },
        getBalance: (state, active) => {
            state.value -= active.payload
        }
    }
})

export const {addBalance, getBalance} = balanceSlice.actions

export default balanceSlice.reducer