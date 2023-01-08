import './App.css';
import {
  BrowserRouter as Router, Switch,
  Route,
} from "react-router-dom";
import LoginPage from './components/LoginPage';
import AdminPage from './components/Adminpage1';


function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={LoginPage} exact={true} />
          <Route path='/admin' component={AdminPage} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
