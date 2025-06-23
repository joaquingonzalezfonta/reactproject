import ItemCount from "./ItemCount"
import '../styles/ItemDetail.css'

export default function ItemDetail({ item }) {
    return (
        <div className="bodyContainerDetail">
            <div className="cardContainerDetail">
                <div className="imgCardContainerDetail">
                    <img src={item?.thumbnail} alt={item?.title} />
                </div>
                <div className="bodyCardContainerDetail">
                    <div className="titleCardContainerDetail">
                        <h4> {item?.title} </h4>
                    </div>
                    <div className="descriptionCardContainerDetail">
                        <p> {item?.description} </p>
                    </div>
                    <div className="buttonsCotainer">
                        <div>
                            <ItemCount />
                        </div>
                        <div className="buttonCardContainerDetail">
                            <button className='buttonCardDetail'> Comprar </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
