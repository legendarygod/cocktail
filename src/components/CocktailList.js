import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {loading, cocktails} = useGlobalContext();

  if (loading){
    return <Loading />
  }

  if (cocktails.length < 1){
    return <h2 className='section-title'>NO cocktails matched your search criteria</h2>
  }
  const drinkCards = cocktails.map(item => {
    return <Cocktail 
              key={item.id}
              {...item}
            />
  })
  return (
    <section>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {drinkCards}
      </div>
    </section>
  )
}

export default CocktailList
