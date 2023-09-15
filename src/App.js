import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/menu'  element={<Menu/>} />
          <Route path='/about'  element={<About/>} />
          <Route path='/contact'  element={<Contact/>} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
