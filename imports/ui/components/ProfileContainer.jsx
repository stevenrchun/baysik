import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar.js';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Col } from 'react-bootstrap';
import { Tabs, Tab, IconButton } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
import { Link } from 'react-router';
import classNames from 'classnames';
import Profile from './Profile';

// Profile Component Container
export default ProfileContainer = createContainer( function({params}) {
    Meteor.subscribe('userData');
    console.log(Meteor.user())

    var queryResults = [
        {title: 'Meet Halfway', price: '$20.00', description: 'you\'re going to buy this book, not read it, but \
        still need it lol', owner: 'Phil Hanlon'},
        {title: 'Public Policy 110 Book', price: '$20.00', description: 'you\'re going to buy this book, not read it, but \
        still need it lol', owner: 'Phil Hanlon'},
        {title: 'Public Policy 200 Book', price: '$20.00', description: 'you\'re going to buy this book, not read it, but \
        still need it lol', owner: 'Phil Hanlon'}
    ];

    return {
        user: Meteor.user(),
        userId: params.id,
        profile: Meteor.user() ? Meteor.user().services.facebook.profile : '',
        userItems: queryResults
    }

}, Profile);
