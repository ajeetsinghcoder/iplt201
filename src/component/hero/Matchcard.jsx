import React from 'react';
import './Matchcard.css';

const MatchCard = ({
  stage,
  team1Img,
  team2Img,
  score1,
  overs1,
  score2,
  overs2,
  winnerText,
  venue,
  dateTime,
  playerImg,
  playerName,
  playerStats
}) => {
  return (
    <div className="matchcard-container">
      <div className="matchcard-topbar">{stage}</div>

      <div className="matchcard-score">
        <div className="team">
          <img src={team1Img} alt="Team1" />
          <h2>{score1}</h2>
          <p>{overs1}</p>
        </div>

        <div className="vs">vs</div>

        <div className="team">
          <img src={team2Img} alt="Team2" />
          <h2>{score2}</h2>
          <p>{overs2}</p>
        </div>
      </div>

      <h3 className="winner">{winnerText}</h3>

      <div className="matchcard-venue">
        <strong>{venue}</strong>
        <p>{dateTime}</p>
      </div>

      <div className="matchcard-player">
        <img src={playerImg} alt="Player of the match" />
        <div>
          <strong><em>{playerName}</em></strong>
          <p>{playerStats}</p>
          <span className="motm">Player of the Match</span>
        </div>
      </div>

    </div>
  );
};

export default MatchCard;
