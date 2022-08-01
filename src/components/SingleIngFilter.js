import React from 'react'
import { Link } from 'react-router-dom'

function SingleIngFilter({id, drink, image}) {
  return (
      <article className='cocktail'>
          <div className='img-container'>
              <img src={image} alt={drink} />
          </div>
          <div className='cocktail-footer'>
              <h3>{drink}</h3>
              
              <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
                  Details
              </Link>
          </div>
      </article>
  )
}

export default SingleIngFilter