import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getBook } from '../../redux/bookSlice'
import { useAppDispatch, RootState } from '../../redux/store'
import { Spinner } from '../../components/Spinner/Spinner'
import { Back } from '../../components/Back/Back'
import { Title } from '../../components/Title/Title'
import { BookInfo } from '../../components/BookInfo/BookInfo'
import { Tabs } from '../../components/Tabs/Tabs'
import { Subscription } from '../../components/Subscription/Subscription'

export function SingleBook(): JSX.Element {
   const { isbn13 } = useParams<string>()
   const { data, loading, error } = useSelector((state: RootState) => state.book)
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (isbn13) {
         dispatch(getBook(isbn13))
      }
   }, [dispatch, isbn13])

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
         <Back className='mt-5' />
         <Title className='mt-3'>
            {data.title}
         </Title>
         <BookInfo className='mt-3' data={data}/>
         <Tabs className='mt-5' data={data}/>
         <Subscription className='mt-5 mb-4' />
      </>
   )
}