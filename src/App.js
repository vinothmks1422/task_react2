import { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';

class App extends Component {

  render() {
    return (
      <div>
        <Login></Login>
      </div>
    );
  }
}

export default App;
