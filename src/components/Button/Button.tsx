import { PropsButton } from '../../types/interfaces'
import { onClickButton } from '../../helpers/onClickButton'

export function Button({ className = '', value, type = 'button', dataRole = '', data }: PropsButton): JSX.Element {
   function handleClickButton(event: React.MouseEvent<HTMLButtonElement>): void {
      onClickButton(event, data)
   }

   return (
      <button className={className} onClick={handleClickButton} type={type} data-role={dataRole}>{value}</button>
   )
}