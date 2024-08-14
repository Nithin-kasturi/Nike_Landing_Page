import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PopularProducts from './components/PopularProducts'
import SuperQuality from './components/SuperQuality'
import Services from './components/Services'
import SpecialOffer from './components/SpecialOffer'
import CustomerReview from './components/CustomerReview'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
// import './App.css'

function App() {
  return (
    <main className='relative'>
      <Navbar/>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x py-10'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffer/>
      </section>
      <section className='bg-pale-blue padding '>
        <CustomerReview/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='padding-x bg-black padding-t pb-8'>
        <Footer/>
      </section>
      
    </main>
  )
}

export default App
