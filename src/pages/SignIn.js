import React from 'react'
import SignInCont from '../components/SignIn/SignInCont'
import Header1 from '../components/Header1/Header1'
import Footer from '../components/Footer/Footer'

function SignIn() {
  return (
      <div className='sign-in-gen'>
            <Header1 red={true}/>
            <SignInCont/>
            <Footer/>
      </div>
  )
}

export default SignIn