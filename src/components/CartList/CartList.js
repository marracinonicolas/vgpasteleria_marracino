import CartItem from "../CartItem/CartItem";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection, writeBatch, getDoc, query, where, documentId } from "firebase/firestore";
import { db } from "../../services/firebase/index"

const CartList = () =>{
    const {cart, totalPrice, totalQuantity} = useContext(CartContext)
    
    const handleCreateOrder = () =>{
        console.log('generar orden')
        const objOrder = {
            buyer: {
                name: 'Nicolas',
                email: 'miemail@email.com',
                phone: '22211212',
                address: 'Dire 2222'
            },
            items: cart,
            total: totalPrice()
        }
        // console.log(objOrder)
        // const collectionRef = collection(db, 'orders')
        // addDoc(collectionRef, objOrder).then(({ id })=>{
        //     console.log(id)
        // })
        const batch = writeBatch(db)

        const ids = cart.map(prod => prod.id)
        const outOfStock = []

        const collectionRef = collection(db, 'products')

        getDoc( query(collectionRef, where(documentId(), 'in', ids)) )
        .then(
            response=> {
                response.docs.ferEach( doc => {
                    const dataDoc = doc.data()
                    const prod = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = prod.totalQuantity

                    if (dataDoc.stock >= prodQuantity){
                        batch.update(doc.ref, {stock: dataDoc - prodQuantity})
                    }else{
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                } )
            }
        ).then(()=>{
            if(outOfStock.length === 0 ){
                const collectionRef = collection(db, 'orders')
                return addDoc(collectionRef, objOrder)
            }else{
                console.log(outOfStock)
            }
        }).then(({id})=>{           
            batch.commit()
            console.log(id)
        }).catch()


        


    }

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
                <div className="cart-footer">
                    <button className="clean-cart">VACIAR CARRITO</button>
                    
                    <h2>Total: {totalPrice()}</h2>
                </div>
                <button className="generate-order" onClick={handleCreateOrder}>GENERAR ORDEN</button>
                    
            </div>
    )    
}

export default CartList