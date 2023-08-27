import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { NewBooks } from './pages/NewBooks/NewBooks'
import { SearchList } from './pages/SearchList/SearchList'
import { SingleBook } from './pages/SingleBook/SingleBook'
import { Auth } from './pages/Auth/Auth'
import { SignIn } from './pages/SignIn/SignIn'
import { SignUp } from './pages/SignUp/SignUp'

export const router = createBrowserRouter([
   {
      element: <Layout />,
      children: [
         {
            path: '/',
            element: <Navigate to='/new-books/page/1' replace/>
         },
         {
            path: '/new-books/page/:pageNumber',
            element: <NewBooks />
         },
         {
            path: '/books/search/:searchValue/:pageNumber',
            element: <SearchList />
         },
         {
            path: '/single-book/:isbn13',
            element: <SingleBook />
         },
         {
            path: '/auth',
            element: <Auth />,
            children: [
               {
                  path: '/auth',
                  element: <Navigate to='/auth/sign-in' replace/>
               },
               {
                  path: '/auth/sign-in',
                  element: <SignIn />
               },
               {
                  path: '/auth/sign-up',
                  element: <SignUp />
               }
            ]
         }
      ]
   }
])