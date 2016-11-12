import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
    'users.addBlitz'(text) {
        check(text, String);

        // Make sure the user is logged in before inserting a task
        if (! Meteor.user()) {
            throw new Meteor.Error('not-authorized');
        }

        Meteor.users.update(Meteor.userId(), {
            $set: {
                'profile.blitzmail': {
                    email: text,
                    validated: false,
                },
            }
        });
    },

    'users.getProfile'() {
        if (Meteor.user() && (Meteor.user().services.facebook.profile == null)) {

            Meteor.users.update(Meteor.userId(), {
                $set: {
                   'services.facebook.profile': "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large"
                }
            });
        }
    }

});

Meteor.publish("userData", function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId},);
    } else {
        this.ready();
    }
});
