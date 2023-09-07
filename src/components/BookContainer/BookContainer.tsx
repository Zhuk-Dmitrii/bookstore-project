import { PropsChildren } from '../../types/interfaces'
import './bookContainer.scss'

export function BookContainer ({ children }: PropsChildren): JSX.Element {
   return (
      <div className="book-container">
         { children }
      </div>
   )
}