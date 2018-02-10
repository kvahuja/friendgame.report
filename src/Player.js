import React from 'react';

import './Player.css';

export default function Player(props) {
  const { player, index } = props;
  const { displayName, iconPath } = player.destinyUserInfo;

  return (
    <div className="player">
      <div className="playerIndex">{index}</div>
      <img className="playerIcon" src={`https://bungie.net${iconPath}`} />

      <div className="playerInfo">
        <div className="playerName">{displayName}</div>
        <div className="playerSub">{player.$count} matches</div>
      </div>
    </div>
  );
}
