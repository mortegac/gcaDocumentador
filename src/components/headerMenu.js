import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderMenu extends Component {
  render () {
    return (
        <div>
            <span id="nav-toggle" className="nav-toggle"><span></span><span></span><span></span></span>

            <div id="nav-menu" className="nav-right nav-menu">
               
               
               { // <Link to='/' className="nav-item ">Inicio</Link>
                //    <a className="is-hidden nav-item  " href="#">
                //     <span>Templates</span>
                //     <span className="tag is-small is-success">New!</span>
                // </a>
               } 
                <Link to='/directorio' className="nav-item ">Directorio</Link>
                <Link to='/proyectos' className="nav-item is-active">Proyectos</Link>
                <Link to='/soporte' className="nav-item is-active">Soporte</Link>
                


                {
                //     <span className="nav-item">
                //     <a className="button is-primary is-inverted" href="#">
                //         <span className="icon"><i className="fa fa-user"></i></span>
                //         <span>ACCEDER</span>
                //     </a>
                // </span>
            }

            </div>
        </div>
    )
  }
}

export default HeaderMenu;
