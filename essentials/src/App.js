import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import NavbarComponent from './navbar/NavbarComponent'
import NewsBanner from './navbar/NewsBanner'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './account/SignIn';
import SignUp from './account/SignUp';

//import './App.css';



function App() {
  return (
    <div className="App">

      <NewsBanner />
      <NavbarComponent />



      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />


        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
