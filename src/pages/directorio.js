import React, {Component} from 'react';
import Tree from '../components/tree/tree'

class Directorio extends Component {
  render () {
    return (
            <div >
                
                <section className="section">
                    <div className="container">
                        <div className="heading">
                            <h3 className="title">Directorio Telefónico</h3>
                            <h4 className="subtitle">Directorio de Funcionarios</h4>
                        </div>
                        <div className="columns is-desktop">
                            <div className="column is-one-quarter">
                                <nav className="panel">
                                    <p className="panel-heading">Departamentos</p>
                                    <div className="panel-block">
                                        <p className="control has-icons-left">
                                            <input className="input is-small" type="text" placeholder="Buscar"/>
                                            <span className="icon is-small is-left"><i className="fa fa-search"></i></span>
                                        </p>
                                    </div>
                                    <div className="panel-block">
                                        <Tree></Tree>
                                    </div>


                                    <a className="panel-block is-active">
                                        <span className="panel-icon">
                                        <i className="fa fa-book"></i>
                                        </span>Soporte Sistemas
                                    </a>
                                </nav>
                            </div>
                            <div className="column">
                                <div className="columns">
                                    <div className="column is-6"><p className="notification is-info">2</p></div>
                                    <div className="column is-6"><p className="notification is-info">2</p></div>
                                </div>
                                <div className="columns">
                                    <div className="column is-6"><p className="notification is-info">2</p></div>
                                    <div className="column is-6"><p className="notification is-info">2</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
  }
}

export default Directorio;
