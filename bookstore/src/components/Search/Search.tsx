import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './search.scss'

export function Search(): JSX.Element {
   const [searchValue, setSearchValue] = useState<string>('')
   const navigate = useNavigate()

   function handleInputSearch(event: React.ChangeEvent<HTMLInputElement>) {
      setSearchValue(event.target.value)
   }

   function handleSubmitSearch(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault()
      if (searchValue.trim() != '') {
         navigate(`/books/search/${searchValue}/1`)
      }
      setSearchValue('')
   }

   return (
      <form className="d-flex w-50" onSubmit={handleSubmitSearch}>
         <input
            className={`${searchValue ? 'none-bg-img' : ''} search-input form-control me-2`}
            type="search"
            placeholder="Search"
            value={searchValue}
            onChange={handleInputSearch}
         />
      </form>
   )
}