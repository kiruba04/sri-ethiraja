
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* Pages */

import Home from './pages/HomePage/HomePage';
import Sappage from './pages/SAP/Sappage';
import Web from './pages/Webservice/Web';
function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sap" element={<Sappage/>}/>
        <Route path="/web-service" element ={<Web/>}/>
      </Routes>
    
  </Router>
  );
} 

export default App;
