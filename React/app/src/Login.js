import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form action="/home">
                    <input type="submit" value="Home" />
                </form>
            </div>
        );
    }
}

export default Login;