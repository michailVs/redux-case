import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    invItem: []
}
export const inventoryItems = createSlice({
    name: 'case',
    initialState,
    reducers: {
        addItem: (state, active) => {
            const inv = {...active.payload, id: Date.now()}
            state.invItem.push(inv)
        },
        buyItem: (state, active) => {
            state.invItem = state.invItem.filter(i => i.id !== active.payload.id)
        }
    }
})

export const {addItem, buyItem} = inventoryItems.actions

export default inventoryItems.reducer