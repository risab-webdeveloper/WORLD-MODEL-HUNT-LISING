import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Footer from './components/common/Footer';
import Hero from './components/pages/Home/Hero';
import FinanceHero from './components/pages/Home/FinanceHero';
import CompanyHighlight from './components/pages/Home/CompanyHighlight';
import SubscribeForm from './components/pages/Home/SubscribeForm';
import Cards1 from './components/pages/Home/Cards1';
import DemoClassEnroll from './components/pages/Home/DemoClassEnroll';
import GuestLecture from './components/pages/Home/GuestLecture';


function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path='/' exact element={<GuestLecture/>} />
         <Route path='/' exact element={<DemoClassEnroll/>} />
         <Route path='/' exact element={<Cards1/>} />
         <Route path='/' exact element={<SubscribeForm/>} />
         <Route path='/' exact element={<CompanyHighlight/>} />
         <Route path='/' exact element={<FinanceHero/>} />
         <Route path='/' exact element={<Hero/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
