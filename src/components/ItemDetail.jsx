import { useState, useContext } from 'react';
import ItemCount from "./ItemCount";
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Item = ( props ) => {
    const [itemCount, setItemCount] = useState(0);
    const cartBuy = useContext(CartContext);

    const onAdd = (qty) => {
        setItemCount(qty);
        cartBuy.addToCart(props.item, qty);
    }

    return (
        <>
            {
                props && props.item.image
                    ?
                    <div className="d-flex propsContainerDetail">
                        <div className="containerImageDetail "  >

                            <img src={props.item.image} className="imageProductDetail" alt="..." />
                        </div>
                        <div className="propsInfoDetail">
                            <h5 className="titleDetail">{props.item.title}</h5>
                            <p className="modelDetail">{props.item.model}</p>
                            <p className="descriptionDetail">{props.item.description}</p>
                            <p className="priceDetail">USD {props.item.precio} </p>
                            <p className="quantityDetail">{props.item.stock} unidades</p>
                            {
                            
                            itemCount === 0
                                ? <ItemCount  stock={props.item.stock} initial={itemCount} onAdd={onAdd} />
                                : <Link to='/cart' style={{ textDecoration: "none" }}><Button style={{ width: "300px", height: "100px", fontSize: "30px" }}  variant="contained" color="primary">CheckOut</Button></Link>
                        }
                            
                        </div>
                       
                    </div>
                    : <p>Cargando...</p>
            }
        </>
    )
}


export default Item;