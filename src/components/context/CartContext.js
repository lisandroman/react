import React, { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [productsInCart, setProductsInCart] = useState(0)
  const [providerLoading, setProviderLoading] = useState(true)
  
  // Me aseguro de filtrar el item seleccionado para luego utilizarlo
  const isInCart = (selectedToy) => cart.filter((item) => item.id === selectedToy.id).length === 0;

  // const addToCart = (item, quantity) => {
  //   if (isInCart(item.id)) {
  //     const newCart = cart.map(cartElement => {
  //       if (cartElement.id === item.id) {
  //         return { ...cartElement, quantity: cartElement.quantity + quantity }
  //       } else return cartElement;
  //     })
  //     setCart(newCart);
  //   } else {
  //     setCart(prev => [...prev, { ...item, quantity }]);
  //   }
  // };
  // Borro contenido del carrito que uso cuando se modifica la cant
  const removeFromCart = (selectedToy) => {
    let removeFiltered = cart.filter(
      (item) => item.id !== selectedToy.id
    );
    setCart(removeFiltered);
  };

  // Agrega item seleccionado al carrito
  const addToCart = (selectedToy) => {
    if (isInCart(selectedToy)) {
      setCart([...cart, selectedToy])
    } else { return selectedToy }
  }
 
  // Con un reduce obtengo la suma de la cantidad de artículos en el carrito según rúbrica de Desafío 9 "Cart View".
  // Donde pide que el CartWidget "debe consumir el CartContext y mostrar en tiempo real (aparte del ícono)
  // qué cantidad de ítems están agregados (2 camisas y 1 gorro equivaldrían a 3 items)"
  const cartLength = cart.reduce((acc, item) => { return acc + item.quantity }, 0)

  // Chequeo el stock para limitar agregar al carrito cuando ya no hay stock disponible
  const checkStock = selectedItem => {
    const checkItem = cart.find(e => e.id === selectedItem.id);
    return checkItem ? selectedItem.stock - checkItem.quantity : selectedItem.stock
  }

  // Agrega el carrito al localStorage
  useEffect(() => {
    const localCart = localStorage.getItem("cart")                     
    if (!localCart) localStorage.setItem("cart", JSON.stringify([]))  
    else setCart(JSON.parse(localCart))                              
    setProviderLoading(false)                                       
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))  
    const contentInCart = cart.reduce((acc, item) => {        
      return acc + item.quantity
    }, 0)
    setProductsInCart(contentInCart)
  }, [cart])                                          

  // Remueve item (o items agrupados del mismo producto) del carrito
  const removeItemFromCart = id => setCart(cart.filter(item=>item.id !== id))

  // Vacía el contenido total del carrito
  const clearCart = () => setCart([]);

  return  <CartContext.Provider value={{ removeFromCart, removeItemFromCart, providerLoading, productsInCart, checkStock, cartLength, cart, setCart, clearCart,  addToCart, isInCart }}>
            {children}
          </CartContext.Provider>
}
