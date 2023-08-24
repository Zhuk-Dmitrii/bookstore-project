import { DataBooks } from '../../types/interfaces'

export function BookCard (props: { data: DataBooks }): JSX.Element {
   return (
      <div className="card">
         <img src={props.data.image} />
         <div className="card-body">
            <h5 className="card-title">{props.data.title}</h5>
            <p className="text-body-secondary">{props.data.price}</p>
         </div>
      </div>
   )
}