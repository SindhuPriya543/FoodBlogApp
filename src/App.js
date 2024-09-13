import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FoodList from './components/FoodList';
import FoodDetail from './components/FoodDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<FoodList />} />
          <Route path="/food/:id" element={<FoodDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;