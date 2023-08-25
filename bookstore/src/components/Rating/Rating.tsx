import starActive from '../../images/star-activ.png'
import starDisabled from '../../images/star-disabled.png'
import './rating.scss'

export function Rating(): JSX.Element {
   const rating = {
      rating: '3',
   }

   function renderRatingStar(): JSX.Element[] {
      const star = []

      for (let i: number = 1; i <= 5; i++) {
         if (i <= Number(rating.rating)) {
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