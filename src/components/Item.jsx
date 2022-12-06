import Card from 'react-bootstrap/Card';

const Item = (props) => {
    return (

<div className="card style col-3"  >
    
    <img src={props.image} className="card-img-top sizeImg"  alt="..." />
    
    <div className="sizeBody">
        <h5 className="title">{props.title}</h5>
        <p className="model">{props.model}</p>
        <p className="price">{props.precio} usd</p>
        <p className="quantity">{props.cantidad} unidades</p>
         <div className='button'><a href="#" className="btn btn-primary ">Details</a></div></div>
    
</div>
 )   }  
    

export default Item;