import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const CartItem = ({ id, name, price, quantity }) => {
    const {removeItem} = useContext(CartContext)

    const handleRemove = (id) =>{
        removeItem(id)
    }
    return(
        <>
            <div>{name}</div>
            <div>{quantity}</div>
            <div>{price * quantity}</div>
            <button onClick={() => handleRemove(id)}>remove</button>
        </>
    )
}

export default CartItem