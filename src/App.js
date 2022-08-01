import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import Ingredients from './pages/Ingredients'
import Filter from './pages/Filter'
import AboutIngredient from './pages/AboutIngredient'
import IngFilter from './pages/IngFilter'
import TypeFilter from './pages/TypeFilter'
import AlcoholFilter from './pages/AlcoholFilter'
import GlassFilter from './pages/GlassFilter'
function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/cocktail/:id' element={<SingleCocktail />} />
        <Route exact path='*' element={<Error />} />
        <Route exact path='/categories' element={<Filter />} />
        <Route exact path='/ingredient/:ingredient' element={<AboutIngredient />} />
        <Route exact path='/ingFilter/:ingredient' element={<IngFilter />} />
        <Route exact path='/typeFilter/:type' element={<TypeFilter />} />
        <Route exact path='/alcFilter/:isAlc' element={<AlcoholFilter />} />
        <Route exact path='/glassFilter/:glassType' element={<GlassFilter />} />
      </Routes>
    </Router>
  )
}

export default App
