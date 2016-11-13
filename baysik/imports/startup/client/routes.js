import React from 'react';
import { render } from 'react-dom';
import { Meteor }  from 'meteor/meteor';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from '../../ui/components/App.jsx';
import Landing from '../../ui/components/Landing.jsx';
import Auth from '../../ui/components/Auth';
import AuthContainer from '../../ui/components/AuthContainer';

Meteor.startup(() => {
    render(
            <Router  history={ browserHistory }>
                <Route path="/" component={ App }>
                    <IndexRedirect to="/landing"/>
                    <Route path="/landing" component={Landing}>
                        <Route path="/landing/authenticated/(:token)" component={Auth}/>
                    </Route>
                </Route>
            </Router>,
        document.getElementById('render-target')
    );
});
