import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState, useAppDispatch } from '../../redux/store'
import { fetchSearchBooks } from '../../redux/booksSlice'
import { BookContainer } from '../../components/BookContainer/BookContainer'
import { BookCard } from '../../components/BookCard/BookCard'
import { Pagination } from '../../components/Pagination/Pagination'
import { Spinner } from '../../components/Spinner/Spinner'
import { Back } from '../../components/Back/Back'
import { DataBooks } from '../../types/interfaces'

export function SearchList (): JSX.Element {
   const { searchValue, pageNumber } = useParams<{searchValue?: string, pageNumber?: string}>()
   const { data, pagesCounter, loading, error } = useSelector((state: RootState) => state.books)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchSearchBooks({search: searchValue, page: pageNumber} ))
   }, [dispatch, searchValue, pageNumber])

   function renderSearchBooks () {
      if (data.books) {
         return (
            data.books.map((book: DataBooks) => {
               return <BookCard key={book.isbn13} data={book} />
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
         <h1 className="text-uppercase fw-bold mt-4 mb-5">{error}</h1>
      )
   }

   return (
      <>
         <h1 className="mt-4 mb-2">
            '{searchValue}' search results
         </h1>
         <p className="text-body-tertiary">Found {data.total} books</p>

         <Back className='mb-5'/>

         <BookContainer>
            {renderSearchBooks()}
         </BookContainer>

         <Pagination
            pageNumber={Number(pageNumber)}
            pagesCounter={pagesCounter}
            baseUrl='/books/search/'
            routeParameter={searchValue + '/'}
         />
      </>
   )
}