import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { NewBooks } from './pages/NewBooks/NewBooks'
import { SearchList } from './pages/SearchList/SearchList'
import { SingleBook } from './pages/SingleBook/SingleBook'
import { Favorites } from './pages/Favorites/Favorites'
import { Cart } from './pages/Cart/Cart'
import { Auth } from './pages/Auth/Auth'
import { SignIn } from './pages/SignIn/SignIn'
import { SignUp } from './pages/SignUp/SignUp'

export const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: '/bookstore-project',
            element: <Navigate to='/bookstore-project/new-books/page/1' replace/>
         },
         {
            path: '/bookstore-project/new-books/page/:pageNumber',
            element: <NewBooks />
         },
         {
            path: '/bookstore-project/books/search/:searchValue/:pageNumber',
            element: <SearchList />
         },
         {
            path: '/bookstore-project/single-book/:isbn13',
            element: <SingleBook />
         },
         {
            path: '/bookstore-project/favorites',
            element: <Favorites />
         },
         {
            path: '/bookstore-project/cart',
            element: <Cart />
         },
         {
            path: '/bookstore-project/auth',
            element: <Auth />,
            children: [
               {
                  path: '/bookstore-project/auth',
                  element: <Navigate to='/bookstore-project/auth/sign-in' replace/>
               },
               {
                  path: '/bookstore-project/auth/sign-in',
                  element: <SignIn />
               },
               {
                  path: '/bookstore-project/auth/sign-up',
                  element: <SignUp />
               }
            ]
         }
      ]
   }
])