import React, { Component } from 'react';

import './App.css';
import {StripeProvider} from 'react-stripe-elements';

import MyStoreCheckout from './components/MyStoreCheckout';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_12345">
        <MyStoreCheckout />
      </StripeProvider>
    )
  }
}

export default App;
