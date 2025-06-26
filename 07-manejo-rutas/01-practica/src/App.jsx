import { NavBar } from "./components/NavBar"
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Store } from "./Pages/Store";
import { Cart } from "./Pages/Cart";
import { NotFound } from "./Pages/NotFound";

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/> {/* Home */}
      <Route path="/about" element={<AboutUs/>}/> {/* About Us */}
      <Route path="/store" element={<Store/>}/> {/* Store */}
      <Route path="/cart" element={<Cart/>}/> {/* Cart */}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

/* Routes y Route configuran las rutas individuales */

export default App
