export default function Chat (url) {

  let socket;

  const connect = (username, onMessage) => {
    let resolved = false;
    return new Promise((resolve, reject) => {
      socket = new WebSocket(`${url}?username=${username}`);
      socket.onerror = reject;
      socket.onmessage = event => {
        let cb = resolved ? onMessage : resolve;
        cb(JSON.parse(event.data));
        resolved = true;
      };
      socket.onclose = event => {
        reject(event.reason);
      };
    });
  };

  const sendMessage = message => {
    socket.send(message);
  };

  return {connect, sendMessage};

}
