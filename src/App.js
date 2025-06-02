import logo from './logo.svg';
import './App.css';
import Header from "./component/header/Header"
import MyNavbar from './component/header/Navbar';
import CarouselComponent from './component/header/Carousel';
// import TeamCard from './component/header/Teamcard';



const teamCard = [
  {
    title:"card1",
    images:""
  },
  {
    title:"card2",
    images:""
  }
]

function App() {


  return (
    <div>
    <Header/>  
    <MyNavbar/>
    <CarouselComponent/> 
    {/* <TeamCard/> */}

    </div>
  );
}

export default App;
