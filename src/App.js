import "./App.css";
import Login from "./create_login/index.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/index.js";
import HomePage from "./HomePage";
import MovieGrid from "./movieGrid";
import PageMovieDetails from "./movieDetails";
import PageBookTicket from "./BookTicket";
import PageHeader from "./header/header";
import Footer from "./Footer/index.jsx";
import DivMovieSeatPlan from "./MovieSeatPlan";
import { Router, Route, Switch, useLocation } from "react-router-dom";
import DefaultRouter from "./router/DefaultRouter";
import history from "./services/history.jsx";

import { useEffect, useState, useParams } from "react";
function App() {
  let location = useLocation();

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/create">
            <Login></Login>
          </Route>
          <DefaultRouter exact path="/" Component={HomePage} />
          <DefaultRouter path="/movie-List" Component={MovieGrid} />
          <DefaultRouter path="/movie-details" Component={PageMovieDetails} />
          <DefaultRouter path="/Book-Tickets" Component={PageBookTicket} />
          <DefaultRouter
            path="/movie-seat-plan/:showtime/:date"
            Component={DivMovieSeatPlan}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
