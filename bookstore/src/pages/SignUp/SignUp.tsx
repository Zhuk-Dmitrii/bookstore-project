import { useState } from 'react'
import { NavAuth } from '../../components/NavAuth/NavAuth'
import { InputForm } from '../../components/InputForm/InputForm'
import { Button } from '../../components/Button/Button'
import './signUp.scss'

export function SignUp(): JSX.Element {
   const [userName, setUserName] = useState<string>('')
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [confirmPassword, setConfirmPassword] = useState<string>('')

   function handleChangeUserName(value: string): void {
      setUserName(value)
   }

   function handleChangeEmail(value: string): void {
      setEmail(value)
   }

   function handleChangePassword(value: string): void {
      setPassword(value)
   }

   function handleChangeConfirmPassword(value: string): void {
      setConfirmPassword(value)
   }

   function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
      event.preventDefault()

      const data = {
         userName,
         email,
         password,
         confirmPassword
      }
      console.log(data)

      setUserName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
   }

   return (
      <div className="sign-up">
         <NavAuth />
         <form onSubmit={handleSubmit} className="sign-up__form">
            <InputForm
               className="sign-up__username"
               id="username"
               type="text"
               placeholder="Your name"
               value={userName}
               onchange={handleChangeUserName}
            >
               Name
            </InputForm>

            <InputForm
               className="sign-up__email"
               id="email"
               type="email"
               placeholder="Your email"
               value={email}
               onchange={handleChangeEmail}
            >
               Email
            </InputForm>

            <InputForm
               className="sign-up__password"
               id="password"
               type="password"
               placeholder="Your password"
               value={password}
               onchange={handleChangePassword}
            >
               Password
            </InputForm>

            <InputForm
               className="sign-up__confirm-password"
               id="confirm-password"
               type="password"
               placeholder="Confirm your password"
               value={confirmPassword}
               onchange={handleChangeConfirmPassword}
            >
               Confirm password
            </InputForm>
            <Button className="btn btn-dark rounded-0 w-100 p-2 mt-4 mb-3" value="SIGN UP" />
         </form>
      </div>
   )
}