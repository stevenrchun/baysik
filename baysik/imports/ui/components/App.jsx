import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Landing from './Landing';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
    inkBar: {
        backgroundColor: 'white',
    },

});
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //hideCompleted: false,
    };
  }


  render() {
      return (
          <div>
              {this.props.children}
          </div>
        );
    }
}

App.propTypes = {
    /*
    tasks: PropTypes.array.isRequired,
    incompleteCount: PropTypes.number.isRequired,
    currentUser: PropTypes.object,
    */
};

export default createContainer(() => {
  Meteor.subscribe('');

  return {
    /*
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
    */
  };
 }, App);
