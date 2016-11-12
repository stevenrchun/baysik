import React, { Component, PropTypes } from 'react';
import { AccountsTemplates } from 'meteor/useraccounts:core';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover';
import Dialog from 'material-ui/Dialog';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Glyphicon } from 'react-bootstrap';
import Blaze from 'meteor/gadicc:blaze-react-component';
import TextField from 'material-ui/TextField';
import Snackbar from 'material-ui/Snackbar';
import classNames from 'classnames';
import { Meteor } from 'meteor/meteor';
import { State } from '../../api/state/client/state.js';

//import { Tasks } from '../../api/tasks.js';
//import Task from '../Task.jsx';
//import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

// Navbar Component
export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //hideCompleted: false,
            open: false,
            open1: false,
            openModal: false,
            scrolled: false,
            validated: false,
            emailNotValid: true,
            email: '',
            snackbar: false,
            success: '',
        };
        console.log(this.props.user);
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    };

    componentDidUpdate() {
        if (this.state.open1 == true && this.props.user) {
            this.setState({
                open1: false,
                openModal: this.props.user ?
                    ( this.props.user.profile.blitzmail == null ) : false,
            });
            console.log("component did update");
            console.log('Blitzmail does not exists' + ( this.props.user.blitzmail == null ));
        }

        if (this.state.snackbar == true) {
            this.setState({
                snackbar: false,
            });
        }
        /*
        if (this.state.openModal != this.props.needBlitzmail) {
            this.setState({
                openModal: this.props.needBlitzmail,
            })
        }
        console.log('openModal is' + this.props.needBlitzmail)
        //this.setState({openModal: this.props.needBlitzmail});
        */
    }

    handleScroll() {
        if (window.scrollY > 5) {
            this.setState({
                scrolled: true
            });
        }
        else if (window.scrollY <= 5) {
            this.setState({
                scrolled: false
            });
        }
    };


    handleTouchTap(event) {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose() {
        this.setState({
            open: false,
        });
    };

    signInTouchTap(event) {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({
            open1: true,
            anchorEl2: event.currentTarget,
        });
    };

    signInRequestClose() {
        this.setState({
            open1: false,
        });
    };

    handleEmailChange(event) {
        var dartReg = /.+@dartmouth\.edu$/;
        this.setState({
            email: event.target.value,
        });
        if (dartReg.test(event.target.value)) {
            this.setState({
                emailNotValid: false
            });
        }
        else {
            this.setState({
                emailNotValid: true
            });
        }


    };

    handleModalCancel() {
        this.setState({
            openModal: false,
        });
        console.log("cancel handler hit")
    };

    handleModalConfirm() {
        Meteor.call('users.addBlitz', this.state.email, (err, res) => {
            if (err) {
                alert(err);
                this.setState({
                    success: 'Err..you broke something',
                    snackbar: true,
                    openModal: false,
                });

            } else {
                this.setState({
                    success: 'Blitzmail added!',
                    snackbar: true,
                    openModal: false,
                });
            }
        });
    }

    render() {

        var navClass = classNames({
            'navBar': true,
            'navBar-scrolled': this.state.scrolled,
            'navBar-unscrolled': !this.state.scrolled,
        });

        const actions = [
            <RaisedButton
                label="Nope :("
                primary={true}
                onTouchTap={this.handleModalCancel.bind(this)}
                className="modal-response"
                labelColor="#4183D7"
            />,
            <RaisedButton
                label="Yee"
                primary={true}
                disabled={this.state.emailNotValid}
                onTouchTap={this.handleModalConfirm.bind(this)}
                className="modal-response"
            />,
        ];

        return (
            <div>
                <AppBar className={navClass} id="nav"
                    iconElementLeft={
                        <div className="nav-left-elements">
                            <Link to="/landing"><img src="/resources/noun_15120_cc.svg"></img></Link>
                            <h3>Campfire</h3>

                            <div className="dropdown-wrapper">
                                <RaisedButton className="dropdown"
                                    onTouchTap={this.handleTouchTap.bind(this)}
                                    label="Categories"
                                />
                                <RaisedButton className="mobile-dropdown"
                                    onTouchTap={this.handleTouchTap.bind(this)}

                                >
                                    <Glyphicon glyph="triangle-bottom"></Glyphicon>
                                </RaisedButton>

                                <Popover
                                    open={this.state.open}
                                    anchorEl={this.state.anchorEl}
                                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                    onRequestClose={this.handleRequestClose.bind(this)}
                                    animation={PopoverAnimationVertical}
                                >
                                    <Menu>
                                        <MenuItem primaryText="Books" />
                                        <MenuItem primaryText="Electronics" />
                                        <MenuItem primaryText="Furniture" />
                                        <MenuItem primaryText="Misc" />
                                    </Menu>
                                </Popover>
                            </div>

                            <input type="text" placeholder="Find stuff yo"/>

                        </div>
                    }
                    iconElementRight={
                        <div className="nav-right-elements">
                            <Link to="/form/title="><img className="add-item" src="/resources/add-item.svg"></img></Link>
                            <img className="pack" src="/resources/pack.svg"></img>

                            { this.props.user ?

                                <Link to={`/profile/user=${Meteor.userId()}`}><img className="profile" src="/resources/profile.svg"></img></Link>

                                :

                                <div className="sign-in-wrapper">
                                    <RaisedButton className="sign-in-dropdown"
                                                  onTouchTap={this.signInTouchTap.bind(this)}
                                                  label="Sign In"
                                    />

                                    <Popover
                                        open={this.state.open1}
                                        anchorEl={this.state.anchorEl2}
                                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                        onRequestClose={this.signInRequestClose.bind(this)}
                                        animation={PopoverAnimationVertical}
                                    >
                                        <div>
                                            <div className="sign-in-menu-wrapper">
                                                <img className="login-logo" src="/resources/red_logo.svg"></img>
                                                <Blaze className="sign-in-menu" template="atForm"/>
                                            </div>
                                        </div>
                                    </Popover>
                                </div>

                            }


                        </div>
                    }
                >
                </AppBar>
                <Dialog
                    title="Welcome to Dartmouth Campfire!"
                    actions={actions}
                    modal={true}
                    open={this.state.openModal}
                >
                    <h3>But do you even go here? Enter your Blitz.</h3>
                    <TextField value={this.state.email} placeholder={'@dartmouth.edu'}
                               onChange={this.handleEmailChange.bind(this)}>
                    </TextField>
                </Dialog>
                <Snackbar
                    open={this.state.snackbar}
                    message={this.state.success}
                    autoHideDuration={2000}
                />
            </div>
        );
    }
}

/*
 <div className="email-menu">
 <h3>First, enter your Dartmouth Email</h3>
 <input type="text" value={this.state.email}
 defaultValue={'@dartmouth.edu'}
 onChange={this.handlEmailChange.bind(this)}
 placeholder="Find stuff yo"/>
 </div>
 */
