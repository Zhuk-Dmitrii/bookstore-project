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
   value: string,
   onchange: (value: string) => void
}

export interface PropsFavoriteBtn {
   className: string,
   data: ResponseSingleBook,
}

export interface PropsBookCard {
   children?: React.ReactNode,
   data: DataBook
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
   pdf?: object
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
   pagesCounter: number,
   booksPerPage: number,
   loading: boolean,
   error: null | string
}

export interface PaginationBooks {
   pageNumber: number,
   pagesCounter: number,
   baseUrl: string,
   routeParameter?: string,
}