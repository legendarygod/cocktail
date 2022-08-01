import React from 'react'
import { Link } from 'react-router-dom'
export default function Types({ type }) {
    return (
        <article className='cocktail'>
            <div className='cocktail-footer'>
                <h3>{type}</h3>
                <Link to={`/typeFilter/${type}`} className='btn btn-primary btn-details'>
                    View Drinks
                </Link>
            </div>
        </article>
    )
}
