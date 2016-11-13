import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { State } from '../../api/state/client/state';

// Landing component
export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: this.props.location.hash.replace('#access_token=', '')
        };
    }

    getMedia() {
        Meteor.call('getMedia', this.state.token, function(err,res){
            console.log(res);
            console.log(err);
            this.setState({
                data: res,
            });
        }.bind(this));
    }

    componentDidMount() {
        this.getMedia();
    }

    shouldComponentUpdate() {
        return !this.state.data;
    }
    componentDidUpdate() {
        if (this.state.data) {
            console.log(this.state.data);
        }
    }

    render() {
        console.log(this.props.location);
        console.log(this.props.params);

        if (this.state.data) {
            var listItems = this.state.data.data.map(function (item) {
                console.log(item);
                return (
                    <img src={item.images.standard_resolution.url} key={item.created_time}/>
                );
            });
        }




        return (
            <div>
                <h1>
                    different, authenticated dicks
                </h1>
                <p>{this.state.token}</p>
                {this.state.data ? listItems : <div/> }
            </div>

        );

    }
}





