import { useForm } from 'react-hook-form'
import { NavAuth } from '../../components/NavAuth/NavAuth'
import { InputForm } from '../../components/InputForm/InputForm'
import { Button } from '../../components/Button/Button'
import { IFormInput } from '../../types/interfaces'
import './signUp.scss'

export function SignUp(): JSX.Element {
   const { register, handleSubmit, reset } = useForm()

   function onSubmit(data: IFormInput): void {
      console.log(data)
      reset()
   }

   return (
      <div className="sign-up">
         <NavAuth />
         <form onSubmit={handleSubmit(onSubmit)} className="sign-up__form">
            <InputForm
               className="sign-up__username"
               id="username"
               type="text"
               placeholder="Your name"
               name="name"
               register={register}
            >
               Name
            </InputForm>

            <InputForm
               className="sign-up__email"
               id="email"
               type="email"
               placeholder="Your email"
               name="email"
               register={register}
            >
               Email
            </InputForm>

            <InputForm
               className="sign-up__password"
               id="password"
               type="password"
               placeholder="Your password"
               name="password"
               register={register}
            >
               Password
            </InputForm>

            <InputForm
               className="sign-up__confirm-password"
               id="confirm-password"
               type="password"
               placeholder="Confirm your password"
               name="confirmPassword"
               register={register}
            >
               Confirm password
            </InputForm>
            <Button className="btn btn-dark rounded-0 w-100 p-2 mt-4 mb-3" value="SIGN UP" type="submit" />
         </form>
      </div>
   )
}