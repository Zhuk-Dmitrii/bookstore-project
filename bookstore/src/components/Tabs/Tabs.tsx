import { useState } from 'react'
import { ResponseSingleBook } from '../../types/interfaces'
import './tabs.scss'

export function Tabs({ className, data }: { className?: string, data: ResponseSingleBook }): JSX.Element {
   const [selectedTab, setSelectedTab] = useState('description')

   function handleClickTab(tab: string): void {
      setSelectedTab(tab)
   }

   return (
      <>
         <nav className={`tabs ${className}`}>
            <ul className="tab__list">
               <li
                  className={`tab__item ${selectedTab === 'description' ? 'border-tab ' : ''}`}
                  onClick={() => handleClickTab('description')}
               >
                  Description
               </li>
               <li
                  className={`tab__item ${selectedTab === 'author' ? 'border-tab' : ''}`}
                  onClick={() => handleClickTab('author')}
               >
                  Author
               </li>
               <li
                  className={`tab__item ${selectedTab === 'reviews' ? 'border-tab' : ''}`}
                  onClick={() => handleClickTab('reviews')}
               >
                  Reviews
               </li>
            </ul>
         </nav>

         <div className="tabs__content">
            <div className={`tab__content ${selectedTab === 'description' ? 'active' : ''}`}>
               {data.desc}
            </div>
            <div className={`tab__content ${selectedTab === 'author' ? 'active' : ''}`}>
               {data.authors}
            </div>
            <div className={`tab__content ${selectedTab === 'reviews' ? 'active' : ''}`}>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Veritatis aliquid cupiditate non impedit, numquam eum, sunt ea
               quaerat doloremque reprehenderit repellendus sit, eveniet maxime
               quo odit corporis aut quam temporibus.
            </div>
         </div>
      </>
   )
}