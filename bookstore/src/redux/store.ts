import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { newBooksReducer } from './newBooksSlice'
import { searchBooksReducer } from './searchBooksSlice'

export const store = configureStore({
   reducer: {
      newBooks: newBooksReducer,
      searchBooks: searchBooksReducer,
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch