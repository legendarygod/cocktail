import React from 'react'
import Glasses from './Glasses'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function GlassList() {
    const { glassList, loading } = useGlobalContext()
    if (loading) {
        return <Loading />
    }
    if (glassList.length < 1) {
        return (
            <h2 className='section-title'>
                no glass types matched your search criteria
            </h2>
        )
    }
    return (
        <section className='section'>
            <h2 className='section-title'>Glass Types</h2>
            <div className='cocktails-center'>
                {glassList.map((item, index) => {
                    return <Glasses key={index} {...item} />
                })}
            </div>
        </section>
    )
}
