import './App.css';
import Navbar from '../Navbar/Navbar'
import ChallengeRatingList from '../ChallengeRatingList/ChallengeRatingList'
import MonsterList from '../MonsterList/MonsterList'
import MonsterInfo from '../MonsterInfo/MonsterInfo'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ChallengeRatingList />
      <MonsterList />
      <MonsterInfo />
    </div>
  );
}

export default App;
