import CartContext from '../../context/CartContext'
import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const CartItem = ({ id, name, price, quantity }) => {
    const {removeItem} = useContext(CartContext)

    const handleRemove = (id) =>{
        removeItem(id)
    }
    return(
        <div className='cart-item'>
            <div className='cart-name'>{name}</div>
            <div>{quantity}</div>
            <div>{price * quantity}</div>
            <div className='cart-remove'><button onClick={() => handleRemove(id)}><FontAwesomeIcon icon={faTrashAlt} /></button></div>
            
        </div>
    )
}

export default CartItem