import { PropsChildren } from '../../types/interfaces'
import './main.scss'

export function Main ({ children }: PropsChildren): JSX.Element {
   return (
      <div className="main">
         <div className="main__container container-fluid">
            { children }
         </div>
      </div>
   )
}