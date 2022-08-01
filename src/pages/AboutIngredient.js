import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

function AboutIngredient() {
    const { ingredient } = useParams()
    const [loading, setLoading] = React.useState(false)
    const [ing, setIng] = React.useState(null)

    const imageUrl = `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`

    const fetchIngredientDetail = async () => {
        setLoading(true)
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`)
            const data = await response.json()
            const {ingredients} = data

            if(ingredients){
                const {
                    idIngredient: id,
                    strABV: abv,
                    strDescription: desc,
                    strIngredient: name
                } = ingredients[0]

                const newIngs = {
                    name,
                    desc,
                    abv,
                    id
                }

                setIng(newIngs)
            }else{
                setIng(null)
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
        setLoading(false)    
    }

    useEffect(()=>{
        fetchIngredientDetail()
    }, [ingredient])


  if (loading){
    return <Loading />
  }

  if(!ing){
    return <h2 className='section-title'>no ingredient to display</h2>
  }else{
    const {name, abv, id, desc} = ing
    return (
        <section className='section about-section'>
            <h1 className='section-title'>About {name}</h1>
            <div className='img-container'>
                <img src={imageUrl} alt={ingredient} />
            </div>
            {desc ? <p>{desc}</p> : 
                <>
                    <h2 className='section-title'>{`at the moment, there is no description in our database concerning ${name}. this doesnt stop you from viewing the drinks though!!`}</h2>
                    <Link to={`/ingFilter/${ingredient}`} className='btn btn-primary btn-details'>
                        View Drinks
                    </Link>
                </>
            }
            <p>
                {abv && <span className='drink-data'>{`ABV: ${abv}`}</span>}
            </p>
        </section> 
    )
  }
}

export default AboutIngredient 