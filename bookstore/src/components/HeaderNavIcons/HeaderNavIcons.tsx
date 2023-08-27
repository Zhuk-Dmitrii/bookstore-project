import { PropsChildren } from '../../types/interfaces'

export function HeaderNavIcons ({children}: PropsChildren): JSX.Element {
   return (
      <div className="nav-icons">
         {children}
      </div>
   )
}