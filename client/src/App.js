import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.jsx';
import LandingPage from './Components/LandingPage.jsx'
import ActivityCreate from './Components/ActivityCreate';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/activities' component={ActivityCreate} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

