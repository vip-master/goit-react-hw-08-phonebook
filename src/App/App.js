import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { isAuth } from '../utils/redux/selectors';
import Header from '../Components/header/Header.js';
import Main from '../Components/main/Main.js';
import Loader from '../Components/loader/Loader.js';

function App() {
  const auth = useSelector(isAuth);
  return (
    <Suspense fallback={<Loader />}>
      <Header isAuth={auth} />
      <Main isAuth={auth} />
    </Suspense>
  );
}

export default App;
