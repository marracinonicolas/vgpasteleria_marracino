import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/index"



const ItemDetailContainer = () =>{
    const [product, setProduct] = useState()
    const { productId } = useParams()
    useEffect(()=>{
         
        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(doc => {
            const productFormatted = { id: doc.id, ...doc.data() } 
            setProduct(productFormatted)
        }).catch(error => {
            console.log(error)
        })
    }, [productId])
    
    return(
        <>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer