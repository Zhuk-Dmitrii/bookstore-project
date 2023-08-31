import { PropsButton } from '../../types/interfaces'

export function Button({ className, value, type = 'button', onClick }: PropsButton): JSX.Element {
   function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
      onClick && onClick(event)
   }

   return (
      <button className={className} onClick={handleClick} type={type}>{value}</button>
   )
}