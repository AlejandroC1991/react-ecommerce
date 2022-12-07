import CustomNavBar from "./components/CustomNavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import "./App.css";



const App = () => {

  return (
    <>
    <BrowserRouter>
    <CustomNavBar />
    
    <Routes>
      <Route path="/" element={<ItemListContainer /> } />
      <Route path="/category/:categoryId" element={<ItemListContainer /> } />
      <Route path="/item/:idItem" element={<ItemDetailContainer />} />
    </Routes>
    <Footer />
    </BrowserRouter>
   
    </>
  )
}

export default App;



