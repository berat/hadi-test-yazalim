import logo from './logo.svg';
import './App.css';
import SearchBox from './SearchBox'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBox placeholder="berat" />
        <Header title="Berat Bozkurt" desc="Lorem ipsum Createor" image="https://i0.wp.com/filmloverss.com/wp-content/uploads/2019/02/avatar-2-3-filmloverss.jpg?fit=900%2C600&ssl=1" />
      </header>
    </div>
  );
}

export default App;
