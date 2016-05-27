import {CHAT_UPDATE} from '../actions';
import {LOGIN_SUCCESS} from '../actions';
import {LOGIN_ERROR} from '../actions';

const initialState = {
  username: '',
  messages: [],
  users: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case CHAT_UPDATE:
      return {
        ...state,
        messages: action.messages,
        users: action.users
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        username: action.username,
        messages: action.messages,
        users: action.users,
        login_error: null,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        login_error: action.error,
      };

    default:
      return state;

  }

}
