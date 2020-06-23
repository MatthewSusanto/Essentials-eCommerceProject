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
import Footer from './footer/Footer'

import FAQ from './help/FAQ'
import ContactUs from './help/ContactUs'
import ChangeOrder from './help/ChangeOrder'
import CareInstructions from './help/CareInstructions'
import Returns from './help/Returns'

import Home from './home/Home';
import Account from './account/Account'
import Cart from './cart/Cart'
import ScrollIntoView from './ScrollIntoView';

//import './App.css';



function App() {
  return (
    <div className="App">








      <BrowserRouter>

        <ScrollIntoView>




          <NavbarComponent />
          <NewsBanner />


          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/showcase" component={ProductShowcase} />
            <Route path="/collections" component={Collections} />
            <Route path="/product" component={ProductDetail} />
            <Route path="/detailimg" component={DetailImg} />
            <Route path="/detaildesc" component={DetailDescription} />
            <Route path="/productrecommendation" component={ProductRecommendation} />





            <Route path="/faq" component={FAQ} />


            <Route path="/contact-us" component={ContactUs} />
            <Route path="/change-order" component={ChangeOrder} />
            <Route path="/care" component={CareInstructions} />
            <Route path="/returns" component={Returns} />

            <Route path="/account" component={Account} />
            <Route path="/cart" component={Cart} />



          </Switch>

          <Footer />

        </ScrollIntoView>
      </BrowserRouter>


    </div>
  );
}

export default App;
