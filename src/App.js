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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
        </Route>
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
      </Routes>
    </Router>
  );
}

        
export default App;
