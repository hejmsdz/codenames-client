import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import Game from './containers/Game';
import Join from './containers/Join';
import store from './store';
import Client from './client';

const websocket = process.env.WEBSOCKET || 'ws://localhost:8000';

export default function () {
  const [client, setClient] = useState(null);
  const handleJoin = (room, playerName) => {
    setClient(new Client(`${websocket}/${room}`, playerName, store.dispatch));
  };

  return (
    <Provider store={store}>
      {client ? <Game client={client} /> : <Join onJoin={handleJoin} />}
    </Provider>
  );
};
