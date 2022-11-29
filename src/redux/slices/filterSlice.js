import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoryId: 0,
    pageCount: 1,
    sort: {name: 'популярности', sortProperty: 'rating', sortValue: 'desc'}
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload
            console.log('category slice')
        },
        setSort(state, action) {
            state.sort = action.payload
            console.log('sort slice')
        },
        setPageCount(state, action) {
            state.pageCount = action.payload
            console.log('pagination slice')
        }
    }
})

export const { setCategoryId, setSort, setPageCount } = filterSlice.actions
export default filterSlice.reducer