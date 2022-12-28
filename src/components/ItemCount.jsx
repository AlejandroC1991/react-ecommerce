import { Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useEffect, useState } from 'react';


const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);

    },[]);

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1);
        }   
    }
    
    const restar = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <div style={{ display: "flex", alignitems: "center", margin: "20px"}}>
            <Button  variant="contained" onClick={restar}><Remove /></Button>
            <div style={{fontsize: "24px", margin:"25px"}} >{count}</div>
            <Button variant="contained" onClick={sumar}><Add /></Button> 
            
            {
                stock && count
                ? <Button style={{fontsize: "24px", margin:"25px"}} variant="contained" color="primary" onClick={() => onAdd(count)}>Add to Cart</Button>
                : <Button style={{fontsize: "24px", margin:"25px"}} variant="contained" disabled>Add to Cart</Button>
            }
            
        </div>
    );
}

export default ItemCount;