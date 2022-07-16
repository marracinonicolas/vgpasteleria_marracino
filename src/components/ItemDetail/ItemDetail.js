import ItemCount from "../ItemCount/ItemCount"
import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import { Link } from 'react-router-dom'

import { useNotification } from "../../notification/Notification"

const ItemDetail = ({ id, name, img, price, description, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const setNotification = useNotification()

    const handleOnAdd = (quantity) => {
        setNotification('success',`Se agregó ${quantity} ${name} al carrito`, 3000)
        addItem({id, name, price, quantity})
        setQuantityAdded(quantity)
        
    }

    return(
        <div className="item-detail">
            <img className="card-img" src={img} alt={name}/>
            <div className="card-detail">
                <h1>{name}</h1>
                <span className="card-price">${price}</span>
                <p className="card-description">{description}</p>
                {
                    quantityAdded === 0 
                        ? <ItemCount stock={stock} onAdd={handleOnAdd}/>
                        : <Link to='/cart'> <button className="add-to-cart">VER CARRITO</button></Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail