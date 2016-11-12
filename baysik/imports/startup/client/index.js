import App from '../../ui/components/App.jsx';
import React from 'react';
import { render } from 'react-dom';
import { Meteor }  from 'meteor/meteor';

Meteor.startup(() => {
    render(
    <App>
    </App>
        ,document.getElementById('render-target')
    );
});