import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './components/context/CartContext';
import { ItemDetailContainer } from './components/Main/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/Main/ItemListContainer/ItemListContainer';
import { NavBar } from './components/Navbar/NavBar';

export const App = () => {
  return (
    <>
      <CartProvider defaultCart={[]}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ ItemListContainer } />
            <Route exact path="/home" component={ ItemListContainer } />
            <Route path="/category/:id" component={ ItemListContainer } />
            <Route path="/item/:id" component={ ItemDetailContainer } />
            <Route path="/cart" component={ Cart } />
          </Switch>
        </Router>
      </CartProvider>
    </>
  )
}