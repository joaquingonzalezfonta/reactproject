import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home';
import Bosque from './components/categories/Bosque';
import Mar from './components/categories/Mar';
import Lago from './components/categories/Lago';
import Ciudad from './components/categories/Ciudad';
import Montaña from './components/categories/Montaña';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path='mar' element={ <Mar /> } />
        <Route path='Lago' element={ <Lago /> } />
        <Route path='ciudad' element={ <Ciudad /> } />
        <Route path='montaña' element={ <Montaña /> } />
        <Route path='bosque' element={ <Bosque /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
