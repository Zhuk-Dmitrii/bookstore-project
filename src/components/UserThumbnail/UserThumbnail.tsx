import { Link } from 'react-router-dom'
import userThumbnail from '../../images/user-thumbnail.png'

export function UserThumbnail(): JSX.Element {
   return (
      <Link to="/bookstore-project/auth" className="user-thumbnail">
         <img src={userThumbnail} />
      </Link>
   )
}