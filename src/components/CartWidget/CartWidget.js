import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () =>{
    const {totalQuantity} = useContext(CartContext)
    return(
        <>
            <NavLink to='cart/' className='cartWidget'>
                <FontAwesomeIcon icon={faShoppingCart} />
                {totalQuantity}
            </NavLink>
        </>
    )
}

export default CartWidget