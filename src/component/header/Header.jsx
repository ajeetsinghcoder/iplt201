
import './Header.css';
import logo from "../../asstes/images/BCCI-Logo.png";
import tataipllogo from "../../asstes/images/ipl.png";
const Headr = () => {
  return (
    <nav class="navbar bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand">
            <img src={logo} alt='' width="40" height="40" className="ms-3"/>
            <span className="fw-bold ms-3 text-white">BCCI.TV</span>
            <img src={tataipllogo} alt='' width="40" height="40" className='ms-2'/>
        </a>
        <div>
          <i class="fa-brands fa-instagram p-2 text-white"></i>
          <i class="fa-brands fa-facebook p-2 text-white"></i>
          <i class="fa-solid fa-xmark p-2 text-white"></i>
        </div>
      </div>
    </nav>
  );
};
export default Headr;
