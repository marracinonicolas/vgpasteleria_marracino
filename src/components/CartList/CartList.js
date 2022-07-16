import CartItem from "../CartItem/CartItem";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartList = () =>{
    const {cart, totalPrice, totalQuantity, clearCart} = useContext(CartContext)
    
    

    if (totalQuantity === 0) {
        return(
            <>
                <h2>No hay productos en tu carrito</h2>
                <Link to='/'>
                    <button className="btn-to-nav">Ir a comprar</button>
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
                <div className="cart-footer">
                    <div></div>
                    <div></div>
                    <h2>Total: {totalPrice()}</h2>
                    <button className="clean-cart" onClick={clearCart}>VACIAR CARRITO</button>
                </div>
                <Link to='/checkout'><button className="generate-order">FINALIZAR COMPRA</button></Link>
                    
            </div>
    )    
}

export default CartList