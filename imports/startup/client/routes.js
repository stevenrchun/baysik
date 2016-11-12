import React from 'react';
import { render } from 'react-dom';
import { Meteor }  from 'meteor/meteor';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from '../../ui/components/App.jsx';
import Landing from '../../ui/components/Landing.jsx';
import Form from '../../ui/components/Form.jsx';
import Profile from '../../ui/components/Profile.jsx';
import ProfileContainer from '../../ui/components/ProfileContainer.jsx';


const muiTheme = getMuiTheme({
    inkBar: {
        backgroundColor: 'white',
    },

});

Meteor.startup(() => {
    render(
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router  history={ browserHistory }>
                <Route path="/" component={ App }>
                    <IndexRedirect to="/landing" />
                    <Route path="/landing" component={Landing}/>
                    <Route path="/form/title=(:title)" component={Form}/>
                    <Route path="/profile/user=(:id)" component={ProfileContainer}/>
                </Route>
            </Router>
        </MuiThemeProvider>,
        document.getElementById('render-target')
    );
});
