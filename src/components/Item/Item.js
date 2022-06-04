const Item = ({name, img, price}) =>{
    return(
        <li className="card-item">
            
            <img className="card-img" src={img} alt={name}/>
            <div className="card-footer"> 
                <h2>{name}</h2>
                <span className="card-price">${price}</span>
            </div>
        </li>
    )
}

export default Item