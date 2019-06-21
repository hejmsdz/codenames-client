class Client {
  constructor(url, dispatch) {
    this.ws = new WebSocket(url);
    this.dispatch = dispatch;
    this.ws.onmessage = this.receive.bind(this);
  }

  send(object) {
    this.ws.send(JSON.stringify(object));
  }

  receive(message) {
    const action = JSON.parse(message.data);
    this.dispatch(action);
  }

  click(i, j) {
    this.send({ type: 'CLICK', i, j });
  }

  pass() {
    this.send({ type: 'PASS' });
  }
}

export default Client;
