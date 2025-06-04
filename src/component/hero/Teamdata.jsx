import React from 'react';
import './Team.css';

const PointsCard = ({ rank, team, logo, points, played, won, nrr, recentForm }) => {
  return (
    <div className="points-card">
      <div className="rank">{rank}</div>
      <div className="team-name">{team}</div>
      <img src={logo} alt={team} className="team-logo" />
      <div className="stats">
        <p><strong>{points}</strong> Points</p>
        <p>{played} Played</p>
        <p>{won} Won</p>
        <p className="nrr">NRR: {nrr}</p>
      </div>
      <div className="recent-form">
        <p>Recent form</p>
        <div className="form-indicators">
          {recentForm.map((item, index) => (
            <span key={index} className={`form ${item.toLowerCase()}`}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PointsCard;
