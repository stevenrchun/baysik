import { AccountsTemplates } from 'meteor/useraccounts:core';
import NavBar from '../ui/components/NavBar';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';

/*
var onSubmit = function(error, state) {
  if (!error) {
    if (state === 'signIn') {
      //ReactDOM.render(<NavBar/>, document.getElementById('render-target'));
    }
    if (state === 'signUp') {

    }
  }
}
*/

var validation = function(input) {
    var valReg = /.+@dartmouth\.edu/;
    if (valReg.exec(input)) {
        this.setState({validated: true});
    }
};

var getProfile = function(userId, options) {
    var user = Meteor.users.findOne(userId);
    if (typeof(user.services.facebook) != "undefined") {
        user.services.facebook.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    }
    console.log(user);

    Meteor.users.update(userId, {
        $set: {
            services: {
                facebook: {
                    profile: "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large"
                },
            },
        }
    });
}

AccountsTemplates.configure({
    showLabels: false,
    confirmPassword: false,
    texts: {
        sep: '',
        signUpLink_pre: "",
        signUpLink_link: "",
        signUpLink_suff: "",
        title : {
            signIn: 'Sign In',
        },
    },


});

AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
/*
AccountsTemplates.addField(
{
 _id: 'email',
 type: 'email',
 required: true,
 displayName: "email",
 re: /.+@dartmouth\.edu/,
 errStr: 'Invalid email',
 placeholder: 'Dartmouth Email',
 continuousValidation: true,
 //func: validation(value)
}
);
 */