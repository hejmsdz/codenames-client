class Client {
  constructor(url, playerName, dispatch) {
    this.ws = new WebSocket(url);
    this.playerName = playerName;
    this.dispatch = dispatch;
    this.ws.onmessage = this.receive.bind(this);
    this.ws.onopen = this.join.bind(this);
  }

  send(object) {
    this.ws.send(JSON.stringify(object));
  }

  receive(message) {
    const action = JSON.parse(message.data);
    this.dispatch(action);
  }

  join() {
    this.send({ type: 'JOIN', playerName: this.playerName });
  }

  click(i, j) {
    this.send({ type: 'CLICK', i, j });
  }

  pass() {
    this.send({ type: 'PASS' });
  }
}

export default Client;
