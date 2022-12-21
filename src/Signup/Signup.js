import { Component } from "react";
import './Signup.css';
import { Link } from 'react-router-dom';

class Signup extends Component {

    render() {
        return (
            <body>
                <form >
                    <div>
                        <h1 class="head">Create a new account</h1>
                        <p class="head">It's quick and easy</p>
                    </div>
                    <hr />
                    <div>
                        <input className="input" type="text" placeholder="First name" name="firstName" />
                    </div>
                    <div>
                        <input className="input" type="text" placeholder="Last name" name="lastName" />
                    </div>
                    <div>
                        <input className="input" type="email" placeholder="Email address" name="email" />
                    </div>
                    <div>
                        <input className="input" type="text" placeholder="Create password" name="password" minlength="8" maxlength="12" />
                    </div >
                    <div>
                        <Link to="/">
                            <button className="button">Sign Up</button>
                        </Link>
                    </div >
                    <div>
                        <Link to="/">
                            <a className="link">Already have an account?</a>
                        </Link>
                    </div >
                </form >
            </body >
        );
    }
}

export default Signup;