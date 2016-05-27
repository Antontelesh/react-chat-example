import forEach from 'lodash/forEach';
import store from './store';
import {Server} from 'ws';
import url from 'url';
import {newUser} from './actions';
import {newMessage} from './actions';
import {exit} from './actions';

var clients = {};

store.subscribe(() => {
  var message = JSON.stringify(store.getState());
  forEach(clients, ws => { ws.send(message) });
});

var wss = new Server({port: 8081});
wss.on('connection', ws => {

  var location = url.parse(ws.upgradeReq.url, true);
  var username = location.query.username;

  ws.on('message', message => {
    store.dispatch(newMessage(username, message));
  });

  ws.on('close', () => {
    delete clients[username];
    store.dispatch(exit(username));
  });

  clients[username] = ws;
  store.dispatch(newUser(username, ws));
});
