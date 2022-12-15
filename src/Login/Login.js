import { Component } from "react";
import './Login.css';
// import logo from './logo.svg';

class Login extends Component {


    render() {
        return (
            <body>
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <form >
                    <div>
                        <p class="head">Log in to Facebook</p>
                    </div>
                    <div>
                        <input className='input' type="text" placeholder="Email address" name="email" />
                    </div>
                    <div>
                        <input className='input' type="password" placeholder="Password" name="password" minlength="8" maxlength="12" />
                    </div>
                    <div>
                        <button className="button">Log in</button>
                    </div>
                    <div>
                        <a className="link" href='#'> Sign up for Facebook</a>
                    </div>
                </form>
            </body>
        );
    }
}

export default Login;