export const CHAT_UPDATE = 'CHAT_UPDATE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const chatUpdate = chat =>
  ({...chat, type: CHAT_UPDATE})

export const loginSuccess = (username, chat) =>
  ({...chat, username, type: LOGIN_SUCCESS})

export const loginError = (error) =>
  ({type: LOGIN_ERROR, error})
