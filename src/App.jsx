import CustomNavBar from "./components/CustomNavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import "./App.css";
import CartContextProvider from "./components/CartContext"




const App = () => {

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <CustomNavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer /> } />
      <Route path="/category/:categoryId" element={<ItemListContainer /> } />
      <Route path="/item/:idItem" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App;



