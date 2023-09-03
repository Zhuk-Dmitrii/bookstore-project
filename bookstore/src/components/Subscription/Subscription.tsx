import { useForm } from 'react-hook-form'
import { Button } from '../Button/Button'
import { IFormInput } from '../../types/interfaces'
import './subscription.scss'

export function Subscription({ className = '' }: { className?: string }): JSX.Element {
   const { register, handleSubmit, reset } = useForm<IFormInput>()

   function onSubmit(data: IFormInput): void {
      console.log(data)
      reset()
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
            <form onSubmit={handleSubmit(onSubmit)} className="subscription__form">
               <input {...register('email', { required: true })} type="email" placeholder="Your email" />
               <Button className="btn btn-dark rounded-0" type="submit" value="SUBSCRIBE" />
            </form>
         </div>
      </div>
   )
}