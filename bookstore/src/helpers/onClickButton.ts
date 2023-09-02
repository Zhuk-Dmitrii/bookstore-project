import { store } from '../redux/store'
import { incrementToCart, decrementFromCart, deleteFromCart } from '../redux/booksSlice'

export function onClickButton(event: React.MouseEvent<HTMLButtonElement>, data?: object): void {
   const { dataset } = event.target as HTMLButtonElement

   if (dataset.role === 'increment') {
      store.dispatch(incrementToCart(data))
   }

   if (dataset.role === 'decrement') {
      store.dispatch(decrementFromCart(data))
   }

   if (dataset.role === 'delete') {
      store.dispatch(deleteFromCart(data))
   }
}