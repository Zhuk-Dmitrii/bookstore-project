import { useState } from 'react'
import { NavAuth } from '../../components/NavAuth/NavAuth'
import { InputForm } from '../../components/InputForm/InputForm'
import { Button } from '../../components/Button/Button'
import './signIn.scss'

export function SignIn(): JSX.Element {
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')

   function handleChangeEmail (value: string): void {
      setEmail(value)
   }

   function handleChangePassword (value: string): void {
      setPassword(value)
   }

   function handleSubmit (event: React.FormEvent<HTMLFormElement>): void {
      event.preventDefault()

      const data = {
         email,
         password
      }
      console.log(data)
      
      setEmail('')
      setPassword('')
   }

   return (
      <div className="sign-in">
         <NavAuth />
         <form onSubmit={handleSubmit} className="sign-in__form">
            <InputForm
               className="sign-in__email"
               id="email"
               type="email"
               placeholder="Your email"
               value={email}
               onchange={handleChangeEmail}
            >
               Email
            </InputForm>

            <InputForm
               className="sign-in__password"
               id="password"
               type="password"
               placeholder="Your password"
               value={password}
               onchange={handleChangePassword}
            >
               Password
            </InputForm>
            <a href="#">Forgot password?</a>
            <Button className="btn btn-dark rounded-0 w-100 p-2 mt-4 mb-3" value="SIGN IN" />
         </form>
      </div>
   )
}