import React from 'react';
// import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import Main from '../Main/Main';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className='root'>
      <Header loggedIn={loggedIn} />
      <Main />
    </div>
  );
}

export default App;
