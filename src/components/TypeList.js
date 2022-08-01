import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { type } from '@testing-library/user-event/dist/type'
import Types from './Types'

export default function TypeList() {
    const { typeList, loading } = useGlobalContext()
    if (loading) {
        return <Loading />
    }
    if (typeList.length < 1) {
        return (
            <h2 className='section-title'>
                no types matched your search criteria
            </h2>
        )
    }
    return (
        <section className='section'>
            <h2 className='section-title'>Types/Sub-categories</h2>
            <div className='cocktails-center'>
                {typeList.map((item, index) => {
                    return <Types key={index} {...item} />
                })}
            </div>
        </section>
    )
}
