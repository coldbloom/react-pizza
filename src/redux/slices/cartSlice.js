import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: [],
    count: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addItems(state, actions) {
            const findItem = state.items.find((obj) => obj.id === actions.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...actions.payload,
                    count: 1
                })
            }
            state.totalPrice = state.items.reduce((acc, obj) => {
                return acc + (obj.price * obj.count)
            }, 0)
            state.count = state.items.reduce((acc, obj) => {
                return acc + obj.count
            }, 0)
        },
        minusItem(state, actions) {
            console.log(actions)
        },
        removeItem(state, actions) {
            state.items = state.items.filter(obj => obj !== actions)
        },
        clearItem(state) {
            state.items = []
        }
    }
})

export const { addItems, removeItem, clearItem } = cartSlice.actions
export default cartSlice.reducer