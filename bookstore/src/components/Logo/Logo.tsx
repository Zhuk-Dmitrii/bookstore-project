import { Link } from 'react-router-dom'
import './logo.scss'

export function Logo (): JSX.Element {
   return (
      <Link to="/" className="logo">
         bookstore
      </Link>
   )
}