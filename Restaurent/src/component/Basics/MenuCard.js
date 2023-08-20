import React from 'react'


const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <div>
            <section className='main-card--cointainer'>
                {menuData.map((curelem) => {
                    // const { id, name, category, image, description } = curElem;     // array distructor
                    return (
                        <>
                            <div className='card-container' key={curelem.id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{curelem.id}</span>
                                        <span className='card-author subtle'>{curelem.category}</span>
                                        <h2 className='card-title'>{curelem.name}</h2>
                                        <span className='card-description subtle'>
                                            {curelem.description}
                                        </span>
                                        <div className='card-read'>Read</div>
                                    </div>
                                    <img className='card-media' src= {curelem.image} alt="images"/>
                                    <span className='card-tag subtle'>Order Now</span>
                                </div>
                            </div>
                        </>
                    );
                })};
            </section>
        </div>
    )
}

export default MenuCard
