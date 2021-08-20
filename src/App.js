import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './components/context/CartContext';

// Componenetes
import { ItemListContainer } from './components/Main/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Main/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { CheckoutContainer } from './components/Checkout/CheckoutContainer';
import { NavBar } from './components/Navbar/NavBar';
import { Done } from './components/Checkout/Done';
import { Hero } from './pages/Hero/Hero';

export const App = () => {
  return (
    <>
      <CartProvider defaultCart={[]}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
                <Hero />
                <ItemListContainer/> 
            </Route>
            <Route exact path="/home" component={ ItemListContainer } />
            <Route path="/category/:id" component={ ItemListContainer } />
            <Route path="/item/:id" component={ ItemDetailContainer } />
            <Route path="/cart" component={ Cart } />
            <Route path="/checkout" component={ CheckoutContainer } />
            <Route path="/done" component={ Done } />
          </Switch>
        </Router>
      </CartProvider>
    </>
  )
}