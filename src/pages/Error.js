import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>you have reached the famed error page. youve lost your way and now it's up to you to find it. here's a helping hand:</h1>
        <Link to='/' className='btn btn-primary'>
          home page
        </Link>
      </div>
    </section>
  )
}

export default Error
