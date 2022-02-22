import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.jsx';
import LandingPage from './Components/LandingPage.jsx'
import ActivityCreate from './Components/ActivityCreate';
import Paises from './Components/Paises';
import NavBar from './Components/NavBar';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
      <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/activities' component={ActivityCreate}/>
      <Route exact path='/home/:id' component={Paises}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
//<Route path='/activities' component={FormActivities}/>
