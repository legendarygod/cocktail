import React from 'react'
import { useGlobalContext } from '../context'
export default function TypeSearchForm() {
    const { setSearchType } = useGlobalContext()
    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    function searchCocktail() {
        setSearchType(searchValue.current.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>search your favorite drink types</label>
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
