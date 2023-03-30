import './App.css'
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import Dashboard from './components/dashboard'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Register />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
