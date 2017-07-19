import React, {Component} from 'react';
import Card from '../card/card'

class Counter extends Component {
  render () {
    return (
        <nav className="level is-mobile">
            <div className="level-item has-text-centered">
                <div>
                <p className="heading">Proyectos</p>
                <p className="title">3,456</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                <p className="heading">Abiertos</p>
                <p className="title">123</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                <p className="heading">Cerrados</p>
                <p className="title">456K</p>
                </div>
            </div>
            <div className="level-item has-text-centered">
                <div>
                <p className="heading">Pendientes</p>
                <p className="title">789</p>
                </div>
            </div>
        </nav>
    )
  }
}

export default Counter;        