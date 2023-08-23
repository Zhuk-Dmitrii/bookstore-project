import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { requestNewBooks } from '../services/books'
import { initialStateBooks, ResponseBooks } from '../types/interfaces'

export const fetchNewBooks = createAsyncThunk<ResponseBooks>('newBooks/fetchNewBooks', async () => {
   const response = await requestNewBooks()

   return response as ResponseBooks
})

export const newBooksSlice = createSlice({
   name: 'newBooks',
   initialState: {
      data: [],
      pagesCounter: 0,
      booksPerPage: 6,
      loading: false,
      error: null,
   } as initialStateBooks,
   reducers: {
   },
   extraReducers: builder => {
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
   }
})

export const newBooksReducer = newBooksSlice.reducer