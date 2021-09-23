import './App.css';
import Navbar from '../Navbar/Navbar'
import ChallengeRatingList from '../ChallengeRatingList/ChallengeRatingList'
import MonsterList from '../MonsterList/MonsterList'
import MonsterInfo from '../MonsterInfo/MonsterInfo'
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ChallengeRatingList />
        </Route>
        <Route exact path="/monsters/:rating">
          <MonsterList />
        </Route>
        <Route exact path="/monsters/:rating/:name">
          <MonsterInfo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
