import { useState } from "react"
import '../styles/ItemCount.css'

export default function ItemCount() {
    const [counter, setCounter] = useState(0)

    const handleAdd = () => setCounter(counter + 1)
    const handleSub = () => setCounter(counter - 1)

    return (
        <>
            <div className="counter">
                <div className="itemCounterContainer">
                    <p className="itemCounter" > {counter} </p>
                </div>
            </div>
            <div className="counter">
                <button className="buttonAdd" onClick={handleAdd}>
                    <p className="itemCounter"> + </p>
                </button>
                <button className="buttonSub" onClick={handleSub}>
                    <p className="itemCounter"> - </p>
                </button>
            </div>

        </>
    )
}
