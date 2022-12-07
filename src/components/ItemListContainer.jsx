import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { data } from './utils/data';
import { customFetch } from './utils/customFetch';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      customFetch(0, data.filter(item => item.category === parseInt(categoryId)))
        .then(response => setDatos(response))
        .catch(err => console.log(err))
    } else {
      customFetch(0, data)
        .then(response => setDatos(response))
        .catch(err => console.log(err))
    }
  }, [categoryId]);

  return (


    <ItemList datos={datos} />)



}

export default ItemListContainer;