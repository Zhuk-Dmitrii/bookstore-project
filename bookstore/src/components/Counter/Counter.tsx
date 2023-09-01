import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../redux/store'
import { incrementToCart, decrementFromCart } from '../../redux/booksSlice'
import { Button } from '../Button/Button'
import { CounterValue } from '../CounterValue/CounterValue'
import { PropsCounter, ResponseSingleBook } from '../../types/interfaces'
import './counter.scss'

export function Counter({className = '', data}: PropsCounter): JSX.Element {
   const { dataCart } = useSelector((state: RootState) => state.books)
   const dispatch = useAppDispatch()

   function handleClickIncrement(): void {
      dispatch(incrementToCart(data))
   }

   function handleClickDecrement(): void {
      dispatch(decrementFromCart(data))
   }

   function getCounterValue(): number {
      return dataCart.filter((book: ResponseSingleBook) => book.isbn13 === data.isbn13).length
   }

   return (
      <div className={`counter ${className}`}>
         <Button className="button-counter button-decrement btn btn-primary" value="-" onClick={handleClickDecrement}/>
         <CounterValue className="counter-value" value={getCounterValue()} />
         <Button className="button-counter button-increment btn btn-primary" value="+" onClick={handleClickIncrement}/>
      </div>
   )
}