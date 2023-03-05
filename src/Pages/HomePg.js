import React from 'react'
import Button from '../Components/Button'
import './HomeSt.css'
export default function HomePg() {
  return (
    <main>
       <section className='Intro p-70'>
          <div className='row'>
            <div className='col-6'>
             <div>
              <div className='Intro-x'>
                <h1>Unlimited Options. Original Pricing</h1>
                <span>Taste the Best Food on Street Side</span>
              </div>
              <div className='Intro-xx'>
                <span>To Experience  <b>BiteLoop</b> Download App</span>
              </div>
              <div className='Intro-xxx'>
                <Button>Download App</Button>
              </div>
             </div>
            </div>
            <div className='col-6'>
              <div className='Intro-img'>
                <img src='https://www.biteloop.in/assets/images/header-heo.png'/>
              </div>
            </div>
          </div>
        </section> 
    </main>
  )
}
