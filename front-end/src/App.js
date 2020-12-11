import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import SignUp from './Components/SignUp';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
// }

// callAPI() {
//     fetch("http://localhost:7000/dashboard")
//         .then(res => res.text())
//         .then(res => this.setState({ apiResponse: res }))
//         .catch(err => err);
// }

// componentWillMount() {
//     this.callAPI();
// }

// render(){
//   return(
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo"/>
//         <h1 className="App-title">Welcome</h1>
//       </header>
//   <p className="App-intro">{this.state.apiResponse}</p>
//     </div>
//   )
// }
// }

function App() {
  return (<Router>
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand">React Axios Tutorial</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/signup"}>Create User</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/users"}>Users List</Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              <Route exact path='/' component={SignUp} />
              <Route path="/signup" component={SignUp} />
              {/* <Route path="/users" component={Users} /> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
