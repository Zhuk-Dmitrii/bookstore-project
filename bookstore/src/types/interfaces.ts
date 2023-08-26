export interface PropsChildren {
   children: React.ReactNode
   className?: string
}

export interface PropsTitle {
   children: React.ReactNode
   className?: string
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

export interface initialStateBook {
   data: ResponseSingleBook,
   loading: boolean,
   error: null | string
}

export interface initialStateBooks {
   data: ResponseBooks,
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