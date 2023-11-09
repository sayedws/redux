import logo from './logo.svg';
import './App.css';
import AddnewTask from './components/AddnewTask';
import List from './components/List';


function App() {
  return (
    <div className="App">
      <AddnewTask/>
      <List/>
    </div>
  );
}

export default App;
