import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {

  const isLogged = localStorage.getItem('jwt') ? true : false;
  const [loggedIn, setLoggedIn] = React.useState(isLogged);

  return (
    <div className='root'>
      <Routes>
        <Route
          path='/'
          element={<Main loggedIn={loggedIn} />}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
