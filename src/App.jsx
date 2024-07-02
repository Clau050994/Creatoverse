
import './App.css'
import './styles.scss'
import Navbar from './Navbar';


const App = () => {
  return (

    <div className="App">
      <Navbar/>
    
    <div className="top-section">
    <h1>Welcome to InfluencerHub</h1>
      <div className="button-group">
        <button className="button">View Creators</button>
        <button className="button secondary-button">Add Creators</button>
      </div>
    </div>
    </div>
  );
};

export default App;
