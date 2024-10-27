import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Header from "./conponents/Header";
import "./css/main.scss"
import Footer from "./conponents/Footer";
import Payment from "./pages/Payment";
import CollectedData from "./pages/CollectedData";
import Admin from "./pages/Admin";
import './css/app.scss'
import Confirmpayment from "./pages/Confirmpayment";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<CollectedData />} />
        <Route path="/adminlogin" element={<Admin />} />
        <Route path="/g7ajcna6&ascb%cbhaj@j777asa455a&sancas%ah47sa54%$shb78sxc0as5" element={<Confirmpayment />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
