import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/Item.css'

function Item({ item }) {
    return (
        <>
            <div className="cardContainer">
                <div className="imgCardContainer">
                    <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="bodyCardContainer">
                    <div className="titleCardContainer">
                        <h4> {item.title} </h4>
                    </div>
                    <div className="descriptionCardContainer">
                        <p> {item.description} </p>
                    </div>
                    <div className="buttonCardContainer">
                        <button className='buttonCard'> Detalles </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Item
