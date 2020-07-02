import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import NavbarComponent from './navbar/NavbarComponent'
import NewsBanner from './navbar/NewsBanner'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './account/SignUp';
import Collections from './collections/Collections'
import ProductDetail from './products/ProductDetail'
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
import './App.css'




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <ScrollIntoView>

          <NavbarComponent />
          <NewsBanner />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/signup" component={SignUp} />

            <Route path="/faq" component={FAQ} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/change-order" component={ChangeOrder} />
            <Route path="/care" component={CareInstructions} />
            <Route path="/returns" component={Returns} />

            <Route path="/account" component={Account} />
            <Route path="/cart" component={Cart} />

            <Route exact path="/collections/:product_type" component={Collections} />
            <Route exact path="/collections/:product_type/:product_name" component={ProductDetail} />
          </Switch>

          <Footer />

        </ScrollIntoView>
      </BrowserRouter>


    </div>
  );
}

export default App;
