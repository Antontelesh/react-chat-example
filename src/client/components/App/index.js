import {connect} from 'react-redux';
import React from 'react';
import Chat from '../Chat/index';
import Login from '../Login/index';

class App extends React.Component {

  render() {
    return this.props.username
      ? <Chat />
      : <Login />;
  }

}

export default connect(
  state => state
)(App);
