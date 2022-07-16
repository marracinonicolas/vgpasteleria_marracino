import { addDoc, collection, writeBatch, getDocs, query, where, documentId } from "firebase/firestore";
import { db } from "../../services/firebase/index"
import { useNotification } from "../../notification/Notification"
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Checkout = () => {
    const {cart, totalPrice, clearCart, totalQuantity} = useContext(CartContext)
    const setNotification = useNotification()
    const [loading, setLoading] = useState(false)
    const [orderGenerated, setOrderGenerated] = useState(false)

    const [buyerForm, setBuyerForm] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    })

    const handleSubmit = (event) =>{
        event.preventDefault()
        handleCreateOrder()
    }
    const handleInputChange = (event) => {
        setBuyerForm({
            ...buyerForm,
            [event.target.name] : event.target.value
        })
    }

    const handleCreateOrder = () =>{
        const objOrder = {
            buyer: { ...buyerForm },
            items: cart,
            total: totalPrice(),
            date: new Date().toLocaleDateString()

        }
        
        const batch = writeBatch(db)

        const ids = cart.map(prod => prod.id)
        const outOfStock = []

        const collectionRef = collection(db, 'products')

        getDocs( query(collectionRef, where(documentId(), 'in', ids)) )
        .then(
            response=> {
                setLoading(true)
                response.docs.forEach( doc => {
                    const dataDoc = doc.data()
                    const prod = cart.find(prod => prod.id === doc.id)
                    const prodQuantity = prod.quantity

                    if (dataDoc.stock >= prodQuantity){
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    }else{
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                } )
            
        }).then(()=>{
            if(outOfStock.length === 0 ){
                const collectionRef = collection(db, 'orders')
                return addDoc(collectionRef, objOrder)
            }else{
                return Promise.reject({ type: 'outOfStock', products: outOfStock })
            }
        }).then(({id})=>{           
            batch.commit()
            setOrderGenerated(id)
            clearCart()
        }).catch(error => {
            if (error.type = 'outOfStock'){
                setNotification('error','hay productos que no tenemos stock', 4000)
            }else{
                console.log(error)
                setNotification('error',`disculpe las molestias ha ocurrido un error. Intente nuevamente mas tarde.`)
            }
            
        }).finally(()=>{
            setLoading(false)
        })

    }

    if(loading){
        return <h2 className="loading"><FontAwesomeIcon icon={faSpinner} />generando orden de compra...</h2>
    }

    if (totalQuantity === 0) {
        if(orderGenerated){
            return(
                <>
                    <h2>Gracias por su compra. Su número de orden es: </h2>
                    <h1> {orderGenerated}</h1>
                    <h2>Pronto nos comunicaremos para realizar la entrega</h2>
                </>
            )
            
        }
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
        <div className="checkout">
            <div className="checkout-title">
                <h2>Estas a un paso de realizar tu compra, complete los siguientes datos</h2>
            </div>
            <form className="buyerForm" onSubmit={handleSubmit}>
                <div className="input-list">
                    <input 
                        type="text" 
                        placeholder="Apellido y Nombre" 
                        className="input" 
                        onChange={handleInputChange} 
                        name="name"
                        required />
                </div>
                <div className="input-list">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="input" 
                        onChange={handleInputChange} 
                        name="email"
                        required />
                </div>
                <div className="input-list">
                    <input 
                        type="text" 
                        placeholder="Teléfono" 
                        className="input" 
                        onChange={handleInputChange} 
                        name="phone"
                        required />
                </div>
                <div className="input-list">
                    <input 
                        type="text" 
                        placeholder="Dirección" 
                        className="input" 
                        onChange={handleInputChange} 
                        name="address"
                        required />
                </div>
                
                <button type="submit" className="generate-order">COMPRAR</button>
            </form>

        </div>
    )
}

export default Checkout