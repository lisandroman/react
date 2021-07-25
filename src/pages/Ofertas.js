import React from 'react'
import { ItemList } from '../components/Main/ItemList/ItemList'

export const Ofertas = () => {
  return (
    <div>
      <h1>Juguetes en Oferta</h1>
      <hr />
      <ItemList category="Ofertas" />
    </div>
  )
}
