import './App.css';
import Login from "./create_login/index.js";
import { Provider } from 'react-redux'
import store from './redux/store/index.js'
import HomePage from './HomePage';
import MovieGrid from './movieGrid';
function App() {
  return (
    <div className="App">
      {/* <Login></Login> */}
      <HomePage></HomePage>
      {/* <MovieGrid></MovieGrid> */}
    </div>
  );
}

export default App;
