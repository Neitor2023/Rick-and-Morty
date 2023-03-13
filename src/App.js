import Location from "./components/Location"
import "./css/App.css"

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <div>
            <a href="/">Rick and Morty App</a>
          </div>
        </nav>
      </header>
      <Location/>
    </div>

  );
}

export default App;
