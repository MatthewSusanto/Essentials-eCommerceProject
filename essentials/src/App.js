import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import NavbarComponent from './navbar/NavbarComponent'
import NewsBanner from './navbar/NewsBanner'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './account/SignIn';
import SignUp from './account/SignUp';
import ProductShowcase from './products/ProductShowcase'
import Collections from './collections/Collections'
import ProductDetail from './products/ProductDetail'
import DetailImg from './products/DetailImg'
import DetailDescription from './products/DetailDescription'
import ProductRecommendation from './products/ProductRecommendation'

import Home from './home/Home';

//import './App.css';



function App() {
  return (
    <div className="App">

      <NewsBanner />
      <NavbarComponent />
      <Home />





      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/showcase" component={ProductShowcase} />
          <Route path="/collections" component={Collections} />
          <Route path="/product" component={ProductDetail} />
          <Route path="/detailimg" component={DetailImg} />
          <Route path="/detaildesc" component={DetailDescription} />
          <Route path="/productrecommendation" component={ProductRecommendation} />



        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
