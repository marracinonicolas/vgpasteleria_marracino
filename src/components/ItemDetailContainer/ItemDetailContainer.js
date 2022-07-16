import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'



const ItemDetailContainer = () =>{
    const [product, setProduct] = useState()
    const { productId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
         
        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() } 
            setProduct(productFormatted)
        }).catch(error => {
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
    }, [productId])
    
    if(loading){
        return <h2 className="loading"><FontAwesomeIcon icon={faSpinner} />cargando producto...</h2>
    }
    return(
        <>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer