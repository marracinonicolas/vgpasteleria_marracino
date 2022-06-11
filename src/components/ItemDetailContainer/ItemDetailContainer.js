import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () =>{
    const [product, setProduct] = useState()
    const params = useParams()
    useEffect(()=>{
        getProductById(params.productId).then(response =>{
            setProduct(response)    
        })
    }, [])
    
    return(
        <>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer