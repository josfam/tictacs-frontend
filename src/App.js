import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
