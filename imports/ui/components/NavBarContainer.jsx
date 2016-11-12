import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar.js';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Col } from 'react-bootstrap';
import { Tabs, Tab, IconButton } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
import { Link } from 'react-router';
import classNames from 'classnames';

// NavBar Component
export default NavBarContainer = createContainer( function() {
    Meteor.subscribe('userData');
    return {
        user: Meteor.user(),
        //needBlitzmail: Meteor.user() ? ( ! Meteor.user().email || (Meteor.user().email.length == 0) ) : false,
    }

}, NavBar);
