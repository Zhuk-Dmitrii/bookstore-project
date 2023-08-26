import { client } from '../utils/client'
import { newBooksEndpoints, searchBooksEndpoints, bookEndpoints } from '../api'
import { ResponseBooks, ResponseSingleBook } from '../types/interfaces'

export const requestNewBooks = async (): Promise<ResponseBooks> => {
   const { data } = await client.get<ResponseBooks>(newBooksEndpoints)

   return data as ResponseBooks
}

export const requestSearchBooks = async (search?: string, page?: string): Promise<ResponseBooks> => {
   const response = await client.get<ResponseBooks>(searchBooksEndpoints + '/' + search + '/' + page)
   
   return response.data as ResponseBooks
}

export const requestBookByIsbn13 = async (isbn13: string): Promise<ResponseSingleBook> => {
   const { data } = await client.get<ResponseSingleBook>(bookEndpoints + '/' + isbn13)

   return data as ResponseSingleBook
}