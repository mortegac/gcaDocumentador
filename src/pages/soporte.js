import React, {Component} from 'react';
// import HeaderNav from '../components/headerNav/headerNav'

class Soporte extends Component {
  render () {
    return (
            <div >
                
                <section className="section">
                    <div className="container">
                        <div className="heading">
                            <h3 className="title">Soporte</h3>
                            <h4 className="subtitle">Registro de atenciones realizadas</h4>
                        </div>
                        <div className="columns is-desktop">
                            <div className="column is-one-quarter">
                                <nav className="panel">
                                    <p className="panel-heading">Categorias</p>
                                    <div className="panel-block">
                                        <p className="control has-icons-left">
                                            <input className="input is-small" type="text" placeholder="Buscar"/>
                                            <span className="icon is-small is-left"><i className="fa fa-search"></i></span>
                                        </p>
                                    </div>
                                    <a className="panel-block is-active">
                                        <span className="panel-icon">
                                        <i className="fa fa-book"></i>
                                        </span>Soporte Sistemas
                                    </a>
                                    <a className="panel-block">
                                        <span className="panel-icon">
                                        <i className="fa fa-book"></i>
                                        </span>Soporte Usuario
                                    </a>
                                    <a className="panel-block">
                                        <span className="panel-icon">
                                        <i className="fa fa-code-fork"></i>
                                        </span>Páginas Web
                                    </a>
                                    <a className="panel-block">
                                        <span className="panel-icon">
                                        <i className="fa fa-code-fork"></i>
                                        </span>Otros
                                    </a>
                                    <div className="panel-block">
                                        <button className="button is-primary is-outlined is-fullwidth">
                                        Reset all filters
                                        </button>
                                    </div>
                                </nav>
                            </div>
                            <div className="column">
                                <div className="column is-12"><p className="notification is-info">2</p></div>
                                <div className="column is-12"><p className="notification is-info">2</p></div>
                                <div className="column is-12"><p className="notification is-info">2</p></div>
                                <div className="column is-12"><p className="notification is-info">2</p></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    )
  }
}

export default Soporte;
