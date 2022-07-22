import "./App.css";
import logo from "../src/assests/logo.png";
function App() {
  return (
    <>
      <div className="logoDiv">
        <img src={logo} className="logo" alt="" />
      </div>

      <div className="first_half">
        <div className="left_first_half"></div>
        <div className="right_first_half"></div>
        </div>
    </>
  );
}

export default App;
