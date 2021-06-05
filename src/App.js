import React from 'react';
import ReactNotifications from 'react-notifications-component';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <div>
      <ReactNotifications />
      <Home/>
    </div>
  );
};

export default App