import React, { Component } from 'react';
import Header from './Header/';
import Search from './Search/';
import './assets/sass/index.scss'


class App extends Component {
  render() {
    return (
      <div className="main">
        <Header/>
        <Search />
      </div>
    );
  }
}

export default App;
