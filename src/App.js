import "./App.css";
import Login from "./create_login/index.jsx";
import HomePage from "./HomePage";
import MovieGrid from "./movieGrid";
import PageMovieDetails from "./movieDetails";
import PageBookTicket from "./BookTicket";
import DivMovieSeatPlan from "./MovieSeatPlan/index.jsx";
import { Router, Route, Switch } from "react-router-dom";
import DefaultRouter from "./router/DefaultRouter";
import history from "./services/history.jsx";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        {
          <Switch>
            <Route path="/create">
              <Login></Login>
            </Route>
            <DefaultRouter exact path="/" Component={HomePage} />
            <DefaultRouter path="/movie-List/:1" Component={MovieGrid} />
            <DefaultRouter
              path="/movie-details/:id_movie/"
              Component={PageMovieDetails}
            />
            <DefaultRouter
              path="/Book-Tickets/:id_movie"
              Component={PageBookTicket}
            />
            <DefaultRouter
              path="/movie-seat-plan/:url/:id_movie/:showtime/:date"
              Component={DivMovieSeatPlan}
            />
          </Switch>
        }
      </Router>
    </div>
  );
}

export default App;
