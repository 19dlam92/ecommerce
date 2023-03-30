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
import Navbar from './components/navbar'
import Product from './components/product'
import Order from './components/order'
import List from './components/list'
import Contact from './components/contact'


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <div className='col-4'>
              <Register />
            </div>
          </Route>
          <Route exact path='/login'>
            <div className='col-4'>
              <Login />
            </div>
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/product'>
            <Product />
          </Route>
          <Route exact path='/order'>
            <Order />
          </Route>
          <Route exact path='/list'>
            <List />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
