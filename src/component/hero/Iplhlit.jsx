import React from "react";
import { FaImage, FaFileAlt, FaPlay } from "react-icons/fa";
import "./Iplhlit.css";
import imgh1 from "../../asstes/images/prasidhkrishna.png";
import imgh2 from "../../asstes/images/Suryakumar-Yadav11.png";
const IplHighlightSection = () => {
  return (
    <div className="ipl-section">
      {/* Top Row */}
      <div className="ipl-top-row">
        <div className="ipl-card purple">
          <span className="tag">Purple Cap</span>
          <img
            src={imgh1}
            alt="Player1"
            className="player-img"
          />
          <h3>Prasidh Krishna</h3>
          <p>Total Wickets: <b>25</b></p>
          <p>Average: <b>19.52</b></p>
          <p>Matches Played: <b>15</b></p>
        </div>

        <div className="ipl-card blue">
          <span className="tag">MVP</span>
          <img
            src={imgh2}
            alt="Player2"
            className="player-img"
          />
          <h3>Surya Kumar Yadav</h3>
          <p>Points: <b>320</b></p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="ipl-bottom-row">
        <div className="ipl-card icon-card darkblue">
          <FaImage size={48} />
          <h4>Pics</h4>
        </div>

        <div className="ipl-card fact-card orange">
          <h3>Interesting Facts</h3>
          <p>
            " Krunal Pandya became the first player to win the Player of the
            Match award twice in IPL finals. He earned his first in the 2017
            final for Mumbai Indians against Rising Pune Supergiant in
            Hyderabad "
          </p>
        </div>

        <div className="ipl-card icon-card purple-gradient">
          <FaFileAlt size={40} />
          <h4>Match Reports</h4>
        </div>

        <div className="ipl-card icon-card pink-gradient">
          <FaPlay size={40} />
          <h4>Highlights</h4>
        </div>
      </div>
    </div>
  );
};

export default IplHighlightSection;