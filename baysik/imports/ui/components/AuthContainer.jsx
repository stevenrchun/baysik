import { createContainer } from 'meteor/react-meteor-data';
import Auth from './Auth';

// Auth Component Container
export default AuthContainer = createContainer( function() {
    var params= this.props.params;
    console.log(params)
    var media = Meteor.call('getMedia', token, function(err,res){
        console.log(res);
        console.log(err);
        return res
    });

    return {
        data: media
    }

}, Auth);
