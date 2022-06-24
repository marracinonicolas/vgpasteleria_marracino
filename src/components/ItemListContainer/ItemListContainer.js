
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/index"

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        const conllectionRef = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : ( collection(db,'products') )

        getDocs(conllectionRef).then(response => {
            console.log(response)
            const productsFormatted = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()  }
            })
            setProducts(productsFormatted)
        }).catch(error =>{
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
        
    }, [categoryId])
    if(loading){
        return <h2 className="loading"><FontAwesomeIcon icon={faSpinner} />cargando...</h2>
    }
    return(
        <div>
            <h1>{categoryId}</h1>
            {products.length > 0 
            ? <ItemList products={products} />
            : <h2>Sin productos por el momento</h2>
            }
            
        </div>
        
    )
}

export default ItemListContainer