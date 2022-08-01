import React from 'react'
import { useGlobalContext } from '../context'
export default function AlcSearchForm() {
    const { setSearchAlcohol } = useGlobalContext()
    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    function searchCocktail() {
        setSearchAlcohol(searchValue.current.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>search your favorite alcoholic/nonalcoholic drinks</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        ref={searchValue}
                        onChange={searchCocktail}
                    />
                </div>
            </form>
        </section>
    )
}
