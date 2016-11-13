/**
 * Created by stevenchun on 11/12/16.
 */
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

Meteor.methods({
    'getMedia'(token) {
        console.log('getMedia for' + token);
        var url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+token+'&count=15';
        var data = HTTP.get(url).data;
        return data;
    },
});
