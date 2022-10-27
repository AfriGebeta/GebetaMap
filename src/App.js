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

import NewNavbar from './components/New/Navbar';
import NewDashboard from './pages/New/Dashboard/Index';
import NewTokens from './pages/New/Tokens/Index';
import NewUsage from './pages/New/Usage/Index';
import NewProfile from './pages/New/Settings/Profile';
import NewPassword from './pages/New/Settings/ChangePassword';
import NewPlans from './pages/New/Settings/Plans';
import ComingSoon from "./pages/New/ComingSoon"

function App() {
  return (
    <Router>
      <Routes>
    
        <Route path='/' element={<Index />} />
{/* 
        <Route path="/dashboard" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
        </Route>

       

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

  */}
        <Route path="/pricing" >
            <Route index element={<ComingSoon />} />
        </Route>
        
        <Route path="/about" >
            <Route index element={<ComingSoon />} />
        </Route>
          

        <Route path="/contact" >
            <Route index element={<ComingSoon />} />
        </Route> 


        <Route path="/documentation" >
          <Route index element={<Documentation />} />
        </Route>
        <Route path='/LandingPage' element={<Index />} />
        <Route path="/account" element={<NewNavbar /> }>
          <Route path="dashboard" element={<NewDashboard />} />
          <Route path="tokens" element={<NewTokens />} />
          <Route path='plans' element={<NewPlans />} />
          <Route path="usage" element={<NewUsage />} />
          <Route path="settings">
            <Route index element={<NewProfile />} />
            <Route path='password' element={<NewPassword />} />
            
          </Route>
        </Route>

      </Routes>
    </Router>
  );
}

        
export default App;
