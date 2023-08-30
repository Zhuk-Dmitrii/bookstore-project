import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestNewBooks, requestSearchBooks } from '../services/books'
import { getDataFromLocalStorage } from '../helpers/getDataFromLocalStorage'
import { setDataInLocalStorage } from '../helpers/setDataInLocalStorage'
import { InitialStateBooks, ResponseBooks } from '../types/interfaces'

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
      data: {},
      dataFavorites: getDataFromLocalStorage('favorites'),
      dataCart: getDataFromLocalStorage('cart'),
      pagesCounter: 0,
      booksPerPage: 10,
      loading: false,
      error: null,
   } as InitialStateBooks,
   reducers: {
      addBookFavorites: (state, action) => {
         state.dataFavorites.push(action.payload)
         setDataInLocalStorage('favorites', state.dataFavorites)
      },
      removeBookFavorites: (state, action) => {
         const indexBook = state.dataFavorites.findIndex(book => book.isbn13 === action.payload.isbn13)
         state.dataFavorites.splice(indexBook, 1)
         setDataInLocalStorage('favorites', state.dataFavorites)
      },
      incrementToCart: (state, action) => {
         state.dataCart.push(action.payload)
         setDataInLocalStorage('cart', state.dataCart)
      },
      decrementFromCart: (state, action) => {
         const bookIndexFromEnd = state.dataCart.findLastIndex(book => book.isbn13 === action.payload.isbn13)
         state.dataCart.splice(bookIndexFromEnd, 1)
         setDataInLocalStorage('cart', state.dataCart)
      },
      deleteFromCart: (state, action) => {
         state.dataCart = state.dataCart.filter(book => book.isbn13 !== action.payload.isbn13)
         setDataInLocalStorage('cart', state.dataCart)
      }
   },
   extraReducers: builder => {
// ______________________________New books_____________________________
      builder.addCase(fetchNewBooks.pending, (state) => {
         state.loading = true
      })

      builder.addCase(fetchNewBooks.fulfilled, (state, action) => {
         state.loading = false
         state.data = action.payload
         state.pagesCounter = Math.ceil(Number(action.payload.total) / state.booksPerPage)
      })

      builder.addCase(fetchNewBooks.rejected, (state, action) => {
         state.loading = false
         state.error = action.error.message as string
      })
      
// ____________________________Search books____________________________
      builder.addCase(fetchSearchBooks.pending, (state) => {
         state.loading = true
      })

      builder.addCase(fetchSearchBooks.fulfilled, (state, action) => {
         state.loading = false
         state.data = action.payload
         state.pagesCounter = Math.ceil(Number(action.payload.total) / state.booksPerPage)
      })

      builder.addCase(fetchSearchBooks.rejected, (state, action) => {
         state.loading = false
         state.error = action.error.message as string
      })
   }
})

export const { addBookFavorites, removeBookFavorites, incrementToCart, decrementFromCart, deleteFromCart } = booksSlice.actions
export const booksReducer = booksSlice.reducer