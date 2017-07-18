import React, {Component} from 'react';

// import HeaderLogo from '../../components/headerLogo'


class HeaderBody extends Component {
  render () {
    return (
            <div className="hero-body">
                <div className="container">
                <div className="columns is-vcentered">
                    <div className="column">
                        <p className="title"><strong>Sistema Documentador V.1</strong></p>
                        <p className="subtitle">
                        Visualiza información de Socios y Usuarios de los distintos Clubes Deportivos
                        </p>
                    </div>
                </div>
                </div>
           </div>
    )
  }
}

export default HeaderBody;
