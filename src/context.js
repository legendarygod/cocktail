import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const ingredientUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='
const glassUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list'
const alcoholUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list'
const typeUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])
//for the filter pages, to switch the ui
  const [ingredients, setIngredients] = useState(true)
    //under ingredient filter, to swicth between search and list
    const [isIngsSearchOn, setIsIngsSearchOn] = useState(false)
    const [isFullIngsListOn, setIsFullIngsListOn] = useState(true)
    const [fullIngredients, setFullIngredients] = useState([])
  const [glass, setGlass] = useState(false)
  const [alcoholic, setAlcoholic] = useState(false)
  const [type, setType] = useState(false)
  //search filters for the filter page
  const [searchType, setSearchType] = useState()
  const [searchGlass, setSearchGlass] = useState()
  const [searchALcohol, setSearchAlcohol] = useState()
  const [searchIngs, setSearchIngs] = useState('')
//cstate that holds the fetched data for each filter
  const [ingsList, setIngsList] = useState([])
  const [glassList, setGlassList] = useState([])
  const [alcList, setAlcList] = useState([])
  const [typeList, setTypeList] = useState([])


  const showIngs = () => {
    setGlass(false)
    setAlcoholic(false)
    setType(false)
    setIngredients(true)
  }
  const showGlass = () => {
    setGlass(true)
    setAlcoholic(false)
    setType(false)
    setIngredients(false)
  }
  const showType = () => {
    setGlass(false)
    setAlcoholic(false)
    setType(true)
    setIngredients(false)
  }
  const showAlc = () => {
    setGlass(false)
    setAlcoholic(true)
    setType(false)
    setIngredients(false)
  }

  //FETCHING COCKTAIL DAATA
  const fetchDrinks = useCallback(async () =>{
    setLoading(true)
    try {
      const response = await fetch(`${cocktailUrl}${searchTerm}`)
      const data = await response.json();
      const {drinks} = data;
      if (drinks){
        const newCocktails = drinks.map((drink)=>{
          const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = drink;
          return {id:idDrink, name:strDrink, image:strDrinkThumb, info: strAlcoholic, glass: strGlass}
        })
        setCocktails(newCocktails)
      }else{
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }, [searchTerm])
 
  useEffect(()=>{
    fetchDrinks()
  }, [searchTerm, fetchDrinks])

  //END OF FETCHING COCKTAILS DATA

  //FETCHING INGREDIENTS DATA BASED ON SEARCH
  const fetchIngredients = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${ingredientUrl}${searchIngs}`)
      const data = await response.json()
      const {ingredients} = data;
      if (ingredients){
        const newIngs = ingredients.map((drink)=>{
          const {
                  strIngredient,
                  idIngredient,
                  strABV,
                  strAlcohol
                } = drink;
          return {
                  ingredient:strIngredient,
                  id:idIngredient,
                  abv:strABV,
                  alc:strAlcohol,
                }
        })
        setIngsList(newIngs)
      }else{
        setIngsList([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }


  useEffect(()=>{
    fetchIngredients()
  }, [searchIngs])

  //END OF FETCHING INGREDIENTS DATA BASED ON SEARCH

  //FULL INGREDIENTS LIST

const fetchFullIngs = async () =>{
  setLoading(true)
  try {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    const data = await res.json()
    const {drinks} = data
    if(drinks){
      const newIngredients = drinks.map((item)=>{
        const {strIngredient1} = item
        return {ingredient: strIngredient1}
      })
      setFullIngredients(newIngredients);
    }else{
      setFullIngredients([])
    }
    setLoading(false)
  } catch (error) {
    console.log(error);
    setLoading(false)
  }
}

  useEffect(()=>{
    fetchFullIngs()
  }, [])

  //END OF FULL INGREDIENTS LIST
  
  //FETCHING CATEGORIES(TYPES) LIST
  const fetchCategories = async () => {
   setLoading(true)
    try {
      const res = await fetch(typeUrl)
      const data = await res.json()
      const {drinks} = data;
      if(drinks){
        const newCategories = drinks.map((item)=>{
          const {strCategory} = item
          return {type: strCategory}
        })
        setTypeList(newCategories)
      }else {
        setTypeList([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }

  }

  useEffect(()=>{
    fetchCategories()
  }, [])

  //END OF CATEGORIES(TYPES)
  //FETCHING ALCHOL TYPES LIST
  const fetchAlc = async () => {
    setLoading(true)
    try {
      const res = await fetch(alcoholUrl)
      const data = await res.json()
      const { drinks } = data;
      if (drinks) {
        const newAlc = drinks.map((item) => {
          const { strAlcoholic } = item
          return { isAlc: strAlcoholic }
        })
        setAlcList(newAlc)
      } else {
        setAlcList([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchAlc()
  }, [])

  //END OF FETCHING ALCOHOL TYPES
  //FETCHING GLASS LIST
  const fetchGlass = async () => {
    setLoading(true)
    try {
      const res = await fetch(glassUrl)
      const data = await res.json()
      const { drinks } = data;
      if (drinks) {
        const newGlass = drinks.map((item) => {
          const { strGlass } = item
          return { glassType: strGlass }
        })
        setGlassList(newGlass)
      } else {
        setGlassList([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchGlass()
  }, [])
  //END OF FETCHING GLASS LIST

  

  return <AppContext.Provider 
              value={{
                loading,
                cocktails,
                setSearchTerm,
                setLoading,
                ingredients,
                type,
                alcoholic,
                glass,
                showIngs,
                showAlc,
                showGlass,
                showType,
                setSearchIngs,
                setSearchAlcohol,
                setSearchGlass,
                setSearchType,
                alcList,
                typeList,
                glassList,
                ingsList,
                isIngsSearchOn,
                setIsIngsSearchOn,
                fullIngredients,
                isFullIngsListOn,
                setIsFullIngsListOn,
              }}
          >
            {children}
          </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
