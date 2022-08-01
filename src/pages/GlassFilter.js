import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import SingleIngFilter from '../components/SingleIngFilter'
function IngFilter() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g='
    const { loading, setLoading } = useGlobalContext()
    const { glassType } = useParams()
    const [filter, setFilter] = useState([])

    //FETCHING INGREDIENT FILTER
    const fetchGlassFilter = async () => {
        setLoading(true)
        try {
            const res = await fetch(`${url}${glassType}`)
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
        fetchGlassFilter()
    }, [])

    if (loading) {
        return (
            <Loading />
        )
    }
    if (filter.length < 1) {
        return (
            <h2 className='section-title'>there are no drinks under {glassType}</h2>
        )
    }
    return (
        <section className='section'>
            <h2 className='section-title'>Drinks Made with {glassType}</h2>
            <div className='cocktails-center'>
                {filter.map((item) => {
                    return <SingleIngFilter key={item.id} {...item} />
                })}
            </div>
        </section>
    )

}

export default IngFilter