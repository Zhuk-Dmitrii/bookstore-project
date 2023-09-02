import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Button } from '../Button/Button'
import { CounterValue } from '../CounterValue/CounterValue'
import { PropsCounter, ResponseSingleBook } from '../../types/interfaces'
import './counter.scss'

export function Counter({className = '', data}: PropsCounter): JSX.Element {
   const { dataCart } = useSelector((state: RootState) => state.books)

   function getCounterValue(): number {
      return dataCart.filter((book: ResponseSingleBook) => book.isbn13 === data.isbn13).length
   }

   return (
      <div className={`counter ${className}`}>
         <Button className="button-counter button-decrement btn btn-primary" value="-" dataRole='decrement' data={data}/>
         <CounterValue className="counter-value" value={getCounterValue()} />
         <Button className="button-counter button-increment btn btn-primary" value="+" dataRole='increment' data={data}/>
      </div>
   )
}