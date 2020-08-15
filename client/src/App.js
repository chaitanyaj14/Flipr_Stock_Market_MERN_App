import React, { Component } from 'react';
import AppNavbar from './components/AppNavabar';
import StockList from './components/StockList';
import ItemModal from './components/ItemModal';

import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
          <ItemModal />
          <StockList />
          </Container>
        </div>
      </Provider>
    );
  }
}
export default App;
