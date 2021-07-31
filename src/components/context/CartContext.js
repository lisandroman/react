import React, { createContext, useContext, useEffect, useState } from 'react'

export const CartContext = createContext({})
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [productsInCart, setProductsInCart] = useState(0)
  const [providerLoading, setProviderLoading] = useState(true)
  
  const clearCart = () => setCart([]);
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

  const addToCart = (selectedToy) => {
    if (isInCart(selectedToy)) {
      setCart([...cart, selectedToy])
    } else { return selectedToy }
  }
 
  const removeFromCart = (selectedToy) => {
    let removeFiltered = cart.filter(
      (item) => item.id !== selectedToy.id
    );
    setCart(removeFiltered);
  };

  const cartLength = () =>{
   return cart.reduce((acc, item) => acc + item.quantity, 0)
  }

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


  const removeItemFromCart = id => setCart(cart.filter(item=>item.id !==id))


  return  <CartContext.Provider value={{ removeItemFromCart, providerLoading, productsInCart, checkStock, cartLength, cart, setCart, clearCart, removeFromCart, addToCart, isInCart }}>
            {children}
          </CartContext.Provider>
}
