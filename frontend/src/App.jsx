import Header from "./component/Header"
import Home from "./pages/Home"
import Footer from "./component/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Achievement from "./pages/Achievement";
import Gallery from "./pages/Gallery";
import Registration from "./pages/Registeration";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
