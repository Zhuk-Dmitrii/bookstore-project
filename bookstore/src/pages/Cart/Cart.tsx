import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import { deleteFromCart, incrementToCart, decrementFromCart, deleteAllFromCart } from '../../redux/booksSlice'
import { BookContainer } from '../../components/BookContainer/BookContainer'
import { BookCard } from '../../components/BookCard/BookCard'
import { Back } from '../../components/Back/Back'
import { Title } from '../../components/Title/Title'
import { Button } from '../../components/Button/Button'
import { Counter } from '../../components/Counter/Counter'
import { TotalCost } from '../../components/TotalCost/TotalCost'
import { ResponseSingleBook } from '../../types/interfaces'
import './cart.scss'

export function Cart(): JSX.Element {
   const { dataCart }: { dataCart: ResponseSingleBook[] } = useSelector((state: RootState) => state.books)
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   function getCost(book: ResponseSingleBook): number {
      const filteredData: ResponseSingleBook[] = dataCart.filter((item: ResponseSingleBook) => item.isbn13 === book.isbn13)
      const cost: number =  filteredData.reduce((sum: number, bookItem: ResponseSingleBook) => sum + Number(bookItem.price.slice(1)), 0)

      return Number(cost.toFixed(2))
   }

   function handleClickButtonClose(book: ResponseSingleBook): void {
      dispatch(deleteFromCart(book))
   }

   function handleClickIncrement(book: ResponseSingleBook): void {
      dispatch(incrementToCart(book))
   }

   function handleClickDecrement(book: ResponseSingleBook): void {
      dispatch(decrementFromCart(book))
   }

   function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
      event.preventDefault()

      console.log(dataCart)
      dispatch(deleteAllFromCart())
      navigate('/')
   }

   function renderCart() {
      if (dataCart) {
         const set: Set<string> = new Set(dataCart.map((book: ResponseSingleBook) => JSON.stringify(book)))
         const result: ResponseSingleBook[] = Array.from(set).map((book) => JSON.parse(book))

         return result.map((book: ResponseSingleBook) => {
            return (
               <BookCard data={book} key={book.isbn13}>
                  <Button
                     className='button-delete btn btn-dark'
                     value='X'
                     onClick={() => handleClickButtonClose(book)}
                  />
                  <Counter
                     className="w-50 mb-3"
                     decrement={() => handleClickDecrement(book)}
                     increment={() => handleClickIncrement(book)} data={book}
                  />
                  <p className='text-center fs-4 fw-bold mt-1'>${getCost(book)}</p>
               </BookCard>
            )
         })
      }
   }

   return (
      <>
         <Back className='mt-5' />

         <Title className="text-uppercase fw-bold mt-4 mb-5">
            Your cart
         </Title>

         <form onSubmit={handleSubmit}>
            <BookContainer>
               {renderCart()}
            </BookContainer>
            <TotalCost className="mb-5"/>
         </form>
      </>
   )
}
