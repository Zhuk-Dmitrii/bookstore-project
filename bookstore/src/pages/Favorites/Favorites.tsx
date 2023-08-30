import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { BookContainer } from '../../components/BookContainer/BookContainer'
import { BookCard } from '../../components/BookCard/BookCard'
import { Back } from '../../components/Back/Back'
import { Title } from '../../components/Title/Title'
import { FavoritesControl } from '../../components/FavoritesControl/FavoritesControl'
import { ResponseSingleBook } from '../../types/interfaces'
import './favorites.scss'

export function Favorites (): JSX.Element {
   const { dataFavorites }: { dataFavorites: ResponseSingleBook[] } = useSelector((state: RootState) => state.books)

   function renderFavorites () {
      if (dataFavorites) {
         return dataFavorites.map((book: ResponseSingleBook) => {
            return (
               <BookCard data={book} key={book.isbn13}>
                  <FavoritesControl data={book} className='favorites-control'/>
               </BookCard>
            )
         })
      }
   }

   return (
      <>
         <Back className='mt-5' />
         <Title className="text-uppercase fw-bold mt-4 mb-5">
            Favorites
         </Title>
         <BookContainer>
            {renderFavorites()}
         </BookContainer>

      </>

   )
}