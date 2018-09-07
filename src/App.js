import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import MainBody from './MainBody.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <MainBody />
      <Footer />
      </div>
    );
  }
}

export default App;
