import { Link } from 'react-router-dom'
import { PropsBookCard } from '../../types/interfaces'
import './bookCard.scss'

export function BookCard({ children, data, className = '' }: PropsBookCard): JSX.Element {
   return (
      <div className={`book-card card ${className}`}>
         <Link to={`/bookstore-project/single-book/${data.isbn13}`} className="text-decoration-none">
            <img src={data.image} className="book-card__image w-100" />
         </Link>
         <div className="card-body py-0">
            <h5 className="card-title">{data.title}</h5>
            <p className="text-body-secondary">{data.price}</p>
         </div>
         {children}
      </div>
   )
}