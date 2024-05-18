import { useState } from 'react'
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
//import UserList from './components/UserList'

function App() {
  const[content,setContent]=useState("Start");
  const handleChange=()=>{
    setContent(content==="Start" ? "Stop":"Start");
  }

  return (
    <>
    <Header></Header>
    
    
    </>
   
    
  )
}

export default App
