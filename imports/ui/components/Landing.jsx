import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import Hero from './Hero.jsx';
import Content from './Content.jsx';
import NavBar from './NavBar.js';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';


// Landing component
export default class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }



    render() {
        return (
            <div>
                <Hero></Hero>
                <Content></Content>
            </div>
        );

    }
}
