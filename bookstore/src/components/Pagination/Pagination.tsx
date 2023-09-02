import { NavLink } from 'react-router-dom'
import { PaginationBooks } from '../../types/interfaces'
import './pagination.scss'

export function Pagination({ className = '', pageNumber, pagesCounter, baseUrl, routeParameter = '' }: PaginationBooks): JSX.Element | undefined {
   function buildPaginationScheme() {
      const pageBeforePrev: number = pageNumber - 2
      const prevPageNumber: number = pageNumber - 1
      const nextPageNumber: number = pageNumber + 1
      const pageAfterNext: number = pageNumber + 2
      const paginationScheme: number[] = [1, pageBeforePrev, prevPageNumber, pageNumber, nextPageNumber, pageAfterNext, pagesCounter]
      const filteredPaginationScheme: number[] = paginationScheme.filter(item => item > 0 && item <= pagesCounter)
      const set: Set<number> = new Set(filteredPaginationScheme)
      const result: Array<number | string> = Array.from(set)

      if (Number(result[0]) + 1 !== Number(result[1])) result.splice(1, 0, '...')
      if (Number(result.at(-2)) + 1 !== Number(result.at(-1))) result.splice(result.length - 1, 0, '...')

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

   if (pagesCounter > 1) {
      return (
         <nav className={`pagination ${className}`}>
            <ul className="pagination flex-wrap">
               <li className="btn-control page-item">
                  <NavLink to={`${baseUrl}${routeParameter}${pageNumber - 1}`} className={pageNumber == 1 ? 'page-link disabled' : 'page-link'}>
                     Prev
                  </NavLink>
               </li>

               {renderPagination()}

               <li className="btn-control page-item">
                  <NavLink to={`${baseUrl}${routeParameter}${pageNumber + 1}`} className={pageNumber == pagesCounter ? 'page-link disabled' : 'page-link'}>
                     Next
                  </NavLink>
               </li>
            </ul>
         </nav>
      )
   }
}