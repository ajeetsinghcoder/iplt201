import logo from './logo.svg';
import './App.css';
import Header from "./component/header/Header"
import MyNavbar from './component/header/Navbar';
import CarouselComponent from './component/header/Carousel';
import ShortsCarousel from "./component/header/Teamcard";
import Fpoa from "./component/hero/Fpoa";
// import Card from './component/hero/Card';




// import card1 from './asstes/images/iplslider2.jpg'




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
    {/* <Card/> */}
    </div>
  );
}

export default App;
