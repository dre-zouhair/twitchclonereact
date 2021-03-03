import './App.css';
import  React from 'react';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Games from "./components/Games/Games";
import TopStreams from "./components/TopStreams/TopStreams";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Live from "./components/Live/Live";

function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <SideBar/>

              <Switch>
                  <Route exact path="/" component={Games}></Route>
                  <Route exact path="/topstreams" component={TopStreams}></Route>
                  <Route exact path="/live/:slug" component={Live}></Route>

              </Switch>

          </div>
      </Router>

  );
}

export default App;
