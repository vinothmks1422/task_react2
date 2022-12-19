import { Component } from 'react';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
