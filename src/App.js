import './App.css';
import React from 'react';
import axios from 'axios';
//Importing Components
import MainBar from "./components/MainBar";
import FloorList from './components/FloorList';

function App() {
  const [selectedBuilding, selectBuilding] = React.useState(null);
  const [selectedRooms, selectRooms] = React.useState([]);
  const [buttonName, setButtonName] = React.useState("select current building");

  React.useEffect(() => {
    axios.get(`/${selectedBuilding}`)
    .then((res) => {
      const rooms = res.data.rooms;
      selectRooms(rooms);
    })
    .catch(err => console.log(err));
  }, [selectedBuilding]);

  const onSelectBuilding = (name) => {
    selectBuilding(name);
    setButtonName(name);
  }

  return (
    <div className="App">
      <header>
        <h1 className = "title" >findfreespace</h1>
      </header>
        <MainBar
        buttonName={buttonName} 
        handleSelect={onSelectBuilding}/>
        {
          selectedBuilding == null && selectedRooms.length == 0? 
          null : <FloorList selectedBuilding={buttonName}/>
        }
    </div>
  );
}

export default App;
