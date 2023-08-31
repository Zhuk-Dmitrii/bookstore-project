import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchNewBooks } from '../../redux/booksSlice'
import { RootState, useAppDispatch } from '../../redux/store'
import { Title } from '../../components/Title/Title'
import { BookContainer } from '../../components/BookContainer/BookContainer'
import { BookCard } from '../../components/BookCard/BookCard'
import { Pagination } from '../../components/Pagination/Pagination'
import { Spinner } from '../../components/Spinner/Spinner'
import { Subscription } from '../../components/Subscription/Subscription'
import { DataBook } from '../../types/interfaces'

export function NewBooks(): JSX.Element {
   const { data, pagesCounter, booksPerPage, loading, error } = useSelector((state: RootState) => state.books)
   const { pageNumber } = useParams<string>()
   const sliceStart: number = (Number(pageNumber) - 1) * booksPerPage
   const sliceEnd: number = sliceStart + booksPerPage
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchNewBooks())
   }, [dispatch, pageNumber])

   function renderNewBooks() {
      if (data.books) {
         return (
            data.books.slice(sliceStart, sliceEnd).map((book: DataBook) => (
               <BookCard data={book} key={book.isbn13} />
            )) as JSX.Element[]
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
         <Title className="text-uppercase fw-bold mt-4 mb-5">
            {error}
         </Title>
      )
   }

   return (
      <>
         <Title className="text-uppercase fw-bold mt-4 mb-5">
            New Releases Books
         </Title>
         <BookContainer>
            {renderNewBooks()}
         </BookContainer>

         <Pagination
            className="mt-5 mb-5"
            pageNumber={Number(pageNumber)}
            pagesCounter={pagesCounter}
            baseUrl='/new-books/page/'
         />

         <Subscription className="mt-2 mb-5"/>
      </>
   )
}