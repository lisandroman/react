import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Loader } from '../../Loader/Loader';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState([]);
  const [promiseStatus, setPromiseStatus] = useState(null)

  useEffect(() => {
    (async() => {
      const {data} = await axios.get("https://60efa6a2f587af00179d3a86.mockapi.io/api/v1/items/")
      const foundItem = data.find(item => item.id === +id);
      setSelectedItem(foundItem);
      setPromiseStatus(false);
    })()
  }, [id]);

  if (promiseStatus || !selectedItem) return <Loader /> 
  console.log(selectedItem)

  return (
  <div>
    <ItemDetail loader={ promiseStatus } selectedItem={ selectedItem }/>
  </div>
  )
}
