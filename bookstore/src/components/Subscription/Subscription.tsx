import { Button } from '../Button/Button'
import './subscription.scss'

export function Subscription ({className}: {className?: string}): JSX.Element {
   return (
      <div className={`subscription ${className}`}>
         <div className="subscription__container">
            <p className="subscription__title">
               Subscribe to Newsletter
            </p>
            <p className="subscription__subtitle">
               Be the first to know about new IT books, upcoming releases, exclusive offers and more.
            </p>
            <form className="subscription__form">
               <input type="text" placeholder='Your email'/>
               <Button className="btn btn-dark rounded-0" value="SUBSCRIBE" />
            </form>
         </div>
      </div>
   )
}