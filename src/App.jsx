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
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/All Category" element={<ProductList />} />
        <Route path="/item/:id" element={<Item />} />
      </Routes>
    </Router>
  );
}

export default App;
