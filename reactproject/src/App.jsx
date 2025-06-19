import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router";


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} ></Route>
        {/* <Route path="/" element={<App />} ></Route> */}
      </Routes>
      <ItemListContainer text='Bienvenido a HomeBookstore!' /> 
    </BrowserRouter>
  )
}

export default App
