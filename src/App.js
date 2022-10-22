import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
  import Sidebar from './components/DashBoard/Sidebar';
import Dashboard from './pages/Dashboard';
import Billing from './pages/Billing';
import Usage from './pages/Usage';
import Profile from './pages/Profile';
import Documentation from './pages/Documentation';
import Pricing from "./pages/Pricing";
import Features from './pages/Features';
import Contact from './pages/Contact';
import Index from './pages/LandingPage/Index';

function App() {
  return (
    <Router>
      <Routes>
    
        <Route path='/' element={<Index />} />
        <Route path="/dashboard" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path='/LandingPage' element={<Index />} />

         <Route path="/billing" element={<Sidebar />}>
          <Route index element={<Billing />} />
        </Route>

         <Route path="/usage" element={<Sidebar />}>
          <Route index element={<Usage />} />
        </Route>

         <Route path="/profile" element={<Sidebar />}>
          <Route index element={<Profile />} />
        </Route>

         <Route path="/documentation" element={<Sidebar />}>
          <Route index element={<Documentation />} />
        </Route>
        
      <Route path="/document" >
          <Route index element={<Documentation />} />
      </Route>

        
      <Route path="/pricing" >
          <Route index element={<Pricing />} />
      </Route>
       
      <Route path="/features" >
          <Route index element={<Features />} />
      </Route>
        

      <Route path="/contact" >
          <Route index element={<Contact />} />
      </Route>
        
      </Routes>
    </Router>
  );
}

        
export default App;
