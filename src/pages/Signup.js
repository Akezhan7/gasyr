import React from 'react'
import Header1 from '../components/Header1/Header1'
import Footer from '../components/Footer/Footer'
import SignUpCont from '../components/SignUpCont/SignUpCont'

function Signup() {
  return (
    <div>
        <Header1 red={true}/>
        <SignUpCont/>
        <Footer/>
    </div>
  )
}

export default Signup