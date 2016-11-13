import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';




// Landing component
export default class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    handleLogin() {
        window.location.assign(
            'https://api.instagram.com/oauth/authorize/?client_id=c9bc98028e6a41b488e1ec88ed3bf51c&redirect_uri=http://localhost:3000/landing/authenticated/&response_type=token'
        );
    }


    render() {
        return (
            <div>
                <h1>
                    dicks
                </h1>
                <h2>
                    dickies
                </h2>
                <h3>
                    3 dickies
                </h3>
                <button onClick={this.handleLogin}>Get Dicked!</button>
                {this.props.children}
            </div>
        );

    }
}
