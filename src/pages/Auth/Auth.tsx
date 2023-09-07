import { Outlet } from 'react-router-dom'
import './auth.scss'

export function Auth(): JSX.Element {
   return (
      <div className="auth">
         <Outlet />
      </div>
   )
}