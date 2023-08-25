import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestBookByIsbn13 } from '../services/books'
import { ResponseBook, initialStateBook } from '../types/interfaces'

export const fetchBook = createAsyncThunk<ResponseBook, string>('book/fetchBook', async (isbn13: string) => {
   const data: ResponseBook = await requestBookByIsbn13(isbn13)

   return data
})

export const bookSlice = createSlice({
   name: 'book',
   initialState: {
      data: {},
      loading: false,
      error: null,
   } as initialStateBook,
   reducers: {
   },
   extraReducers: builder => {
      builder.addCase(fetchBook.pending, (state) => {
         state.loading = true
      })

      builder.addCase(fetchBook.fulfilled, (state, action) => {
         state.loading = false
         state.data = action.payload
      })

      builder.addCase(fetchBook.rejected, (state, action) => {
         state.loading = false
         state.error = action.error.message as string
      })
   }
})

export const bookReducer = bookSlice.reducer