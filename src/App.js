import Header from "./img/background header.png"
import Location from "./components/Location"
import "./css/App.css"

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div>
            <a href="/">Rick and Morty App</a>
          </div>
        </nav>
        <img src={Header} alt="" />
      </header>
      <Location/>
    </div>

  );
}

export default App;
