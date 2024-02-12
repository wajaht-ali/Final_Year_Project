import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';

import "./styles/App.css";
function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Routes>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
