import React from 'react';
import './App.css';
import Login from './Compenents/Login'
import SignIn from './Compenents/SignIn';
import Header from './Compenents/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Profile from './Compenents/Profile';
import Erroor from './Compenents/Error';
import {store} from './Compenents/state/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Router>
        <Routes>
          <Route path="/" element={<Header/>}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/signin" element={<SignIn/>}>
          </Route>
          <Route path="/profile" element={<Profile/>}>
          </Route>
          <Route path='*' element={<Erroor/>}></Route>
        </Routes>
    </Router>
    </Provider>
  );
}

export default App;
