import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState, useAppDispatch } from '../../redux/store'
import { fetchSearchBooks } from '../../redux/booksSlice'
import { Title } from '../../components/Title/Title'
import { BookContainer } from '../../components/BookContainer/BookContainer'
import { BookCard } from '../../components/BookCard/BookCard'
import { Pagination } from '../../components/Pagination/Pagination'
import { Spinner } from '../../components/Spinner/Spinner'
import { DataBook, SearchParams } from '../../types/interfaces'

export function SearchList(): JSX.Element {
   const { searchValue, pageNumber } = useParams<SearchParams>()
   const { data, pagesCounter, loading, error } = useSelector((state: RootState) => state.books)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchSearchBooks({ search: searchValue, page: pageNumber }))
   }, [dispatch, searchValue, pageNumber])

   function renderSearchBooks() {
      if (data.books) {
         return (
            data.books.map((book: DataBook) => {
               return (
                  <BookCard key={book.isbn13} data={book} />
               )
            }) as JSX.Element[]
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
         <Title className="mt-4 mb-2">
            '{searchValue}' search results
         </Title>

         <p className="text-body-tertiary">Found {data.total} books</p>

         <BookContainer>
            {renderSearchBooks()}
         </BookContainer>

         <Pagination
            className="mt-5 mb-5"
            pageNumber={Number(pageNumber)}
            pagesCounter={pagesCounter}
            baseUrl="/bookstore-project/books/search/"
            routeParameter={searchValue + '/'}
         />
      </>
   )
}