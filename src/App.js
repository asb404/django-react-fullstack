// import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Navbar from './components/navbar'
import Register from './components/register'

function App() {
  return (
    <div className="App">
      <Navbar>
      </Navbar>
      <div id="mainContent">
        <Login/>
      </div>
    </div>
  );
}

export default App;
