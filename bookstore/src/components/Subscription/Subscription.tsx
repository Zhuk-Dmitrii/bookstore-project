import { useState } from 'react'
import { Button } from '../Button/Button'
import './subscription.scss'

export function Subscription({ className = '' }: { className?: string }): JSX.Element {
   const [email, setEmail] = useState('')

   function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>): void {
      setEmail(event.target.value)
   }

   function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
      event.preventDefault()

      const data = {
         email
      }
      console.log(data)
      setEmail('')
   }

   return (
      <div className={`subscription ${className}`}>
         <div className="subscription__container">
            <p className="subscription__title">
               Subscribe to Newsletter
            </p>
            <p className="subscription__subtitle">
               Be the first to know about new IT books, upcoming releases, exclusive offers and more.
            </p>
            <form onSubmit={handleSubmit} className="subscription__form">
               <input value={email} onChange={handleChangeEmail} type="email" placeholder="Your email" />
               <Button className="btn btn-dark rounded-0" type="submit" value="SUBSCRIBE" />
            </form>
         </div>
      </div>
   )
}