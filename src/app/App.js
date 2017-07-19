import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from  '../pages/header'
import Home from '../pages/home'

import Directorio from '../pages/directorio'
import Proyectos from '../pages/proyectos'
import Soporte from '../pages/soporte'

import Novedades from '../components/novedades/novedades'
import Footer from  '../pages/footer'

import '../utils/bulma.css';
import '../utils/layout.scss';
import '../utils/generic.sass';

/*
 <div>
        <Header></Header>

        <Content></Content>

        <Footer></Footer>
      </div>

                <Route path='/register' render={() => <MainForm/>} />
          <Route path='/login' render={() => <div>login</div>} />
          <Route path='/search'  component={Search} />
*/
class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
        <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/directorio' component={Directorio} />
          <Route exact path='/proyectos'     component={Proyectos} />
          <Route exact path='/soporte'       component={Soporte} />

        <Novedades></Novedades> 
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
