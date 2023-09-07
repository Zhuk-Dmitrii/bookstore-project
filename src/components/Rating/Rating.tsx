import starActive from '../../images/star-active.png'
import starDisabled from '../../images/star-disabled.png'
import './rating.scss'

export function Rating({ rating }: { rating: string }): JSX.Element {
   function renderRatingStar(): JSX.Element[] {
      const star = []

      for (let i: number = 1; i <= 5; i++) {
         star.push(
            <img key={i} src={i <= Number(rating) ? starActive : starDisabled} />
         )
      }

      return star
   }

   return (
      <div className="rating">
         {renderRatingStar()}
      </div>
   )
}