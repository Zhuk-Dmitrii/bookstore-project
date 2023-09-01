import back from '../../images/back.png'
import './back.scss'

export function Back ({ className = '' }: { className?: string }): JSX.Element {
   function handleClickImage (): void {
      window.history.back()
   }

   return (
      <div className={`back ${className}`}  onClick={handleClickImage}>
         <img src={back}/>
      </div>
   )
}