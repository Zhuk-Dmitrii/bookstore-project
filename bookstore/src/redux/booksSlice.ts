import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestNewBooks, requestSearchBooks } from '../services/books'
import { initialStateBooks, ResponseBooks } from '../types/interfaces'

export const fetchNewBooks = createAsyncThunk<ResponseBooks>('newBooks/fetchNewBooks', async () => {
   const response = await requestNewBooks()

   return response as ResponseBooks
})

export const fetchSearchBooks = createAsyncThunk<
   ResponseBooks,
   { search?: string, page?: string }
>('searchBooks/fetchSearchBooks', async ({ search, page = '1' }) => {
   const response = await requestSearchBooks(search, page)

   return response as ResponseBooks
})

export const booksSlice = createSlice({
   name: 'books',
   initialState: {
      data: [],
      pagesCounter: 0,
      booksPerPage: 10,
      loading: false,
      error: null,
   } as initialStateBooks,
   reducers: {
   },
   extraReducers: builder => {
// ______________________________New books_____________________________
      builder.addCase(fetchNewBooks.pending, (state) => {
         state.loading = true
      })

      builder.addCase(fetchNewBooks.fulfilled, (state, action) => {
         state.loading = false
         
         if (Number(state.data.length) == Number(action.payload.total)) return

         state.data = action.payload.books
         state.pagesCounter = Math.ceil(Number(action.payload.total) / state.booksPerPage)
      })

      builder.addCase(fetchNewBooks.rejected, (state) => {
         state.loading = false
         state.error = 'Ошибка!!!'
      })
      
// ____________________________Search books____________________________
      builder.addCase(fetchSearchBooks.pending, (state) => {
         state.loading = true
      })

      builder.addCase(fetchSearchBooks.fulfilled, (state, action) => {
         state.loading = false

         if (Number(state.data.length) == Number(action.payload.total)) return

         state.data = action.payload.books
         state.pagesCounter = Math.ceil(Number(action.payload.total) / state.booksPerPage)
      })

      builder.addCase(fetchSearchBooks.rejected, (state, action) => {
         state.loading = false
         state.error = action.error.message as string
      })
   }
})

export const booksReducer = booksSlice.reducer