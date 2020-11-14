import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {Provider} from 'react-redux';
import Store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
//Componentes
import Login from './usuarios/login'

class App extends Component {

  render(){
    return (
      <Provider store={Store}>
        <div className="App">
          <header className="">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              Aplicación de Control
            </h1>
          </header>
          <Router>
            <div>
              <nav className="navbar">
                  <li className="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#">Users</Link>
                  </li>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/users">
                  
                </Route>
                <Route path="/">
                  
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
