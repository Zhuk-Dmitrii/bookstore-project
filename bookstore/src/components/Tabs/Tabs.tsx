import { useState } from 'react'
import './tabs.scss'

export function Tabs ({className}: {className?: string}): JSX.Element {
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
               1111
            </div>
            <div className={`tab__content ${selectedTab === 'author' ? 'active' : ''}`}>
               2222
            </div>
            <div className={`tab__content ${selectedTab === 'reviews' ? 'active' : ''}`}>
               3333
            </div>
         </div>
      </>
   )
}