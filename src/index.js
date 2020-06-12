import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/SignIn/signIn';
import {
    BrowserRouter as Router, Route, Switch,Redirect,
} from "react-router-dom";
import Dashboard from "./Components/DashBoard/dashboard";
import SignUp from "./Components/SignUp/signUp";
import CheckConnected from "./Components/Controller/CheckConnected";






async function PrivateRoute({ children, ...rest }) {
    const auth = true

    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}



ReactDOM.render(
    <React.StrictMode>

        <Router>


            <Switch>
                <PrivateRoute path="/mysuperday/dashboard">
                    <Dashboard />
                </PrivateRoute>
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

