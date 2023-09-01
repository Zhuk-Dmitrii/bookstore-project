import { NavLink } from 'react-router-dom'
import './navAuth.scss'

export function NavAuth(): JSX.Element {
   return (
      <div className="nav-auth">
         <NavLink to="/auth/sign-in" className="nav-auth__nav-item">sign in</NavLink>
         <NavLink to="/auth/sign-up" className="nav-auth__nav-item">sign up</NavLink>
      </div>
   )
}