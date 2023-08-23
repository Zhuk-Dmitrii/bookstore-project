import { NavLink } from 'react-router-dom'
import { PaginationBooks } from '../../types/interfaces'

export function Pagination ({pageNumber, pagesCounter, baseUrl, routeParameter = ''}: PaginationBooks): JSX.Element {
   function renderPaginationItems() {
      const pagination: JSX.Element[] = []
      const maxButtons: number = 5
      const activePage: number = pageNumber
      let startPage: number = Math.max(activePage - 2, 1)
      let endPage: number = Math.min(activePage + 2, pagesCounter)


      const ellipsis = (key: string): JSX.Element => <li className="page-item disabled" key={key}><span className="page-link">...</span></li>
      const switchButton = (name: string, active: boolean): JSX.Element => {
         return (
            <li className="page-item" key={name}>
               <NavLink to={`${baseUrl}${routeParameter}${name == 'next' ? activePage + 1 : activePage - 1}`} className={active ? 'page-link' : 'page-link disabled'}>
                  {name}
               </NavLink>
            </li>
         )
      }
      const navItem = (page: number): JSX.Element => {
         return (
            <li className="page-item" key={page}>
               <NavLink to={`${baseUrl}${routeParameter}${page}`} className={({ isActive }) => isActive ? 'page-link active' : 'page-link'}>
                  {page}
               </NavLink>
            </li>
         )
      }

      if (pagesCounter == 1) return

      if (activePage == 1) {
         pagination.push(switchButton('previous', false))
      } else {
         pagination.push(switchButton('previous', true))
      }

      if (pagesCounter <= maxButtons) {
         for (let pageNumber = 1; pageNumber <= pagesCounter; pageNumber++) {
            pagination.push(navItem(pageNumber))
         }

         if (activePage < pagesCounter) {
            pagination.push(switchButton('next', true))
         } else if (activePage == pagesCounter) {
            pagination.push(switchButton('next', false))
         }
         
         return pagination
      }

      if (activePage <= 4) {
         endPage = maxButtons
      } else if (activePage >= pagesCounter - 3) {
         startPage = pagesCounter - maxButtons 
      }

      if (startPage > 1) {
         pagination.push(navItem(1))
         if (startPage > 2) {
            pagination.push(ellipsis(`ellipsis-start`));
         }
      }

      for (let pageNumber = startPage; pageNumber <= endPage; pageNumber++) {
         pagination.push(navItem(pageNumber))
      }

      if (endPage < pagesCounter) {
         if (endPage < pagesCounter - 1) {
            pagination.push(ellipsis(`ellipsis-end`));
         }
         pagination.push(navItem(pagesCounter))
      }

      if (activePage < pagesCounter) {
         pagination.push(switchButton('next', true))
      } else if (activePage == pagesCounter) {
         pagination.push(switchButton('next', false))
      }

      return pagination
   }

   return (
      <nav>
         <ul className="pagination flex-wrap">
            {renderPaginationItems()}
         </ul>
      </nav>
   )
}