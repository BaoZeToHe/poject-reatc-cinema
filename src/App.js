import './App.css';
import Login from "./create_login/index.jsx";
import { Provider } from 'react-redux'
import store from './redux/store/index.js'
import HomePage from './HomePage';
import MovieGrid from './movieGrid';
import PageMovieDetails from './movieDetails';
import PageHeader from './header/header';
import Footer from './Footer/index.jsx';

import { Route, Switch, useLocation } from 'react-router-dom';
import {useEffect, useState} from "react"
function App() {
  let location = useLocation();
  return (
    <div className="App">
    {location.pathname!=='/login' ?  (<div className="sticky top-0 z-50 w-full "><PageHeader></PageHeader></div>) : (null)}
      <Switch>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/movie-List">
          <MovieGrid></MovieGrid>
        </Route>
        <Route path="/movie-details">
          <PageMovieDetails></PageMovieDetails>
        </Route>
      </Switch>
      {location.pathname!=='/login' ?  <Footer></Footer>:null}
    </div>
  );
}

export default App;
