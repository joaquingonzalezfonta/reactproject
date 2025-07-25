import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={ <ItemListContainer text='Bienvenido a HomeBookstore!' />  } />
        <Route path="/category/:categoryName" element={<ItemListContainer /> } />
        <Route path="/item/:id" element={<ItemDetailContainer /> } />
        <Route path='/cart' element={<Cart /> }/>
        <Route path='/checkout' element={<Checkout /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
