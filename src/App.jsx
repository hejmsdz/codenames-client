import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import Game from './containers/Game';
import Join from './containers/Join';
import store from './store';
import Client from './client';
import Admin from './containers/Admin';

const websocket = process.env.WEBSOCKET || 'ws://localhost:8000';

export default function () {
  const [client, setClient] = useState(null);
  const [admin, setAdmin] = useState(false);
  const handleJoin = (room, playerName) => {
    setClient(new Client(`${websocket}/${room}`, playerName, store.dispatch));
    if (room === 'admin') {
      setAdmin(true);
    }
  };

  return (
    <Provider store={store}>
      {client ? (
        admin ? <Admin /> : <Game client={client} />
      ): <Join onJoin={handleJoin} />}
    </Provider>
  );
};
