export interface PropsChildren {
   children: React.ReactNode
   className?: string
}

export interface PropsTitle {
   children: React.ReactNode
   className?: string
}

export interface DataBooks {
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
   books: DataBooks[]
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