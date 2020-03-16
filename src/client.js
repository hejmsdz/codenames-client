class Client {
  constructor(url, playerName, dispatch) {
    this.ws = new WebSocket(url);
    this.playerName = playerName;
    this.dispatch = dispatch;
    this.ws.onmessage = this.receive.bind(this);
    this.ws.onopen = this.join.bind(this);
    this.ws.onclose = this.close.bind(this);
  }

  send(object) {
    this.ws.send(JSON.stringify(object));
  }

  receive(message) {
    const action = JSON.parse(message.data);
    if (action.type !== 'PONG') {
      this.dispatch(action);
    }
  }

  join() {
    this.intvl = setInterval(() => this.send({ type: 'PING' }), 10000);

    this.send({ type: 'JOIN', playerName: this.playerName });
  }

  close() {
    clearInterval(this.intvl);
  }
  
  setTeam(team) {
    this.send({ type: 'SET_TEAM', team });
  }

  start() {
    this.send({ type: 'START' });
  }

  click(i, j) {
    this.send({ type: 'CLICK', i, j });
  }

  pass() {
    this.send({ type: 'PASS' });
  }
}

export default Client;
