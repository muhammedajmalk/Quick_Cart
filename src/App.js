import './App.css';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home Page/Home';
import About from './Components/Pages/About Page/About';
import Shop_Watch from './Components/Pages/Shop Watch/Shop';
import Contact from './Components/Pages/Contact/Contact';
import Footer from './Components/Footer'
import Details from './Components/Pages/Home Page/Details';
import Cart from './Components/Pages/Cart/Cart';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Details/>} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop_Watch />}/>
        <Route path='/shop/:id' element={<Details/>}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
