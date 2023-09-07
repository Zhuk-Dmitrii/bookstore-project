import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Button } from '../Button/Button'
import { Quantity } from '../Quantity/Quantity'
import { PropsCounter, ResponseSingleBook } from '../../types/interfaces'
import './quantityControl.scss'

export function QuantityControl({className = '', data}: PropsCounter): JSX.Element {
   const { dataCart } = useSelector((state: RootState) => state.books)

   function getQuantity(): number {
      return dataCart.filter((book: ResponseSingleBook) => book.isbn13 === data.isbn13).length
   }

   return (
      <div className={`counter ${className}`}>
         <Button className="button-counter button-decrement btn btn-primary" value="-" dataRole='decrement' data={data}/>
         <Quantity className="counter-value" value={getQuantity()} />
         <Button className="button-counter button-increment btn btn-primary" value="+" dataRole='increment' data={data}/>
      </div>
   )
}