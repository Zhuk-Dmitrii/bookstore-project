import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import { PaginationBooks } from '../../types/interfaces'
import './pagination.scss'

export function Pagination({ className = '', pageNumber, pagesCounter, baseUrl, routeParameter = '' }: PaginationBooks): JSX.Element | undefined {
   const navigate = useNavigate()

   function buildPaginationScheme() {
      const pageBeforePrev: number = pageNumber - 2
      const prevPageNumber: number = pageNumber - 1
      const nextPageNumber: number = pageNumber + 1
      const pageAfterNext: number = pageNumber + 2
      const scheme: number[] = [1, pageBeforePrev, prevPageNumber, pageNumber, nextPageNumber, pageAfterNext, pagesCounter]
      const filteredScheme: number[] = scheme.filter(item => item > 0 && item <= pagesCounter)
      const set: Set<number> = new Set(filteredScheme)
      const result: Array<number | string> = Array.from(set)

      if (Number(result[0]) + 1 !== result[1]) result.splice(1, 0, '...')
      if (Number(result.at(-2)) + 1 !== result.at(-1)) result.splice(result.length - 1, 0, '...')

      return result
   }

   function renderPagination(): JSX.Element[] {
      const paginationScheme = buildPaginationScheme()

      return paginationScheme.map((pageNumber, index) => {
         if (String(pageNumber) == '...') {
            return (
               <li className="page-item disabled" key={index}>
                  <span className="page-link">...</span>
               </li>
            )
         }

         return (
            <li className="page-item" key={index}>
               <NavLink to={`${baseUrl}${routeParameter}${pageNumber}`} className={({ isActive }) => isActive ? 'page-link active' : 'page-link'}>
                  {pageNumber}
               </NavLink>
            </li>
         )
      })
   }

   function handleClickPrevButton() {
      navigate(`${baseUrl}${routeParameter}${pageNumber - 1}`)
   }

   function handleClickNextButton() {
      navigate(`${baseUrl}${routeParameter}${pageNumber + 1}`)
   }

   if (pagesCounter > 1) {
      return (
         <nav className={`pagination ${className}`}>
            <Button
               className={`btn btn-primary px-3 mx-3 ${pageNumber == 1 ? 'disabled' : ''}`}
               value='Prev'
               type='button'
               onClick={handleClickPrevButton}
            />
            <ul className="pagination flex-wrap">
               {renderPagination()}
            </ul>
            <Button
               className={`btn btn-primary px-3 mx-3 ${pageNumber == pagesCounter ? 'disabled' : ''}`}
               value='Next'
               type='button'
               onClick={handleClickNextButton}
            />
         </nav>
      )
   }
}

