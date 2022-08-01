import React from 'react'
import { Link } from 'react-router-dom'
function FullIngs({ingredient}) {
    const imageUrl = `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`
    return (
        <article className='cocktail'>
            <div className='img-container'>
                <img src={imageUrl} alt={ingredient} />
            </div>
            <div className='cocktail-footer'>
                <h3>{ingredient}</h3>
                <Link to={`/ingredient/${ingredient}`} className='btn btn-primary btn-details'>
                    details
                </Link>
                <Link to={`/ingFilter/${ingredient}`} className='btn btn-primary btn-details'>
                    View Drinks
                </Link>
            </div>
        </article>
    )
}

export default FullIngs