import { useState, useEffect, createContext } from "react";

const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(()=>{
        let total = 0
        cart.forEach( prod => {
            total += prod.quantity
        })
        setTotalQuantity(total)
    }, [cart])

    const addItem = (itemToAdd) => {
        if(!isInCart(itemToAdd.id)){
            setCart([...cart, itemToAdd])
        }    
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
    }


    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const totalPrice = () =>{
        let total = 0
        cart.forEach( prod => {
            total += prod.price * prod.quantity
        })
        return total    
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            isInCart,
            totalQuantity,
            clearCart,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>


    )

}

export default CartContext