import React from 'react';
import map from 'lodash/map';
import styles from './styles.css';

export default ({messages}) =>
  <ul className={styles.root}>
    {map(messages, message => (
      <li
        key={message.id}
        className={styles.message}
      >
        <div className={styles.sender}>{message.username}</div>
        <div>{message.text}</div>
      </li>
    ))}
  </ul>
