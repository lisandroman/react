import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = () => {

  const { id: categoryName } = useParams();
  const [toys, setToys] = useState([]);

  useEffect(() => {
   (async () => {
     const {data} = await axios.get("https://60efa6a2f587af00179d3a86.mockapi.io/api/v1/items/", {timeout: 2000})
     if (!categoryName) return setToys(data);
     const catItems = data.filter(item => item.category === categoryName);
     setToys(catItems)
   })();
  }, [categoryName])

  return (
    <div>
      <ItemList toys={ toys }/>
    </div>
  )
}
