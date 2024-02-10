import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  // const [loggedIn, setLoggedIn] = React.useState(false);

  // const handleLogin = () => {
  //   setLoggedIn(true);
  // };

  return (
    <div className='root'>
      <Routes>
        <Route
          path='/'
          element={<Main />}
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
