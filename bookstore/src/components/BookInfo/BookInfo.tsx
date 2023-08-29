import { Rating } from '../Rating/Rating'
import { Button } from '../Button/Button'
import { FavoritesControl } from '../FavoritesControl/FavoritesControl'
import { ResponseSingleBook } from '../../types/interfaces'
import './bookInfo.scss'

export function BookInfo({ className, data }: { className?: string, data: ResponseSingleBook }): JSX.Element {
   return (
      <>
         <div className={`book-info ${className}`}>
            <div className="book-info__image">
               <img src={data.image} alt="упс" />
               <FavoritesControl
                  className="book-info__favorite book-favorite"
                  data={data}
               />
            </div>

            <div className="book-info__content">
               <div className="book-info__title">
                  <p className="book-info__title_price">{data.price}</p>
                  <Rating rating={data.rating} />
               </div>

               <div className="book-info__description">
                  <div className="book-info__description-item">
                     <p className="book-info__description-item_paragraph">Authors</p>
                     <p className="book-info__description-item_text">{data.authors}</p>
                  </div>

                  <div className="book-info__description-item">
                     <p className="book-info__description-item_paragraph">publisher</p>
                     <p className="book-info__description-item_text">{data.publisher}</p>
                  </div>

                  <details>
                     <summary className="book-info__details">More details</summary>

                     <div className="book-info__description-item">
                        <p className="book-info__description-item_paragraph">language</p>
                        <p className="book-info__description-item_text">{data.language}</p>
                     </div>

                     <div className="book-info__description-item">
                        <p className="book-info__description-item_paragraph">year</p>
                        <p className="book-info__description-item_text">{data.year}</p>
                     </div>
                  </details>
               </div>

               <Button className="btn btn-primary mt-5" value="ADD TO CART" />
               {data.pdf && <a href="" className="book-info__preview-link">Preview book</a>}
            </div>
         </div>
      </>
   )
}