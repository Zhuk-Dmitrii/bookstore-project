import { useForm } from 'react-hook-form'
import { NavAuth } from '../../components/NavAuth/NavAuth'
import { InputForm } from '../../components/InputForm/InputForm'
import { Button } from '../../components/Button/Button'
import { IFormInput } from '../../types/interfaces'
import './signIn.scss'

export function SignIn(): JSX.Element {
   const { register, handleSubmit, reset } = useForm()

   function onSubmit(data: IFormInput): void {
      console.log(data)
      reset()
   }

   return (
      <div className="sign-in">
         <NavAuth />
         <form onSubmit={handleSubmit(onSubmit)} className="sign-in__form">
            <InputForm
               className="sign-in__email"
               id="email"
               type="email"
               placeholder="Your email"
               name="email"
               register={register}
            >
               Email
            </InputForm>

            <InputForm
               className="sign-in__password"
               id="password"
               type="password"
               placeholder="Your password"
               name="password"
               register={register}
            >
               Password
            </InputForm>
            <a href="#">Forgot password?</a>
            <Button className="btn btn-dark rounded-0 w-100 p-2 mt-4 mb-3" value="SIGN IN" type="submit" />
         </form>
      </div>
   )
}