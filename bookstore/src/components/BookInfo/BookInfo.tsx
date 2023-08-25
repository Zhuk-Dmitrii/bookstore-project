import { Rating } from '../Rating/Rating'
import { Button } from '../Button/Button'
import './bookInfo.scss'

export function BookInfo ({className}: {className?: string}): JSX.Element {
   return (
      <>
         <div className={`book-info ${className}`}>
            <div className="book-info__image">
               <img src="https://itbook.store/img/books/9781617294136.png" alt="упс" />
            </div>

            <div className="book-info__content">
               <div className="book-info__title">
                  <p className="book-info__title_price">$1234</p>
                  <Rating />
               </div>

               <div className="book-info__description">
                  <div className="book-info__description-item">
                     <p className="book-info__description-item_paragraph">Authors</p>
                     <p className="book-info__description-item_text">Joyce Kay Avila</p>
                  </div>

                  <div className="book-info__description-item">
                     <p className="book-info__description-item_paragraph">publisher</p>
                     <p className="book-info__description-item_text">Manning</p>
                  </div>

                  <details>
                     <summary className="book-info__details">More details</summary>

                     <div className="book-info__description-item">
                        <p className="book-info__description-item_paragraph">language</p>
                        <p className="book-info__description-item_text">English</p>
                     </div>

                     <div className="book-info__description-item">
                        <p className="book-info__description-item_paragraph">year</p>
                        <p className="book-info__description-item_text">2018</p>
                     </div>
                  </details>
               </div>

               <Button className="btn btn-primary mt-5" value="ADD TO CART" />
               <a href="https://itbook.store/files/9781617294136/chapter2.pdf" className="book-info__preview-link" target="_blank">Preview book</a>
            </div>
         </div>
      </>
   )
}