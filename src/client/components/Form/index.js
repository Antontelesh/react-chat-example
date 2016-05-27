import React from 'react';
import styles from './styles.css';

export default class Form extends React.Component {

  submit(event) {
    event.preventDefault();
    this.props.onSubmit(this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <form className={styles.root} onSubmit={this.submit.bind(this)}>
        <textarea
          ref={(element) => this.input = element }
          className={styles.message}
        ></textarea>
        <button type="submit" className={styles.submit}>Send</button>
      </form>
    );
  }
}
