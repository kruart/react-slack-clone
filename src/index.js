import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import firebase from './firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";

import 'semantic-ui-css/semantic.min.css'
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
           if (user) {
               // console.log(user);
               // setUser();
               this.props.history.push('/')
           }
        });
    }

    render() {
        return (
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </Switch>
        );
    }
}

const RootWithAuth = withRouter(Root);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RootWithAuth />
        </Router>
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
