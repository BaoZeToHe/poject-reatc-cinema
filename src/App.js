import './App.css';
import Login from "./create_login/index.js";
import { Provider } from 'react-redux'
import store from './redux/store/index.js'

function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
