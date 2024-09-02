import './App.css';
import React, { useState } from 'react';ex
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Offer from './components/Offer/Offer';
import Login from "./components/Login/Login";

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
}
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/Offer" element={<Offer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
