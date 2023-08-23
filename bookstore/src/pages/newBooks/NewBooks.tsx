import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchNewBooks } from '../../redux/newBooksSlice'
import { RootState, useAppDispatch } from '../../redux/store'
import { DataBooks } from '../../types/interfaces'
import { BookContainer } from '../../components/BookContainer/BookContainer'
import { BookCard } from '../../components/BookCard/BookCard'
import { Pagination } from '../../components/Pagination/Pagination'
import { Spinner } from '../../components/Spinner/Spinner'


export function NewBooks(): JSX.Element {
   const { data, pagesCounter, booksPerPage, loading, error } = useSelector((state: RootState) => state.newBooks)
   const { pageNumber } = useParams<string>()
   const sliceStart: number = (Number(pageNumber) - 1) * booksPerPage
   const sliceEnd: number = sliceStart + booksPerPage
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchNewBooks())
   }, [dispatch, pageNumber])

   function renderNewBooks() {
      if (data) {
         return (
            data.slice(sliceStart, sliceEnd).map((book: DataBooks) => (
               <BookCard key={book.image} data={book} />
            ))
         )
      }
   }

   if (loading) {
      return (
         <Spinner />
      )
   }

   if (error) {
      return (
         <h1 className="text-uppercase fw-bold mt-4 mb-5">{error}</h1>
      )
   }

   return (
      <>
         <h1 className="text-uppercase fw-bold mt-4 mb-5">New Releases Books</h1>
         <BookContainer>
            {renderNewBooks()}
         </BookContainer>

         <Pagination
            pageNumber={Number(pageNumber)}
            pagesCounter={pagesCounter}
            baseUrl='/new-books/page/'
         />
      </>
   )
}