import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () =>{
    return(
        <a className='cartWidget'>
            <FontAwesomeIcon icon={faShoppingCart} />
            
        </a>
    )
}

export default CartWidget