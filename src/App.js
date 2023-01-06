import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Documentation from './pages/Documentation';

import NewNavbar from './components/New/Navbar';
import NewDashboard from './pages/New/Dashboard/Index';
import NewTokens from './pages/New/Tokens/Index';
import NewUsage from './pages/New/Usage/Index';
import NewProfile from './pages/New/Settings/Profile';
import NewPassword from './pages/New/Settings/ChangePassword';
import NewPlans from './pages/New/Settings/Plans';
import About from './pages/About';
import Contact from './pages/Contact';

import Navbar from './v2/components/NavBar';
import Index from './v2/pages/Landing Page/Index';
import SideBar from './v2/components/Account/SideBar';
import {default as BeIndex} from './pages/LandingPage/Index';
import Dashboard from './v2/pages/Account/DashBoard';
import Usage from './v2/pages/Account/Usage';
import PricePlans from './v2/pages/Account/PricePlans';
import OnDemand from './v2/pages/Account/OnDemand';
import {default as DocIndex} from './v2/pages/Documentation/Index';
import {default as DocDesign} from './v2/pages/Documentation/Documentation';
import PrivacyPolicy from './v2/pages/Account/PrivacyPolicy';
import TermsOfUse from './v2/pages/Account/TermsOfUse';
import Notification from './v2/pages/Account/Notification';


function App() {
  return (
    <Router>
      <Routes>
    
        <Route path='/' element={<BeIndex />} />

        <Route path="/v2" element={<Navbar />}>
            <Route index element={<Index />} />
            {/* <Route path="documentation" element={<DocIndex />} /> */}
        </Route>
        <Route path="/v2/documentation" element={<DocDesign />} />
        <Route path="/v2/account" element={<SideBar />}>
          <Route index element={<Dashboard />} />
          <Route path="usage" element={<Usage />} />
          <Route path="tokens" element={<NewTokens />} />
          <Route path='plans' element={<PricePlans />} />
          <Route path='profile' element={<NewProfile />} />
          <Route path='password' element={<NewPassword />} />
          <Route path='ondemand' element={<OnDemand />} />
          <Route path='contact' element={<Contact />} />
          <Route path='notification' element={<Notification />} />
          <Route path='privacypolicy' element={<PrivacyPolicy />} />
          <Route path='termsofuse' element={<TermsOfUse />} />
        </Route>

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

          
        <Route path="/pricing" >
            <Route index element={<Pricing />} />
        </Route>
        
        <Route path="/features" >
            <Route index element={<Features />} />
        </Route>
          

      */}


        <Route path="/" element={<NewNavbar />}>
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
        </Route>
        <Route path="/documentation" >
          <Route index element={<Documentation />} />
        </Route>
        <Route path='/LandingPage' element={<Index />} />
        <Route path="/account" element={<NewNavbar /> }>
          <Route index element={<NewDashboard />} />
          <Route path="dashboard" element={<NewDashboard />} />
          <Route path="tokens" element={<NewTokens />} />
          <Route path="usage" element={<NewUsage />} />
          <Route path='plans' element={<NewPlans />} />
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
