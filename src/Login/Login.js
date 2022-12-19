import { Component } from "react";
import './Login.css';
import { Link } from 'react-router-dom';

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
                        <Link to='/home'>
                            <button className="button">Log in</button>
                        </Link>
                    </div>
                    <div>
                        <Link to='/signup'>
                            <a className="link"> Sign up for Facebook</a>
                        </Link>
                    </div>
                </form>
            </body>
        );
    }
}

export default Login;