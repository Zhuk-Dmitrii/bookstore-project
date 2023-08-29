import { PropsChildren } from '../../types/interfaces'
import './headerNavIcons.scss'

export function HeaderNavIcons ({children}: PropsChildren): JSX.Element {
   return (
      <div className="nav-icons">
         {children}
      </div>
   )
}