import React, {Component} from 'react';
import ProyectList from '../components/proyectList/proyectList'
import Counter from '../components/counter/counter'

class Proyectos extends Component {
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
                <div className="">
                    <h1 className="has-text-centered title is-1">PROYECTOS</h1>
                </div>
                {
                    //<Counter></Counter>
                }

                <section className="section">
                <div className="container ">
                    <div className="columns">
                        <div className="column">
                            <ProyectList></ProyectList>
                    
                        </div>            
                    </div>
                </div>
                </section>

             
            </div>
    )
  }
}

export default Proyectos;
