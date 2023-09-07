import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'
import { Quantity } from '../Quantity/Quantity'
import cartThumbnail from '../../images/cart-thumbnail.png'
import './cartThumbnail.scss'

export function CartThumbnail(): JSX.Element {
   const { dataCart } = useSelector((state: RootState) => state.books)

   function renderQuantity(): JSX.Element | undefined {
      if (dataCart && dataCart.length > 0) {
         return (
            <Quantity className="cart-thumbnail__quantity" value={dataCart.length} />
         )
      }
   }

   return (
      <Link to="/cart" className="cart-thumbnail">
         <img src={cartThumbnail} alt="упс" />
         {renderQuantity()}
      </Link>
   )
}