import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import Alcohol from './Alcohol'
import Ings from './Ings'
import FullIngs from './FullIngs'

export default function IngredientsList() {
    const { ingsList, loading, isIngsSearchOn, setIsIngsSearchOn, isFullIngsListOn, setIsFullIngsListOn, fullIngredients } = useGlobalContext()


    const changeView = () => {
        setIsFullIngsListOn(true)
    }

    if (loading) {
        return <Loading />
    } 
    if(isFullIngsListOn){
        if(fullIngredients.length < 1){
            return (
                <h2 className='section-title'>
                    no types matched your search criteria
                </h2>
            )
        }
        return (
            <section className='section'>
               <h2 className='section-title'>ingredients</h2>
               <div className='cocktails-center'>
                   {fullIngredients.map((item, index) => {
                       return <FullIngs key={index} {...item} />
                   })}

               </div>
           </section>
        )
    }
    if (isIngsSearchOn){
        if (ingsList.length < 1) {
            return (
                <h2 className='section-title'>
                    no types matched your search criteria
                </h2>
            )
        }
       return (
           <section className='section'>
               <h2 className='section-title'>ingredients</h2>
               <button className='btn btn-primary' onClick={changeView}>Dispay all Ingredients Instead</button>
               <div className='cocktails-center'>
                   {ingsList.map((item) => {
                       return <Ings key={item.id} {...item} />
                   })}

               </div>
           </section>
       )
   }
}
