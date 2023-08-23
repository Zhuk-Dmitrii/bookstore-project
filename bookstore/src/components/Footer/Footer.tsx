import { PropsChildren } from '../../types/interfaces'
import './footer.scss'

export function Footer ({ children }: PropsChildren): JSX.Element {
   return (
      <div className="footer">
         <div className="footer__container container-fluid">
            { children }
         </div>
      </div>
   )
}