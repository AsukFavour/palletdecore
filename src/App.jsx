import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./component/Index/Index";
import About from "./component/About/About";
import Cart from "./component/Cart/Cart";
import Item from "./component/Item/Item";
import ContactUs from "./component/Contact/ContactUs";
import ProductList from "./component/ProductList/ProductList";
import AuthForm from "./component/AuthForm/AuthForm";
import Checkout from "./component/Checkout/Checkout";


function App() {
  

  return (
   <Router>
    <Routes>
    <Route path="/" element={
          <Index/>
        }/>
    <Route path="/login" element={
          <AuthForm/>
        }/>
    <Route path="/about" element={
          <About/>
        }/>
    <Route path="/cart" element={
          <Cart/>
        }/>
    <Route path="/item" element={
          <Item/>
        }/>
     <Route path="/contact" element={
          <ContactUs/>
        }/>
      <Route path="/product" element={
          <ProductList/>
        }/>
              <Route path="/checkout" element={
          <Checkout/>
        }/>
    </Routes>
   </Router>
  )
}

export default App
