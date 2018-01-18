import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage';

const App = () => {
  return(
    <div>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/login" exact component={LoginPage}></Route>
    </div>
  )
}

export default App;
