import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss';
import 'font-awesome/css/font-awesome.min.css';
import Login from "./Components/studentPortal/SignIn";
// import Login from "./Components/adminPortal/Login"


function App() {
  return (
      <div className="container">
        <div className="header">
          Meal Manager
        </div>

        <div className="card">
          <h2>Admin Login</h2>
          <i className="fa fa-arrow-right">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
          </i>
          <div className="pic"></div>
          <button>
          </button>
        </div>
          <div className="card card2">
          <h2>Student Login</h2>
          <i className="fa fa-arrow-right"></i>
          <div className="pic"></div>
          <button>
          </button>
        </div>
      </div>
  );
}

export default App;
