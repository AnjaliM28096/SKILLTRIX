import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Career from './pages/Career';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="font-sans text-gray-800 bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;