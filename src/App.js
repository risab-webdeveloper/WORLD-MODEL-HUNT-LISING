import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Footer from './components/common/Footer';
import Hero from './components/pages/Home/Hero';
import Navbar from './components/common/Navbar';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
         <Route path='/' exact element={<Hero/>} />
      </Routes>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
