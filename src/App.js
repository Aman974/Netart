import "./App.css";
import logo from "../src/assests/logo.png";
import award from "../src/assests/1.png";
import awardCeremony from "../src/assests/2.png";
import product from "../src/assests/3.png";

import { HiOutlinePhone } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
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
          <img src={awardCeremony} className="awardCeremony" alt="" />
          <b>
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </b>
        </div>
      </div>
      <div className="second_half">
        <div className="hr_below">
          <b>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </b>
        </div>

        <div className="product_div">
          <img src={product} className="product_img" alt="" />
        </div>
        <div className="product_cap_div">
          <b>
            {" "}
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors{" "}
          </b>
        </div>
        <div className="hr"></div>

        <div className="hr_below">
          <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS </b>
        </div>
        <div className="hr_below">
          <b>
            CHEMICALS & PROCESS | POWER WATER & WASTE | WATER OILS & GAS PHARMA
            | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING
            | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR BUILDING HVAC FIRE
            FIGHTING | AGRICULTURE & RESIDENTIAL
          </b>
        </div>
        <footer>
          <div className="fo_pho">
            <HiOutlinePhone />
            tollfree 180012001234
          </div>
          <div className="fo_pho">
            <BsFacebook />
            www.facebook.com/cripumps
          </div>
          <div className="fo_pho">
            <TbWorld />
            www.cripumps.com
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
