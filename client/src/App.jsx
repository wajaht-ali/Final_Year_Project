import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Category from "./components/Category";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from './components/Signup';
import Login from './components/Login';

import "./styles/App.css";
function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Routes>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
