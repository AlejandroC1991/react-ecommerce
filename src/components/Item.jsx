import { Link } from "react-router-dom";


const Item = (props) => {
    return (

        <div className="card style col-3"  >

            <img src={props.image} className="card-img-top sizeImg" alt="..." />

            <div className="sizeBody">
                <h5 className="title">{props.title}</h5>
                <p className="model">{props.model}</p>
                <p className="price">{props.precio} usd</p>
                <p className="quantity">{props.cantidad} unidades</p>

            </div>
            <div className="d-flex justify-content-center">
                <button className='btn btn-primary w-25 '><Link to={`/item/${props.id}`} style={{ textDecoration: "none", color: "white" }}>Details</Link></button>
            </div>
        </div>
    )
}


export default Item;