
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Products from './components/Products.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Review from './components/Review.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<App/>}/>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/product" element={<Products/>}/>
      <Route path="/review" element={<Review/>}/>

      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
