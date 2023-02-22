import React from 'react'
import {FaQuestion} from 'react-icons/fa'

const ErrorPage = ({errorText}) => {
  return (
    <main className="flexCenter height100vh">
        <section className="flexCenter">
            <h1>{errorText}</h1>
            <FaQuestion className='font22 marginLeft10'/>
        </section>
    </main>
  )
}

export default ErrorPage