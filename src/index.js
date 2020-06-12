import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/SignIn/signIn';
import {
    BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import Dashboard from "./Components/DashBoard/dashboard";
import SignUp from "./Components/SignUp/signUp";
import CheckConnected from "./Components/Controller/CheckConnected";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            {CheckConnected()}

            <Switch>
                <Route path="/mysuperday/dashboard">

                    <Dashboard/>
                </Route>
                <Route path="/mysuperday/users/signup">
                    <SignUp/>
                </Route>
                <Route path="/mysuperday/users/signin">
                    <App/>
                </Route>
                <Route path="/mysuperday/users/signin">
                    <App/>
                </Route>
                <Route path="/">
                    <App/>
                </Route>
            </Switch>


        </Router>


    </React.StrictMode>,
    document.getElementById('root')
);

