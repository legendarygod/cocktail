import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import SingleIngFilter from '../components/SingleIngFilter'
function IngFilter() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='
    const { loading, setLoading } = useGlobalContext()
    const { isAlc } = useParams()
    const [filter, setFilter] = useState([])

    //FETCHING Alcohol FILTER
    const fetchAlcoholFilter = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${url}${isAlc}`)
            const data = await res.json()
            const { drinks } = data
            if (drinks) {
                const filter = drinks.map((item) => {
                    const {
                        strDrink,
                        strDrinkThumb,
                        idDrink
                    } = item
                    return {
                        drink: strDrink,
                        image: strDrinkThumb,
                        id: idDrink
                    }
                })
                setFilter(filter)
            } else {
                setFilter([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAlcoholFilter()
    }, [])

    if (loading) {
        return (
            <Loading />
        )
    }
    if (filter.length < 1) {
        return (
            <h2 className='section-title'>there are no drinks under {isAlc}</h2>
        )
    }
    return (
        <section className='section'>
            <h2 className='section-title'>Drinks</h2>
            <div className='cocktails-center'>
                {filter.map((item) => {
                    return <SingleIngFilter key={item.id} {...item} />
                })}
            </div>
        </section>
    )

}

export default IngFilter