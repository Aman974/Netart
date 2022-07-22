import "./App.css";
import logo from "../src/assests/logo.png";
import award from "../src/assests/1.png";
import awardCeremony from "../src/assests/2.png";
function App() {
  return (
    <>
      <div className="logoDiv">
        <img src={logo} className="logo" alt="" />
      </div>

      <div className="first_half">
        <div className="left_first_half">
          <img src={award} className="awardImg" alt="" />
        </div>

        <div></div>

        <div className="right_first_half">
          <b>
            
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </b>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          < img src={awardCeremony} className="awardCeremony"  alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
