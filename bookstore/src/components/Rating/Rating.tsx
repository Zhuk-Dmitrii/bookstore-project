import starActive from '../../images/star-active.png'
import starDisabled from '../../images/star-disabled.png'
import './rating.scss'

export function Rating({rating}: {rating: string}): JSX.Element {
   function renderRatingStar(): JSX.Element[] {
      const star = []

      for (let i: number = 1; i <= 5; i++) {
         if (i <= Number(rating)) {
            star.push(
               <img key={i} src={starActive} />
            )
         } else {
            star.push(
               <img key={i} src={starDisabled} />
            )
         }
      }

      return star
   }

   return (
      <div className="rating">
         {renderRatingStar()}
      </div>
   )
}