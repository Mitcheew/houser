import React, { Component } from 'react';
import './css/App.css';
import Header from './component/Header';
import routes from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
