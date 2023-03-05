import React from 'react'
import "./FooterSt.css"
export default function Footer() {
  return (
    <footer>
      <div className='footer-container p-5'>
        <div className='footer-links row'>
          {/* */}
          <div className='site-brand col-xl-2 col-md-4 col-sm-6'>
              <img src="https://www.biteloop.in/assets/images/logo-2.svg"/>
          </div>
          <section className='Products col-xl-1 col-md-4 col-sm-6'>
            <div className='section-title'>
              <span>Products</span>
            </div>
            <ul>
              <li><a href=''>solutions</a></li>
              <li><a href=''>dashboard</a></li>
              <li><a href=''>mobile app</a></li>
            </ul>
          </section>
          <section className='integrations col-xl-1 col-md-4 col-sm-6'>
            <div className='section-title'>
              <span>Integrations</span>
            </div>
            <ul>
              <li><a href=''>shopfiy</a></li>
              <li><a href=''>woocommerce</a></li>
              <li><a href=''>custom APIs</a></li>
            </ul>
          </section>
          <section className='businesses col-xl-1 col-md-4 col-sm-6'>
            <div className='section-title'>
              <span>Businesses</span>
            </div>
            <ul>
              <li><a href=''>Businesses</a></li>
              <li><a href=''>Use Cases</a></li>
            </ul>
          </section>
          <section className='company col-xl-1 col-md-4 col-sm-6'>
            <div className='section-title'>
              <span>Company</span>
            </div>
            <ul>
              <li><a href=''>About us</a></li>
              <li><a href=''>Careers</a></li>
              <li><a href=''>Pricing</a></li>
              <li><a href=''>FAQ</a></li>
              <li><a href=''>Help Center</a></li>
            </ul>
          </section>
          <div className='tracking-shipment-link col-xl-2 col-md-4 col-sm-6'>
            <a href=''>Track Shipment</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
