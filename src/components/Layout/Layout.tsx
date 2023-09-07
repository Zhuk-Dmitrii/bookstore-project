import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { Footer } from '../Footer/Footer'
import { Search } from '../Search/Search'
import { Logo } from '../Logo/Logo'
import { HeaderNavIcons } from '../HeaderNavIcons/HeaderNavIcons'
import { UserThumbnail } from '../UserThumbnail/UserThumbnail'
import { FavoritesThumbnail } from '../FavoritesThumbnail/FavoritesThumbnail'
import { CartThumbnail } from '../CartThumbnail/CartThumbnail'
import './layout.scss'

export function Layout(): JSX.Element {
   return (
      <div className="layout">
         <Header>
            <Logo />
            <Search />
            <HeaderNavIcons>
               <FavoritesThumbnail />
               <CartThumbnail />
               <UserThumbnail />
            </HeaderNavIcons>
         </Header>

         <Main>
            <Outlet />
         </Main>

         <Footer />
      </div>
   )
}