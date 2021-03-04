import './App.css';
import  React from 'react';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Games from "./components/Games/Games";
import TopStreams from "./components/TopStreams/TopStreams";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Live from "./components/Live/Live";
import GameStreams from "./components/GameStreams/GameStreams";
import Resultats from "./components/Resultats/Resultats";
function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <SideBar/>

              <Switch>
                  <Route exact path="/" component={Games}/>
                  <Route exact path="/topstreams" component={TopStreams}/>
                  <Route exact path="/live/:slug" component={Live}/>
                  <Route exact path="/game/:slug" component={GameStreams}/>
                  <Route exact path="/resultats/:slug" component={Resultats}/>

              </Switch>

          </div>
      </Router>

  );
}

export default App;
