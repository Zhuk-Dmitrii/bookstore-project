import { PropsCounterValue } from '../../types/interfaces'

export function Quantity({ className = '', value }: PropsCounterValue): JSX.Element {
   return (
      <span className={className}>
         {value}
      </span>
   )
}