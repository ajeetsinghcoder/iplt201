import logo from './logo.svg';
import './App.css';
import Header from "./component/header/Header"
import MyNavbar from './component/header/Navbar';
import CarouselComponent from './component/header/Carousel';
import ShortsCarousel from "./component/header/Teamcard";
import Fpoa from "./component/hero/Fpoa";
import Card from './component/hero/Card';
import cardData from './component/hero/Carddata';
// import PointsCard from './component/hero/Teamdata';
import TeamCard from './component/hero/Teamdata';
import TeamCarddata from './component/hero/Teamcarddata';





function App() {

  return (
    <div>
    <Header/>  
    <MyNavbar/>
    <CarouselComponent/> 
    <div className="min-h-screen bg-[#0D1126] flex items-center justify-center p-6">
      <ShortsCarousel />
    </div>
    <Fpoa/>
    <div className="card-container">
      {cardData.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
   <div className="points-table">
      <h2 className='pl-3'>Points Table</h2>
      <div className="card-container">
        {TeamCarddata.map((card, index) => (
          <TeamCard key={index} {...card} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
