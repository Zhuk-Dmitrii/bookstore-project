import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Button } from '../Button/Button'
import { ResponseSingleBook } from '../../types/interfaces'
import './totalCost.scss'

export function TotalCost({className}: {className?: string}): JSX.Element {
   const { dataCart }: { dataCart: ResponseSingleBook[] } = useSelector((state: RootState) => state.books)

   function getSumTotal(): number {
      if (dataCart) {
         const sum: number = dataCart.reduce((sum: number, book: ResponseSingleBook) => sum + Number(book.price.slice(1)), 0)

         return Number(sum.toFixed(2))
      }

      return 0
   }

   function getVAT(): number {
      const VAT_RATE: number = 0.2
      const vat: number = getSumTotal() * VAT_RATE

      return Number(vat.toFixed(2))
   }

   function getTotalCost(): number {
      const cost = getSumTotal() + getVAT()

      return Number(cost.toFixed(2))
   }

   return (
      <div className={`total-cost ${className}`}>
         <div className="total-cost__item item-sum">
            <p className="total-cost__item_name">Sum total</p>
            <p className="total-cost__item_value">${getSumTotal()}</p>
         </div>

         <div className="total-cost__item item-vat">
            <p className="total-cost__item_name">VAT</p>
            <p className="total-cost__item_value">${getVAT()}</p>
         </div>

         <div className="total-cost__item item-total">
            <p className="total-cost__item_name">Total:</p>
            <p className="total-cost__item_value">${getTotalCost()}</p>
         </div>

         <Button className="btn btn-dark rounded-0 mt-5" type='submit' value="CHECK OUT" />
      </div>
   )
}