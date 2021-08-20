import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { database } from '../../../firebase/firebase';
import { Loader } from '../../Loader/Loader';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {

  const { id: categoryName } = useParams();
  const [toys, setToys] = useState([]);

  // El get me devuelve una promesa, en lugar de hacer un .then
  // uso una funcion IIFE, ahorro líneas y mejoro el rendimiento en las búsquedas
  // (scope lookups). Aparte de poder usar async/await obviamente
  useEffect(() => {
    (async () => {
      let categoryItems = database
      if (categoryName)
        categoryItems = database.where("category", "==", categoryName)
        const response = await categoryItems.get();
        setToys( response.docs.map((item) => ({ id: item.id, ...item.data() })) );
    })()
  },[categoryName]);
    
  if (toys.length < 1) {
    return <Loader />
  } else {
  return (
    <div>
      <ItemList toys={ toys }/>
    </div>
  )
  }
}
