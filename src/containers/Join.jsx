import React, { useRef } from 'react';
import { connect } from 'react-redux';

function Join({
  onJoin,
}) {
  const roomRef = useRef();
  const playerNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const room = roomRef.current.value;
    const playerName = playerNameRef.current.value;
    onJoin(room, playerName);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="room">Room:</label>
          <input id="room" ref={roomRef} />
        </div>
        <div>
          <label htmlFor="playerName">Your name:</label>
          <input id="playerName" ref={playerNameRef} />
        </div>
        <button type="submit">Join game</button>
      </form>
    </main>
  );
};

export default connect(null, null)(Join);