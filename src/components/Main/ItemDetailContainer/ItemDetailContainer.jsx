import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { database } from '../../../firebase/firebase';
import { Loader } from '../../Loader/Loader';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState([]);
  const [promiseStatus] = useState(null)

  // Al igual que ItemListContainer, uso una "Immediately-invoked function expressions"
  // ahorrando lineas con el .then y usando async/await 
  useEffect(() => {
    (async() => {
      const resolve = await database.doc(id).get();
      setSelectedItem({ id: resolve.id, ...resolve.data()})
    })()
  }, [id]);


  if (selectedItem.length < 1) {
    return <Loader />
  } else {
    return (
      <div>
        <ItemDetail loader={ promiseStatus } selectedItem={ selectedItem }/>
      </div>
    )
  }
}
