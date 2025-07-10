import '../styles/Item.css'
import { useNavigate } from 'react-router';

function Item({ item }) {
    const navigate = useNavigate()
    return (
        <>
            <div className="cardContainer">
                <div className="imgCardContainer">
                    <img src={item.image} alt={item.category} />
                </div>
                <div className="bodyCardContainer">
                    <div className="titleCardContainer">
                        <h4> {item.home} </h4>
                    </div>
                    <div className="descriptionCardContainer">
                        <p> {item.description} </p>
                    </div>
                    <div className="buttonCardContainer">
                        <button className='buttonCard' onClick={() => navigate(`/item/${item.id}`)}> Detalles </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item
