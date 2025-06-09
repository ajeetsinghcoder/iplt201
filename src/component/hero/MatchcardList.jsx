import React from 'react';
import MatchCard from './Matchcard';

import rcb from "../../asstes/images/RCB.png";
import pbks from "../../asstes/images/PK.png";
import mi from "../../asstes/images/MI.png";
import srh from "../../asstes/images/dhoni.png";

import krunal from "../../asstes/images/Suryakumar-Yadav11.png";
import shreyas from "../../asstes/images/ipl.png";
import rohit from "../../asstes/images/niteshkumar.png";

const matches = [
  {
    stage: 'Final',
    team1Img: rcb,
    team2Img: pbks,
    score1: '190/9',
    overs1: '20.0 Overs',
    score2: '184/7',
    overs2: '20.0 Overs',
    winnerText: 'ROYAL CHALLENGERS BENGALURU WON BY 6 RUNS (WINNERS)',
    venue: 'Narendra Modi Stadium, Ahmedabad',
    dateTime: '3 JUN 2025 , 7:30 pm IST',
    playerImg: krunal,
    playerName: 'Krunal Pandya',
    playerStats: 'Wkts: 2/17',
  },
  {
    stage: 'Qualifier 2',
    team1Img: pbks,
    team2Img: mi,
    score1: '207/5',
    overs1: '19.0 Overs',
    score2: '203/6',
    overs2: '20.0 Overs',
    winnerText: 'PUNJAB KINGS WON BY 5 WICKETS (QUALIFIED)',
    venue: 'Narendra Modi Stadium, Ahmedabad',
    dateTime: '1 JUN 2025 , 7:30 pm IST',
    playerImg: shreyas,
    playerName: 'Shreyas Iyer',
    playerStats: 'Runs: 87(41)',
  },
  {
    stage: 'Eliminator',
    team1Img: srh,
    team2Img: mi,
    score1: '208/6',
    overs1: '20.0 Overs',
    score2: '228/5',
    overs2: '20.0 Overs',
    winnerText: 'MUMBAI INDIANS WON BY 20 RUNS (QUALIFIED)',
    venue: 'New PCA Stadium, Chandigarh',
    dateTime: '30 MAY 2025 , 7:30 pm IST',
    playerImg: rohit,
    playerName: 'Rohit Sharma',
    playerStats: 'Runs: 81(50)',
  },
  {
    stage: 'Final',
    team1Img: rcb,
    team2Img: pbks,
    score1: '190/9',
    overs1: '20.0 Overs',
    score2: '184/7',
    overs2: '20.0 Overs',
    winnerText: 'ROYAL CHALLENGERS BENGALURU WON BY 6 RUNS (WINNERS)',
    venue: 'Narendra Modi Stadium, Ahmedabad',
    dateTime: '3 JUN 2025 , 7:30 pm IST',
    playerImg: krunal,
    playerName: 'Krunal Pandya',
    playerStats: 'Wkts: 2/17',
  },
];

const MatchList = () => {
  return (
    <div className="matchcard-list" style={{display:"flex", gap:"20px"}}>
      {matches.map((match, idx) => (
        <MatchCard key={idx} {...match} />
      ))}
    </div>
  );
};

export default MatchList;
