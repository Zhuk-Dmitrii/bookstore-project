import { DataNewBooks } from '../../types/interfaces'

export function BookCard (props: { data: DataNewBooks }): JSX.Element {
   return (
      <div className="card">
         <img src={props.data.image} className="mx-auto d-block" alt="" />
         <div className="card-body">
            <h5 className="card-title">{props.data.title}</h5>
            <p className="text-body-secondary">{props.data.price}</p>
         </div>
      </div>
   )
}