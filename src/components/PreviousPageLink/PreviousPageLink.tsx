import back from '../../images/back.png'
import './PreviousPageLink.scss'

export function PreviousPageLink ({ className = '' }: { className?: string }): JSX.Element {
   function handleClickImage (): void {
      window.history.back()
   }

   return (
      <div className={`back ${className}`}  onClick={handleClickImage}>
         <img src={back}/>
      </div>
   )
}