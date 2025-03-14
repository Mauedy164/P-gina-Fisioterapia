import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { Navbar } from "./components/Navbar";
import { CardProduct } from "./components/CardProducts/CardProducts";
import { CartProvider } from './context/CartContext';


import serviciosFisioterapia from "../data";



import { HomePage } from "./components/Pages/Home";
import { AboutMe } from "./components/Pages/AboutMe";
import { Contact } from "./components/Pages/Contact";
import { CardProductsList } from "./components/CardProducts/CardProductsList";
import { ProductDetails } from "./components/CardProducts/ProductDetails";
import { Cart } from "./components/Pages/Cart";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/CardProductsList" element={<CardProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
