
import './App.css';
import Navbar from './Navbar';
import { Route, Routes } from "react-router-dom"
import Pricing from './pages/Pricing'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>

      <div className="container">
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
