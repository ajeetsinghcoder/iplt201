import leftplayer from "../../asstes/images/dhoni.png";
import orangecap from "../../asstes/images/SaiSudarshan.png";
import rightplayer from "../../asstes/images/niteshkumar.png";
import './Topperformers.css';

const TopPerformers =()=>{
    return (
         <div className="top-performers-container">
      <h2 className="top-title">Top Performers</h2>
      <button className="seemore">SeeMore</button>
      <div className="top-main">
        <img src={leftplayer} alt="Player Left" className="side-player left" />

        <div className="main-performer">
          <div className="orange-cap"> Orange Cap</div>
          <div className="player-info">
            <h4 className="player-name-small">Sai</h4>
            <h1 className="player-name">Sudharsan</h1>
            <div className="runs"><span>759</span> Runs</div>
            <div className="stats-box">
              <div><strong>M</strong><br />15</div>
              <div><strong>HS</strong><br />108*</div>
              <div><strong>Avg</strong><br />54.21</div>
              <div><strong>4/6'S</strong><br />88/21</div>
              <div><strong>50/100'S</strong><br />6/1</div>
            </div>
          </div>
          <button className="leaderboard-btn">Full Leaderboard</button>
        </div>

        <img src={rightplayer} alt="Player Right" className="side-player right" />
      </div>
    </div>
    )
}
export default TopPerformers;