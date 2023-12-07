import { Link } from 'react-router-dom'
import './logo.scss'

export function Logo(): JSX.Element {
   return (
      <Link to="/bookstore-project" className="logo">
         bookstore
      </Link>
   )
}