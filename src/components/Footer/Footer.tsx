import './footer.scss'

export function Footer (): JSX.Element {
   return (
      <div className="footer">
         <div className="footer__container container-fluid">
            <p className="text-body-tertiary m-0">©2022 Bookstore</p>
            <p className="text-body-tertiary m-0">All rights reserved</p>
         </div>
      </div>
   )
}