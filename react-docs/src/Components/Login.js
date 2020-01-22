import React from 'react';
import '../App.css';
import ReactDOM from'react-dom'


function Login(){
    const LoginPageConst = (
      <div id="LoginPage" className="longinListDiv shadowing form-container m-1 p-1">
            <ul className="list shadowing p-1">
                <br />
                <br />
                <li><h2>Login</h2></li>
                <br />
                <li><input type="text" className="m-1 p-1" id="Username" placeholder="Please enter your username" /></li>
                <li><input type="password" className="m-1 p-1" id="Password" placeholder="Please enter your password" /></li>
                <li><input id="Submit" className="btn btn-success m-1 p-1" type="button" value="Submit" /></li>
            </ul>
      </div>
    );
    ReactDOM.render(
        LoginPageConst,
      document.getElementById('root')
    );
    return LoginPageConst;
}

export default Login;