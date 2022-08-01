import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import Alcohol from './Alcohol'

export default function AlcoholList() {
    const { alcList, loading } = useGlobalContext()
    if (loading) {
        return <Loading />
    }
    if (alcList.length < 1) {
        return (
            <h2 className='section-title'>
                no types matched your search criteria
            </h2>
        )
    }
    return (
        <section className='section'>
            <h2 className='section-title'>alcohol types</h2>
            <div className='cocktails-center'>
                {alcList.map((item, index) => {
                    return <Alcohol key={index} {...item} />
                })}
            </div>
        </section>
    )
}
