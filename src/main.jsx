import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css';
import './styles.scss'; 
import Navbar from './Navbar.jsx';
import AddCreators from './pages/AddCreators.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add-creators" element={<AddCreators />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
