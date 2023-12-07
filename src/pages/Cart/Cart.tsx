import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import { deleteAllFromCart } from '../../redux/booksSlice'
import { BookContainer } from '../../components/BookContainer/BookContainer'
import { BookCard } from '../../components/BookCard/BookCard'
import { PreviousPageLink } from '../../components/PreviousPageLink/PreviousPageLink'
import { Title } from '../../components/Title/Title'
import { Button } from '../../components/Button/Button'
import { QuantityControl } from '../../components/QuantityControl/QuantityControl'
import { TotalCost } from '../../components/TotalCost/TotalCost'
import { ResponseSingleBook } from '../../types/interfaces'
import './cart.scss'

export function Cart(): JSX.Element {
   const { dataCart }: { dataCart: ResponseSingleBook[] } = useSelector((state: RootState) => state.books)
   const dispatch = useAppDispatch()
   const navigate = useNavigate()

   function getCost(book: ResponseSingleBook): number {
      const filteredData: ResponseSingleBook[] = dataCart.filter((item: ResponseSingleBook) => item.isbn13 === book.isbn13)
      const cost: number = filteredData.reduce((sum: number, bookItem: ResponseSingleBook) => sum + Number(bookItem.price.slice(1)), 0)

      return Number(cost.toFixed(2))
   }
   
   function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
      event.preventDefault()

      console.log(dataCart)
      dispatch(deleteAllFromCart())
      navigate('/bookstore-project')
   }

   function renderCart() {
      if (dataCart) {
         const set: Set<string> = new Set(dataCart.map((book: ResponseSingleBook) => JSON.stringify(book)))
         const result: ResponseSingleBook[] = Array.from(set).map((book) => JSON.parse(book))

         return result.map((book: ResponseSingleBook) => {
            return (
               <BookCard data={book} key={book.isbn13}>
                  <Button className="button-delete btn btn-dark" value="X" dataRole='delete' data={book} />
                  <QuantityControl className="w-50 mb-3" data={book} />
                  <p className="text-center fs-4 fw-bold mt-1">${getCost(book)}</p>
               </BookCard>
            )
         })
      }
   }

   return (
      <>
         <PreviousPageLink className="mt-5" />

         <Title className="text-uppercase fw-bold mt-4 mb-5">
            Your cart
         </Title>

         <form onSubmit={handleSubmit}>
            <BookContainer>
               {renderCart()}
            </BookContainer>
            <TotalCost className="mb-5" />
         </form>
      </>
   )
}