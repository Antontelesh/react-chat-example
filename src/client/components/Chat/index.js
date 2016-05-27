import map from 'lodash/map';
import {connect} from 'react-redux';
import React from 'react';
import chat from '../../instances/chat';
import Form from '../Form/index';
import Buddies from '../Buddies/index';
import Messages from '../Messages/index';
import styles from './styles.css';

class Chat extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.columns}>
          <div className={styles.sidebar}>
            <div>
              <Buddies users={this.props.users} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.messages}>
              <Messages messages={this.props.messages} />
            </div>
            <div className={styles.form}>
              <Form onSubmit={chat.sendMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(
  state => state
)(Chat);
