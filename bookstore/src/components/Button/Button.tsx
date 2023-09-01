import { PropsButton } from '../../types/interfaces'

export function Button({ className = '', value, type = 'button', onClick }: PropsButton): JSX.Element {
   function handleClickButton(event: React.MouseEvent<HTMLButtonElement>): void {
      onClick && onClick(event)
   }

   return (
      <button className={className} onClick={handleClickButton} type={type}>{value}</button>
   )
}