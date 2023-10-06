import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path='/' exact element={<Home/>} />
      </Routes>
    </Router>
   
    <h1 className="text-h1 font-bold text-red text-center">
      Hello world!
    </h1>
    </>
  );
}

export default App;
