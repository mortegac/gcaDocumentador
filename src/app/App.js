import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from  '../pages/header'
import Content from '../pages/content'
import Footer from  '../pages/footer'

import '../utils/bulma.css';


class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>

        <Content></Content>

        <Footer></Footer>
        
      </div>
    );
  }
}

export default App;
