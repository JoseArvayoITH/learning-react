
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Route, link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';

function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
     <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Products/:id" element={<Product/>} />
      </Routes>
     </Router>
     <Footer/>
    </div>
  );
}

export default App;
