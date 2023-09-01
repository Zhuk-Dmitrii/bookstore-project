import { PropsTitle } from '../../types/interfaces'

export function Title ({ children, className = '' }: PropsTitle): JSX.Element {
   return (
      <h1 className={`title ${className}`}>
         {children}
      </h1>
   )
}