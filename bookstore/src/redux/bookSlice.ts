import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'
import { put } from 'redux-saga/effects'
import { requestBookByIsbn13 } from '../services/books'
import { ResponseSingleBook, InitialStateBook } from '../types/interfaces'

export function* getBookSaga (action: PayloadAction<string>) {
   yield put(setLoading(true))

   try {
      const payload: ResponseSingleBook = yield requestBookByIsbn13(action.payload)
      yield put(getBookSuccess(payload))
   } catch {
      yield put(setError())
   }

   yield put(setLoading(false))
}

export const bookSlice = createSlice({
   name: 'book',
   initialState: {
      data: {},
      loading: false,
      error: null,
   } as InitialStateBook,
   reducers: {
      getBookSuccess: (state, action) => {
         state.data = action.payload
      },
      setLoading: (state, action) => {
         state.loading = action.payload
      },
      setError: (state) => {
         state.error = 'Ошибка!!!'
      }
   },
})

export const GET_BOOK: string = 'book/getBook'
export const getBook = createAction<string>(GET_BOOK)
export const { getBookSuccess, setLoading, setError } = bookSlice.actions
export const bookReducer = bookSlice.reducer