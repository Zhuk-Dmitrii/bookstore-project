import { PropsChildren } from '../../types/interfaces'
import './header.scss'

export function Header ({ children }: PropsChildren): JSX.Element {
   return (
      <div className="header">
         <div className="header__container container-fluid">
            { children }
         </div>
      </div>
   )
}