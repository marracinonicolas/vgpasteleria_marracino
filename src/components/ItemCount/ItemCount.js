import { useState } from "react"

const ItemCount = ({ onAdd, stock, initial = 1 }) => {

    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.valueAsNumber <= stock && e.target.valueAsNumber > 0){
            setCount(e.target.valueAsNumber)
        }
    }

    return(
        <>
                <div className="card-quantity">
                    <label>Cantidad:</label>
                    <input type="number" className="product-quantity" value={count} onChange={handleChange} />
                </div>
                <button className="add-to-cart" onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button>
        </>
    )
}

export default ItemCount