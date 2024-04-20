import React from 'react'; 
import {BrowserRouter as Router, Route , Routes, Navigate } from 'react-router-dom'; 
import './App.css'; 
import Register from './Auth/Register';
import Login from './Auth/Login';
import Dashboard from './pages/Dashboard';
import { useAuth } from './contexts/AuthContext';


const App = () => {

  const {isAuth} = useAuth();  

  return (
    <Router>
      <Routes> 
        <Route path='/' 
        element={
          !isAuth ?  <Register /> : <Navigate to='/dashboard' /> } 
        />
        <Route path='/login' 
        element={ !isAuth ? <Login />: <Navigate to='/dashboard' />}
         /> 
        <Route path='/dashboard' element={ isAuth ?  <Dashboard /> : <Login /> } /> 
      </Routes>
    </Router>
  )
}

export default App; 