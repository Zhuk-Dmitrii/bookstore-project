import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Footer } from '../Footer/Footer'
import { Search } from '../Search/Search'
import { Logo } from '../Logo/Logo'
import { HeaderNavIcons } from '../HeaderNavIcons/HeaderNavIcons'
import { UserThumbnail } from '../UserThumbnail/UserThumbnail'
import { FavoritesThumbnail } from '../FavoritesThumbnail/FavoritesThumbnail'
import './layout.scss'

export function Layout(): JSX.Element {
   return (
      <div className="layout">
         <Header>
            <Logo />
            <Search />
            <HeaderNavIcons>
               <FavoritesThumbnail />
               <UserThumbnail />
            </HeaderNavIcons>
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