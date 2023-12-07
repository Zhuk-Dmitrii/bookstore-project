import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { IFormInput } from '../../types/interfaces'
import './search.scss'

export function Search(): JSX.Element {
   const navigate = useNavigate()
   const { register, handleSubmit, watch, reset } = useForm<IFormInput>()

   function onSubmit({ searchValue }: { searchValue: string }): void {
      if (searchValue.trim() != '') {
         const encodedSearchValue = encodeURIComponent(searchValue)
         navigate(`/bookstore-project/books/search/${encodedSearchValue}/1`)
      }

      reset()
   }

   return (
      <form className="d-flex w-50" onSubmit={handleSubmit(onSubmit)}>
         <input
            className={`${watch('searchValue') ? 'none-bg-img' : ''} search-input form-control me-2`}
            type="search"
            placeholder="Search"
            {...register('searchValue')}
         />
      </form>
   )
}