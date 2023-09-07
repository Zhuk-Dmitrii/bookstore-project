import { PropsQuantity } from '../../types/interfaces'

export function Quantity({ className = '', value }: PropsQuantity): JSX.Element {
   return (
      <span className={className}>
         {value}
      </span>
   )
}