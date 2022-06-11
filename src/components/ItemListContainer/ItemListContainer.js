
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setLoading(true)
        if(!categoryId){
            getProducts().then(response => {
                setProducts(response);
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false);
            })
        }else{
            getProductsByCategory(categoryId).then(response => {
                setProducts(response);
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false);
            })
        }
        
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