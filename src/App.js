import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Footer from './components/common/Footer';
import Hero from './components/pages/Home/Hero';

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path='/' exact element={<Hero/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
