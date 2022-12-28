import { Link } from "react-router-dom";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Item = (props) => {
    return (

        <div className="card style col-3"  >

            <img src={props.image} className="card-img-top sizeImg" alt="..." />

            <div className="sizeBody">
                <h5 className="title">{props.title}</h5>
                <p className="model">{props.model}</p>
                <p className="price"><AttachMoneyIcon />{props.precio} </p>
                <p className="quantity">{props.stock} unidades</p>

            </div>
            <div className="d-flex justify-content-center">
                <Link to={`/item/${props.id}`} style={{ textDecoration: "none", color: "white" }}><button className='btn btn-primary'>BUY</button></Link>
            </div>
        </div>


    )
}


export default Item;


