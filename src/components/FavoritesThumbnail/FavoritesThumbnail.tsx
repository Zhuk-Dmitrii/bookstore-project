import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'
import { Quantity } from '../Quantity/Quantity'
import favoritesThumbnail from '../../images/favorites-thumbnail.png'
import './favoritesThumbnail.scss'

export function FavoritesThumbnail(): JSX.Element {
   const { dataFavorites } = useSelector((state: RootState) => state.books)

   function renderQuantity(): JSX.Element | undefined {
      if (dataFavorites && dataFavorites.length > 0) {
         return (
            <Quantity className="favorites-thumbnail__quantity" value={dataFavorites.length} />
         )
      }
   }

   return (
      <Link to="/bookstore-project/favorites" className="favorites-thumbnail">
         <img src={favoritesThumbnail} alt="упс" />
         {renderQuantity()}
      </Link>
   )
}