export interface PropsChildren {
   children: React.ReactNode
   className?: string
}

export interface PropsTitle {
   children: React.ReactNode
   className?: string
}

export interface ResponseBook {
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
      "Chapter 1"?: string,
      "Chapter 2"?: string,
      "Chapter 3"?: string,
      "Chapter 4"?: string,
      "Chapter 5"?: string,
   }
}

export interface ResponseBooks {
   error?: string,
   total?: string,
   page?: string,
   books: DataBooks[]
}

export interface DataBooks {
   title: string,
   subtitle?: string,
   isbn13?: string,
   price: string,
   image: string,
   url?: string
}

export interface initialStateBook {
   data: ResponseBook,
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