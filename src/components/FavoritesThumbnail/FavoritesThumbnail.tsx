import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'
import { CounterValue } from '../CounterValue/CounterValue'
import favoritesThumbnail from '../../images/favorites-thumbnail.png'
import './favoritesThumbnail.scss'

export function FavoritesThumbnail(): JSX.Element {
   const { dataFavorites } = useSelector((state: RootState) => state.books)

   function renderCounterValue(): JSX.Element | undefined {
      if (dataFavorites && dataFavorites.length > 0) {
         return (
            <CounterValue className="favorites-thumbnail__counter-value" value={dataFavorites.length} />
         )
      }
   }

   return (
      <Link to="/favorites" className="favorites-thumbnail">
         <img src={favoritesThumbnail} alt="упс" />
         {renderCounterValue()}
      </Link>
   )
}