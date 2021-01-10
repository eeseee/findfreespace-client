import './App.css';
import FloorList from './components/FloorList';
//Importing Components
import MainBar from "./components/MainBar";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className = "title" >findfreespace</h1>
      </header>
      <div className="content">
        <MainBar />
        <FloorList/>
      </div>
    </div>
  );
}

export default App;
