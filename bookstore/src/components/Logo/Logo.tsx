import { NavLink } from 'react-router-dom'
import './logo.scss'

export function Logo (): JSX.Element {
   return (
      <NavLink to="/" className="logo">
         bookstore
      </NavLink>
   )
}