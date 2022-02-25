import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getCountries, getActivities } from './Actions';
import Home from './Components/Home.jsx';
import LandingPage from './Components/LandingPage.jsx'
import ActivityCreate from './Components/ActivityCreate';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => dispatch(getCountries()), [dispatch]);
  useEffect(() => dispatch(getActivities()), [dispatch]);
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

