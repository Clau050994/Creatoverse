import "./App.css";
import "./styles.scss";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";

const App = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/add-creators");
  };

  return (
    <div className="App">
      <Navbar />

      <div className="top-section">
        <h1>Welcome to InfluencerHub</h1>
        <div className="button-group">
          <button className="button">View Creators</button>
          <button
            className="button secondary-button"
            onClick={handleButtonClick}
          >
            Add Creators
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
