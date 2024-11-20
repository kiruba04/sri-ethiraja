
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* Pages */

import Home from './pages/HomePage/HomePage';
import Sappage from './pages/SAP/Sappage';
import Web from './pages/Webservice/Web';
import Apppage from './pages/Apppage/Appdev';
import Proman from './pages/Proman/Proman';
import Agam from './pages/Sriagammithiran/Agam';
import Templeerp from './pages/templeerp/Templeerp';
import Contactus from './pages/contactus/Contactus';

function App() {
  return (
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sap" element={<Sappage/>}/>
        <Route path="/web-service" element ={<Web/>}/>
        <Route path="/app-dev" element={<Apppage/>}/>
        <Route path="/proman" element={<Proman/>}/>
        <Route path="/sri-agam-mithran" element={<Agam/>}/>
        <Route path="/templeerp" element={<Templeerp/>}/>
        <Route path="/contact-us" element={<Contactus/>}/>
      </Routes>
    
  </Router>
  );
} 

export default App;
