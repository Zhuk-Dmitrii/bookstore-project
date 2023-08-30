import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Link } from 'react-router-dom'
import { CounterValue } from '../CounterValue/CounterValue'
import cartThumbnail from '../../images/cart-thumbnail.png'
import './cartThumbnail.scss'

export function CartThumbnail(): JSX.Element {
   const { dataCart } = useSelector((state: RootState) => state.books)

   function renderCounterValue(): JSX.Element | undefined {
      if (dataCart && dataCart.length > 0) {
         return (
            <CounterValue className="cart-thumbnail__counter-value" value={dataCart.length} />
         )
      }
   }

   return (
      <Link to='/cart' className="cart-thumbnail">
         <img src={cartThumbnail} alt="упс" />
         {renderCounterValue()}
      </Link>
   )
}