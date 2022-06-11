const ItemDetail = ({ id, name, img, price,description }) => {
    return(
        <div className="item-detail">
            <img className="card-img" src={img} alt={name}/>
            <div className="card-detail">
                <h1>{name}</h1>
                <span className="card-price">${price}</span>
                <p className="card-description">{description}</p>
                <div className="card-quantity">
                    <label>Cantidad:</label>
                    <input type="number" className="product-quantity" min="1" defaultValue="1" />
                </div>
                <button className="add-to-cart">AGREGAR AL CARRITO</button>
            </div>
        </div>
    )
}

export default ItemDetail