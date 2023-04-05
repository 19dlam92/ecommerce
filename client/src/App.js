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
import Product from './pages/product'
import Order from './pages/order'
import List from './pages/list'
import Contact from './pages/contact'


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
          <Route exact path='/products'>
            <Product />
          </Route>
          <Route exact path='/orders'>
            <Order />
          </Route>
          <Route exact path='/lists'>
            <List />
          </Route>
          <Route exact path='/contacts'>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
