import React from 'react'
import { Link } from 'react-router-dom'
export default function Alcohol({ isAlc }) {
    return (
        <article className='cocktail'>
            <div className='cocktail-footer'>
                <h3>{isAlc}</h3>
                <Link to={`/alcFilter/${isAlc}`} className='btn btn-primary btn-details'>
                    view drinks
                </Link>
            </div>
        </article>
    )
}
