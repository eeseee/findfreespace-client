import './App.css';
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
      </div>
    </div>
  );
}

export default App;
