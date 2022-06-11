import { Link } from "react-router-dom"

const Item = ({id, name, img, price}) =>{
    return(
        <li className="card-item">
            
            <img className="card-img" src={img} alt={name}/>
            <div className="card-footer"> 
                <h2>{name}</h2>
                <span className="card-price">${price}</span>
                <Link className="view-detail" to={`/detail/${id}`}>ver más</Link>
            </div>
        </li>
    )
}

export default Item