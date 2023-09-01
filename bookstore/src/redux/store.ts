import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'
import { booksReducer } from './booksSlice'
import { bookReducer, GET_BOOK, getBookSaga } from './bookSlice'

const sagaMiddleware = createSagaMiddleware()

function* sagas() {
   yield takeEvery(GET_BOOK, getBookSaga)
}

export const store = configureStore({
   reducer: {
      books: booksReducer,
      book: bookReducer,
   },
   middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(sagaMiddleware)
   }
})

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch