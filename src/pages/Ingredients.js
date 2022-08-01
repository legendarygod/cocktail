import React, { useState } from 'react'
import Loading from '../components/Loading'
import { useGlobalContext } from '../context'
import CategoriesBar from '../components/CategoriesBar';
import IngSearchForm from '../components/IngSearchForm'
import GlassSearchForm from '../components/GlassSearchForm'
import TypeSearchForm from '../components/TypeSearchForm'
import AlcSearchForm from '../components/AlcSearchForm'
import IngredientsList from '../components/IngredientsList';
import GlassList from '../components/GlassList';
import TypeList from '../components/TypeList';
import AlcoholList from '../components/AlcoholList';

const Ingredients = () => {
   const {ingredients, glass, type, alcoholic, loading} = useGlobalContext()


   if (ingredients) {
    return (
        <main>
            <IngSearchForm />
            <IngredientsList />
       </main>
       
    )
   }
   if (glass) {
    return (
        <main>
            
            <GlassList />
        </main>
    )
   }
   if (type) {
    return (
        <main>
            
            <TypeList />
        </main>
    )
   }
   if (alcoholic) {
    return (
        <main>
            
            <AlcoholList />
        </main>
    )
   }
   


   
}

export default Ingredients;