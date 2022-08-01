import React from 'react'
import { Link } from 'react-router-dom'
export default function Glasses({ glassType }) {
    return (
        <article className='cocktail'>
            <div className='cocktail-footer'>
                <h3>{glassType}</h3>
               
                <Link to={`/glassFilter/${glassType}`} className='btn btn-primary btn-details'>
                    View Drinks
                </Link>
            </div>
        </article>
    )
}
