import "./css/App.css"
import Location from './components/Location';

function App() {

  return (
    <div className="App">
      <header className="header">
        <div className="header_left"></div>
        <div className="header_right"></div>
        <div className="header_center"></div>
      </header>
      <Location />
    </div>
  );
}

export default App;
