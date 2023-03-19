import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layouts/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Layouts/Footer/Footer";
import Shop from "./components/Shop/Shop";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ShopCategory from "./components/Shop/ShopCategory";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/Checkout";
import ConfirmOrder from "./components/Cart/ConfirmOrder";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/shop/:category" element={<ShopCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
