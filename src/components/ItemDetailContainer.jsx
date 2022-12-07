import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { customFetch } from './utils/customFetch';
import ItemDetail from './ItemDetail';
import { data } from './utils/data';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        
        customFetch(0, data.find(item => item.id === parseInt(idItem)))
            .then(response => setDato(response))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;