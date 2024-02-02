import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import booksReducer from './components/booksSlice' // Assuming the booksSlice is in the components folder

const store = configureStore({
	reducer: {
		api: apiSlice.reducer,
		books: booksReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
