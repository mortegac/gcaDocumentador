import React, {Component} from 'react';
// import HeaderNav from '../components/headerNav/headerNav'

class Novedades extends Component {
  render () {
    return (
            <section id="newsletter" className="hero is-primary">
                <div className="hero-body">  
                    <div className="container">
                    <div id="mc_embed_signup" className="columns is-vcentered">
                        <div className="column is-one-third is-left">
                            <p className="title">Recibe <strong>Novedades</strong></p>
                            <p className="subtitle">Inscribete y recibe notificaciones</p>
                        </div>

                        <div className="column">
                        <form className="validate" target="_blank">
                            <div id="mc_embed_signup_scroll">
                            <div className="control is-grouped">
                                                    
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

    )
  }
}

export default Novedades;
