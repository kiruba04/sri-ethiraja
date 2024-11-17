
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* Pages */

import Home from './pages/HomePage/HomePage';
import Sappage from './pages/SAP/Sappage';
import Web from './pages/Webservice/Web';
import Apppage from './pages/Apppage/Appdev'
function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sap" element={<Sappage/>}/>
        <Route path="/web-service" element ={<Web/>}/>
        <Route path="/app-dev" element={<Apppage/>}/>
      </Routes>
    
  </Router>
  );
} 

export default App;
