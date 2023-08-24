import back from '../../images/back.png'

export function Back ({ className }: { className?: string }): JSX.Element {
   function handleClickImage (): void {
      window.history.back()
   }

   return (
      <div className={`back ${className}`}>
         <img src={back} onClick={handleClickImage}/>
      </div>
   )
}