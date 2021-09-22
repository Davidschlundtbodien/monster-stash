import './App.css';
import Navbar from '../Navbar/Navbar'
import ChallengeRatingList from '../ChallengeRatingList/ChallengeRatingList'
import MonsterList from '../MonsterList/MonsterList'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ChallengeRatingList />
      <MonsterList />
    </div>
  );
}

export default App;
