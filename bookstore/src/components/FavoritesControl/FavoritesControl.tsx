import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../redux/store'
import { addBookFavorites, removeBookFavorites } from '../../redux/booksSlice'
import favoriteDisabled from '../../images/favorite-disabled.png'
import favoriteActive from '../../images/favorite-active.png'
import { PropsFavoriteBtn, ResponseSingleBook } from '../../types/interfaces'

export function FavoritesControl({ className, data}: PropsFavoriteBtn): JSX.Element {
   const isChecked: boolean = useSelector((state: RootState) => {
      return state.books.dataFavorites.some((book: ResponseSingleBook) => book.isbn13 === data.isbn13)
   })
   const dispatch = useAppDispatch()

   function handleClickInput (): void {
      if (isChecked) {
         dispatch(removeBookFavorites(data))
      } else {
         dispatch(addBookFavorites(data))
      }
   }

   return (
      <div className={className}>
         <input type="checkbox" className="btn-check" id={data.isbn13} checked={isChecked} onChange={handleClickInput} />
         <label  htmlFor={data.isbn13}>
            <img src={isChecked ? favoriteActive : favoriteDisabled} alt="" />
         </label>
      </div>
   )
}