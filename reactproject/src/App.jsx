import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/category/:categoryName" element={<ItemListContainer /> } />
        <Route path="/item/:id" element={<ItemDetailContainer /> } />
        <Route path='/cart' element={<Cart /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
