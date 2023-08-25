import { useState } from 'react'
import './tabs.scss'

export function Tabs({ className }: { className?: string }): JSX.Element {
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
               An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team&#039;s highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your c...
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