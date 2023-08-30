import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Link } from 'react-router-dom'
import favoritesThumbnail from '../../images/favorites-thumbnail.png'
import './favoritesThumbnail.scss'

export function FavoritesThumbnail (): JSX.Element {
   const { dataFavorites } = useSelector((state: RootState) => state.books)

   function renderCounter () {
      if (dataFavorites && dataFavorites.length > 0) {
         return (
            <span className="favorites-thumbnail__counter">{dataFavorites.length}</span>
         )
      }

      return
   }

   return (
      <Link to='/favorites' className="favorites-thumbnail">
         <img src={favoritesThumbnail} alt="упс" />
         {renderCounter()}
      </Link>
   )
}