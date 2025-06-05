import { useState } from 'react';
import './App.css';
import Product from './component/product';

import Login from './component/login';
import Sibar from './screen/saibar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Customer from './component/customer';
import Order from './component/order'
import Addproduct from './component/addproduct';
import User from './component/user';

function App() {
 
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  // Handle login success
  const handleLogin = (username, password) => {
   
    if (username === 'adminheng' || username === 'adminhong' || username === 'adminhour' && password === '123456') {
      setIsLoggedIn(true);
      return true;
    } else {
      return false;
    }
    
  };

  return (
    
    <Router>
      
      {!isLoggedIn && <Login onLogin={handleLogin} />}

      
      {isLoggedIn && (
        <div>
          <Sibar/>
          <div>
            <Switch>
              <Route exact path="/" component={Product} />
              <Route path="/customer" component={Customer} />
              <Route path="/order" component={Order} />
              <Route path="/addproduct" component={Addproduct} />
              <Route path="/user" component={User} />
            </Switch>
          </div>
        </div>
       )} 
    </Router>
  );
}

export default App;