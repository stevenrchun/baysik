import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Col } from 'react-bootstrap';
import Hero from './Hero.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import Item from './Item.jsx';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { Link } from 'react-router';


// Profile component - one user's profile
export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleClick() {
        AccountsTemplates.logout();
        console.log("HANDLECLICK GOT TRIGGERRRED")
    }

    getProfile() {
        if (Meteor.user() && (Meteor.user().services.facebook.profile == null)) {
            console.log('went inside for loop')
            Meteor.call('users.getProfile', (err, res) => {
                if (err) {
                    alert(err);
                }
            });
        }
    }


    render() {

        var profStyle = {
            'backgroundImage': 'url(' + this.props.profile + ')',
        }

        var userItems = this.props.userItems.map(function(item) {
            return (
                <Item key={item.title} item={item}></Item>
            );
        });

        return (
            <div>
                <div className="banner"></div>
                    <Col sm={3} smOffset={1} xs={8} xsOffset={2} componentClass="div" className="profile-card text-center">
                        <Col xs={12} componentClass="img" src={this.props.profile} className="profile-pic"/>

                        {this.props.user ?
                            <div>
                                <h1>{this.props.user.services.facebook.name}</h1>
                                <p>{this.props.user.profile.blitzmail.email}</p>
                            </div>
                            :
                            <h1></h1>
                        }

                        <Link to="/landing"><RaisedButton className="button" onClick={this.handleClick}>Log Out</RaisedButton></Link>
                    </Col>

                    <Col sm={7} smOffset={0} xs={10} xsOffset={1} componentClass="div" className="profile-item-card">
                        <Col componentClass="div" sm={12} className="text-center">
                            {this.props.user ? <h2>{this.props.user.services.facebook.first_name}'s Posts</h2> : <h1></h1> }
                        </Col>
                        {userItems}
                    </Col>
            </div>
        );

    }
}
/*<button onClick={this.getProfile}>get a pitcher</button>*/