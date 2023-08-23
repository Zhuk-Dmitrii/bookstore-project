import { client } from '../utils/client'
import { newBooksEndpoints, searchBooksEndpoints } from '../api'
import { ResponseBooks } from '../types/interfaces'

export const requestNewBooks = async (): Promise<ResponseBooks> => {
   const { data } = await client.get<ResponseBooks>(newBooksEndpoints)

   return data as ResponseBooks
}

export const requestSearchBooks = async (search?: string, page?: string): Promise<ResponseBooks> => {
   const response = await client.get<ResponseBooks>(searchBooksEndpoints + '/' + search + '/' + page)
   
   return response.data as ResponseBooks
}