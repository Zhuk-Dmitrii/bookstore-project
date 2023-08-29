import { Link } from 'react-router-dom'
import favoritesThumbnail from '../../images/favorites-thumbnail.png'

export function FavoritesThumbnail (): JSX.Element {
   return (
      <Link to='/favorites' className="favorites-thumbnail position-relative">
         <img src={favoritesThumbnail} alt="упс" />
         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-black">10</span>
      </Link>
   )
}