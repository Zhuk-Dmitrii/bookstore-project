import { Link } from 'react-router-dom'
import userThumbnail from '../../images/user.png'

export function UserThumbnail (): JSX.Element {
   return (
      <Link to="/auth" className="user-thumbnail">
         <img src={userThumbnail} />
      </Link>
   )
}