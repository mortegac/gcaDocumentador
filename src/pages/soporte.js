import React, {Component} from 'react';
// import HeaderNav from '../components/headerNav/headerNav'

class Soporte extends Component {
  render () {
    return (
            <div >
                <nav className="nav has-shadow">
                    <div className="container">
                        <div className="nav-left">
                            <a className="nav-item is-tab " href="/documentation/elements/box/">BoXa</a>
                            <a className="nav-item is-tab " href="/documentation/elements/box/">BoXb</a>
                        </div>
                    </div>
                </nav>
                <div className="container">
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
                                <p className="panel-tabs">
                                    <a className="is-active">All</a>
                                    <a>Public</a>
                                    <a>Private</a>
                                    <a>Sources</a>
                                    <a>Forks</a>
                                </p>
                                <a className="panel-block is-active">
                                    <span className="panel-icon">
                                    <i className="fa fa-book"></i>
                                    </span>
                                    bulma
                                </a>
                                <a className="panel-block">
                                    <span className="panel-icon">
                                    <i className="fa fa-book"></i>
                                    </span>
                                    marksheet
                                </a>
                                <a className="panel-block">
                                    <span className="panel-icon">
                                    <i className="fa fa-code-fork"></i>
                                    </span>
                                    mojs
                                </a>
                                <label className="panel-block">
                                    <input type="checkbox"/>
                                    Remember me
                                </label>
                                <div className="panel-block">
                                    <button className="button is-primary is-outlined is-fullwidth">
                                    Reset all filters
                                    </button>
                                </div>
                            </nav>
                        </div>
                        <div className="column"><p className="notification is-info">2</p></div>
                    </div>
                </div>
            </div>
    )
  }
}

export default Soporte;
