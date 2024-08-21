import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Offer from './components/Offer/Offer';

function App() {
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
