import { UseFormRegister } from "react-hook-form"

export interface PropsChildren {
   children: React.ReactNode,
}

export interface PropsTitle {
   children: React.ReactNode,
   className?: string
}

export interface PropsInputForm {
   className?: string,
   children?: React.ReactNode,
   id?: string,
   type: string,
   placeholder?: string,
   name: keyof IFormInput,
   register: UseFormRegister<IFormInput>,
}

export interface PropsFavoriteBtn {
   className: string,
   data: ResponseSingleBook,
}

export interface PropsBookCard {
   children?: React.ReactNode,
   data: DataBook,
   className?: string,
}

export interface PropsButton {
   className?: string,
   value: string,
   type?: 'button' | 'submit' | 'reset',
   dataRole?: string,
   data?: ResponseSingleBook
}

export interface PropsCounter {
   className?: string,
   data: ResponseSingleBook,
}

export interface PropsCounterValue {
   className?: string,
   value: string | number,
}

export interface ResponseSingleBook {
   error?: string,
   title: string,
   subtitle?: string,
   authors: string,
   publisher: string,
   language: string,
   isbn10?: string,
   isbn13: string,
   pages?: string,
   year: string,
   rating: string,
   desc: string,
   price: string,
   image: string,
   url?: string,
   pdf?: {
      'Free eBook': string,
      'Chapter 2': string
   }
}

export interface DataBook {
   title: string,
   subtitle?: string,
   isbn13?: string,
   price: string,
   image: string,
   url?: string
}

export interface ResponseBooks {
   error?: string,
   total?: string,
   page?: string,
   books: DataBook[]
}

export interface InitialStateBook {
   data: ResponseSingleBook,
   loading: boolean,
   error: null | string
}

export interface InitialStateBooks {
   data: ResponseBooks,
   dataFavorites: ResponseSingleBook[],
   dataCart: ResponseSingleBook[],
   pagesCounter: number,
   booksPerPage: number,
   loading: boolean,
   error: null | string
}

export interface PaginationBooks {
   className?: string,
   pageNumber: number,
   pagesCounter: number,
   baseUrl: string,
   routeParameter?: string,
}

export interface SearchParams {
   searchValue?: string,
   pageNumber?: string,
   [key: string]: string | undefined
}

export interface IFormInput {
   name: string,
   email: string,
   password: string,
   confirmPassword: string,
   searchValue: string,
}