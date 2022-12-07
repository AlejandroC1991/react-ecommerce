import { Link } from "react-router-dom";


const Item = (props) => {
    
    return (
        <div className="d-flex propsContainerDetail">
            <div className="containerImageDetail "  >

                <img src={props.item.image} className="imageProductDetail" alt="..." />
            </div>



            <div className="propsInfoDetail">
                <h5 className="titleDetail">{props.item.title}</h5>
                <p className="modelDetail">{props.item.model}</p>
                <p className="descriptionDetail">{props.item.description}</p>
                <p className="priceDetail">{props.item.precio} usd</p>
                <p className="quantityDetail">{props.item.cantidad} unidades</p>
                {/* <div className='button'><Link to={`/item/${props.item.id}`} >Details</Link></div> */}
            </div>

        </div>
    )
}


export default Item;