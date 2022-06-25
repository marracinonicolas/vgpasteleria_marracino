import CartItem from "../CartItem/CartItem";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


const CartList = () =>{
    const {cart, totalPrice, totalQuantity} = useContext(CartContext)


    if (totalQuantity === 0) {
        return(
            <>
                <h2>No hay productos en tu carrito</h2>
                <Link to='/'>
                    <button className="add-to-card">Ir a comprar</button>
                </Link>
                
            </>
        )
    }

    return(
            <div className="cart-list">
                <div className="cart-header">
                    <div></div>
                    <div>Cantidad</div>
                    <div>Precio</div>
                    <div></div>
                </div>
                {cart.map( i => <CartItem key={i.id} {...i}></CartItem> )}
                <div className="cart-header">
                    <h2>Total: {totalPrice()}</h2>
                </div>
                    
            </div>
    )    
}

export default CartList