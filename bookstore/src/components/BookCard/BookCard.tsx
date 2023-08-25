import { Link } from 'react-router-dom'
import { DataBooks } from '../../types/interfaces'
import './bookCard.scss'

export function BookCard ({ data }: { data: DataBooks }): JSX.Element {
   return (
      <Link to={`/single-book/${data.isbn13}`} className="book-card card">
         <img src={data.image} />
         <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="text-body-secondary">{data.price}</p>
         </div>
      </Link>
   )
}