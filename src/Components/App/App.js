import './App.css';
import Navbar from '../Navbar/Navbar'
import ChallengeRatingList from '../ChallengeRatingList/ChallengeRatingList'
import MonsterList from '../MonsterList/MonsterList'
import MonsterInfo from '../MonsterInfo/MonsterInfo'
import FavoritesList from '../FavoritesList/FavoritesList'
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ChallengeRatingList />
        </Route>
        <Route
          exact path="/monsters/:rating"
          render={({match}) => {
            return <MonsterList rating={match.params.rating}/>
          }}
        >
        </Route>
        <Route exact path="/favorites/">
          <FavoritesList />
        </Route>
        <Route
          exact path="/monsters/:rating/:name"
          render={({match}) => {
            return <MonsterInfo monsterIndex={match.params.name}/>
          }}
        >
        </Route>
      </Switch>
    </div>
  );
}

export default App;
