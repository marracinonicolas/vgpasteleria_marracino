import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc, query, where } from "firebase/firestore";
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
        
        // getProductById(params.productId).then(response =>{
        //     setProduct(response)    
        // })
    }, [productId])
    
    return(
        <>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer