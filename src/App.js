import logo from './logo.svg';
import './App.css';


const data = [
  {
    title : 'Node',
    value : 0,    
  },
  {
    title : 'React',
    value : 1
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>hello world</h1>
        {
          data.map(item => (            
            <p key={item.value}>{item.title}, {item.value}</p>            
          ))
        }
        
      </header>
    </div>
  );
}

export default App;
