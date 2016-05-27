import without from 'lodash/without';
import uniqueId from 'lodash/uniqueId';
import {NEW_USER} from './actions';
import {NEW_MESSAGE} from './actions';
import {EXIT} from './actions';

const initialState = {
  users: [],
  messages: []
};

/**
 * (state: State, action: Action) => State
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        users: [...state.users, action.username],
      };

    case EXIT:
      return {
        ...state,
        users: without(state.users, action.username)
      };

    case NEW_MESSAGE:
      let message = Message(action.username, action.text);
      return {
        ...state,
        messages: [...state.messages, message],
      };

    default:
      return state;

  }
}

/**
 * (username: string, text: string) => Message
 */
const Message = (username, text) =>
  ({username, text, id: uniqueId('message-')});
