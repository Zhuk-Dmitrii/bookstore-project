import { PropsCounterValue } from '../../types/interfaces'

export function CounterValue ({ className, value }: PropsCounterValue): JSX.Element {
   return (
      <span className={className}>
         {value}
      </span>
   )
}