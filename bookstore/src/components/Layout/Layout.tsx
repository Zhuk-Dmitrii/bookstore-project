import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Footer } from '../Footer/Footer'
import { Search } from '../Search/Search'
import './layout.scss'

export function Layout (): JSX.Element {
   return (
      <div className="layout">
         <Header>
            <h1>BOOKSTORE</h1>
            <Search />
         </Header>

         <Main>
            <Outlet />
         </Main>

         <Footer>
            <h1>Footer</h1>
         </Footer>
      </div>
   )
}