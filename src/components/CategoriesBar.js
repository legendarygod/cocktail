import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

export default function CategoriesBar() {
    const {showIngs, showAlc, showGlass, showType} = useGlobalContext()
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);
    return (
        <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <button className='nav-toggle' onClick={toggleLinks}>
                        Pick your Category 
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
                     <li onClick={showIngs}>
                         Ingredients
                     </li>
                     <li onClick={showType}>
                         type
                     </li>
                     <li onClick={showAlc}>
                         alcoholic
                     </li>
                     <li onClick={showGlass}>
                         glass
                    </li>
          </ul>
        </div>
        
      </div>
    </nav>
    )
}
// <nav className='navbar'>
        //     <div className='cat-center'>
        //         <ul className='cat-links'>
        //             <li onClick={showIngs}>
        //                 Ingredients
        //             </li>
        //             <li onClick={showType}>
        //                 type
        //             </li>
        //             <li onClick={showAlc}>
        //                 alcoholic
        //             </li>
        //             <li onClick={showGlass}>
        //                 glass
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
