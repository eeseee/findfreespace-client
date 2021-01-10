import './App.css';
import React from 'react';
import axios from 'axios';
import { IconButton } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

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

  const onUpdate = () => {
    window.location.reload();
  }

  return (
    <>
    <div className="App">
      <header>
        <h1 className = "title" >findfreespace</h1>
        <div className="refresh">
        <a onClick={onUpdate}>🔄 Update</a></div>
      </header>
        <MainBar
        buttonName={buttonName} 
        handleSelect={onSelectBuilding}/>
        {
          selectedBuilding === null && selectedRooms.length === 0 ? 
          null : <FloorList selectedBuilding={buttonName}/>
        }
    </div>
    <footer>
        Made by 🙉, fueled by 🍌
    </footer>
    </>
  );
}

export default App;
