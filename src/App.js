import Header from "./img/background header.png"
import Location from "./components/Location"

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
