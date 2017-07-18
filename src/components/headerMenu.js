import React, {Component} from 'react';

class HeaderMenu extends Component {
  render () {
    return (
        <div>
            <span id="nav-toggle" className="nav-toggle"><span></span><span></span><span></span></span>

            <div id="nav-menu" className="nav-right nav-menu">
                <a className="nav-item " href="/">Inicio</a>
                <a className="is-hidden nav-item  " href="#">
                    <span>Templates</span>
                    <span className="tag is-small is-success">New!</span>
                </a>
                <a className="nav-item  is-active" href="#"> Documentación</a>
                <a className="nav-item " href="/blog/">Soporte</a>


                <span className="nav-item">
                    <a className="button is-primary is-inverted" href="#">
                        <span className="icon"><i className="fa fa-user"></i></span>
                        <span>ACCEDER</span>
                    </a>
                </span>

            </div>
        </div>
    )
  }
}

export default HeaderMenu;
