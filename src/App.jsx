import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';

import Game from './containers/Game';
import store from './store';
import Client from './client';

export default function () {
  const [client, setClient] = useState(null);
  useEffect(() => {
    setClient(new Client('ws://localhost:8000/', store.dispatch));
  }, []);

  return (
    <Provider store={store}>
      <Game client={client} />
    </Provider>
  );
};
