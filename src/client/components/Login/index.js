import {connect} from 'react-redux';
import React from 'react';
import {login} from '../../thunks';
import styles from './styles.css';

class Login extends React.Component {

  submit(event) {
    event.preventDefault();
    let username = this.input.value;
    this.props.login(username);
  }

  render() {
    return (
      <form id="login_form" className={styles.loginForm} onSubmit={this.submit.bind(this)}>
        <div className={styles.controls}>
          <input
            ref={(element) => this.input = element}
            type="text"
            name="username"
          />
          <button type="submit">Join chat</button>
        </div>
        <div className={styles.error}>{this.props.login_error}</div>
    </form>
    );
  }

}

export default connect(
  state => state,
  { login }
)(Login);
