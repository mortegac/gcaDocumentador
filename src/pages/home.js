import React, {Component} from 'react';

import Alert from '../components/alert/alert'
import {cn} from '../utils/config'

class Home extends Component {
  render () {
    return (
            <div>
                <nav className="nav has-shadow">
                <div className="container">
                    <div className="nav-left">
                        <a className="nav-item is-tab " href="/documentation/elements/box/">BoXa</a>
                        <a className="nav-item is-tab " href="/documentation/elements/box/">BoXb</a>
                    </div>
                </div>
                </nav>

                <section className="section">
                <div className="container ">
                    <div className="columns">
                    <div className="column"><p className="notification is-success">{cn.apiUrl}<Alert></Alert></p></div>            
                    </div>
                </div>
                </section>

            </div>
    )
  }
}

export default Home;
