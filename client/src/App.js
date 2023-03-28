import './App.css'
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='row'>
          <div className='col'>
            <Register />
          </div>
          <div className='col'>
            <Login />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
