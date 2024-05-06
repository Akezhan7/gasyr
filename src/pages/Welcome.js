import React from 'react'
import WelcomeCont from '../components/WelcomeCont/WelcomeCont'
import Header1 from '../components/Header1/Header1'
import Footer from '../components/Footer/Footer'

function Welcome() {
  return (
    <div>
      <Header1 white={true}/>
      <WelcomeCont/>
      <Footer/> 
    </div>
  )
}

export default Welcome