import {loginSuccess} from './actions';
import {loginError} from './actions';
import {chatUpdate} from './actions';
import chat from './instances/chat';

export const login = username => dispatch => {
  return chat.connect(username, state => dispatch(chatUpdate(state)))
    .then(
      chat => dispatch(loginSuccess(username, chat)),
      error => dispatch(loginError(error))
    );
};
