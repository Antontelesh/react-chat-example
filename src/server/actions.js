export const NEW_USER = 'NEW_USER';
export const NEW_MESSAGE = 'NEW_MESSAGE';
export const EXIT = 'EXIT';

/**
 * (string) => Action
 */
export const newUser = username => ({
  type: NEW_USER,
  username
});

/**
 * (username: string) => Action
 */
export const exit = username =>
  ({type: EXIT, username})

/**
 * (username: string, text: string) => Action
 */
export const newMessage = (username, text) => ({
  type: NEW_MESSAGE,
  username,
  text,
});
