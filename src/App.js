import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect root path "/" to SignUp */}
          <Route path="/" element={<Navigate to="/signup" />} />

          {/* Define routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
