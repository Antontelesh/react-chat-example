import React from 'react';
import map from 'lodash/map';
import styles from './styles.css';

export default ({users}) =>
  <ul className={styles.root}>
    {map(users, user => (
      <li
        className={styles.buddy}
        key={user}
      >{user}</li>
    ))}
  </ul>
