import './App.css';
import  React from 'react';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Games from "./components/Games/Games";
function App() {
  return (
    <div className="App">
        <Header/>
        <SideBar/>
        <Games/>
    </div>
  );
}

export default App;
