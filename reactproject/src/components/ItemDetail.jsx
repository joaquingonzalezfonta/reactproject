import ItemCount from "./ItemCount"
import '../styles/ItemDetail.css'

export default function ItemDetail({ item }) {
    return (
        <div className="bodyContainerDetail">
            <div className="cardContainerDetail">
                <div className="imgCardContainerDetail">
                    <img src={item?.image} alt={item?.category} />
                </div>
                <div className="bodyCardContainerDetail">
                    <div className="titleCardContainerDetail">
                        <h4> {item?.locality} - ${item?.price}</h4>
                    </div>
                    <div className="descriptionCardContainerDetail">
                        <p> {item?.description} </p>
                    </div>
                    <div className="buttonsCotainer">
                        <div>
                            <ItemCount item={item} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
