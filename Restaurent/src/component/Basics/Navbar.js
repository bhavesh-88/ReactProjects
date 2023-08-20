import React from 'react'
import Menu from './menuApi'
const Navbar = ({filteritem , menulist,setMenuData}) => {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {/* {
                        menulist.map((curElem) =>{
                            return(
                                <button 
                                    className='btn-group__item' 
                                    onClick={() => filteritem(curElem)}>
                                    {curElem}
                                </button>
                            )
                        })
                    } */}
                    <button className='btn-group__item' onClick={() => filteritem("breakfast")}>Breakfast</button>
                    <button className='btn-group__item' onClick={() => filteritem("lunch")}>Lunch</button>
                    <button className='btn-group__item' onClick={() => filteritem("evening")}>Evening</button>
                    <button className='btn-group__item' onClick={() => filteritem("dinner")}>Dinner</button>
                    <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
