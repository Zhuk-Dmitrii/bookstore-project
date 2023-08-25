import { Back } from '../../components/Back/Back'
import { BookInfo } from '../../components/BookInfo/BookInfo'
import { Tabs } from '../../components/Tabs/Tabs'
import { Subscription } from '../../components/Subscription/Subscription'

export function SingleBook (): JSX.Element {
   return (
      <>
         <Back className='mt-5'/>
         <BookInfo className='mt-4'/>
         <Tabs className='mt-5'/>
         <Subscription className='mt-5 mb-4'/>
      </>
   )
}