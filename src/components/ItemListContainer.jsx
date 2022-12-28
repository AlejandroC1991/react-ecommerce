
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from "./utils/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchFromFirestone = async () => {
      let q;
      if (categoryId) {

        q = query(collection(db, "products"), where("category", "==", parseInt(categoryId)));
      } else {
        q = query(collection(db, "products"));
      }
      const querySnapshot = await getDocs(q);
      const dataFromFirestone = querySnapshot.docs.map(item => ({
        id: item.id,
        ...item.data()
      }))

      return dataFromFirestone;
    }
    fetchFromFirestone()
      .then(result => setDatos(result))
      .catch(err => console.log(err))

  }, [categoryId]);

  //componentWillUnmount
  useEffect(() => {
    return (() => {
      setDatos([]);
    })
  }, []);

  return (


    <ItemList datos={datos} />)



}

export default ItemListContainer;